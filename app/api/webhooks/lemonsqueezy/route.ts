import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { verifyWebhookSignature } from '@/lib/lemonsqueezy'
import { sendEmail, ltdConfirmationEmail } from '@/lib/resend'

// Client Supabase avec service role (bypass RLS)
function getAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get('x-signature') ?? ''

  // Vérification de la signature
  const isValid = await verifyWebhookSignature(body, signature)
  if (!isValid) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  let event: Record<string, unknown>
  try {
    event = JSON.parse(body) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const eventName = event.meta
    ? (event.meta as Record<string, unknown>).event_name
    : null

  // On ne traite que les commandes complétées
  if (eventName !== 'order_created') {
    return NextResponse.json({ received: true })
  }

  const data = event.data as Record<string, unknown>
  const attributes = data?.attributes as Record<string, unknown>
  const meta = event.meta as Record<string, unknown>
  const customData = meta?.custom_data as Record<string, unknown> | undefined

  const userId = customData?.user_id as string | undefined
  const customerEmail = attributes?.user_email as string | undefined
  const orderId = String(data?.id ?? '')
  const customerId = String(attributes?.customer_id ?? '')

  if (!userId) {
    console.error('Webhook LS: user_id manquant dans custom_data')
    return NextResponse.json({ error: 'user_id missing' }, { status: 400 })
  }

  const supabase = getAdminClient()

  // Mise à jour du plan dans Supabase
  const { error } = await supabase
    .from('profiles')
    .update({
      plan: 'ltd',
      ltd_activated_at: new Date().toISOString(),
      lemonsqueezy_customer_id: customerId,
      lemonsqueezy_order_id: orderId,
    })
    .eq('id', userId)

  if (error) {
    console.error('Webhook LS: erreur mise à jour profile', error)
    return NextResponse.json({ error: 'DB update failed' }, { status: 500 })
  }

  // Email de confirmation
  if (customerEmail) {
    await sendEmail({
      to: customerEmail,
      subject: 'Votre accès Welqo à vie est activé 🎉',
      html: ltdConfirmationEmail(),
    })
  }

  return NextResponse.json({ received: true })
}
