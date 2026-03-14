/**
 * Construit l'URL de checkout Lemon Squeezy avec les données custom
 * Le user_id est passé pour identifier l'acheteur côté webhook
 */
export function buildCheckoutUrl(userId: string): string {
  const base = process.env.NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL
  if (!base) throw new Error('NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL non définie')

  const url = new URL(base)
  url.searchParams.set('checkout[custom][user_id]', userId)
  url.searchParams.set('checkout[email]', '') // pré-rempli si dispo

  return url.toString()
}

/**
 * Vérifie la signature HMAC-SHA256 du webhook Lemon Squeezy
 */
export async function verifyWebhookSignature(
  payload: string,
  signature: string
): Promise<boolean> {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET
  if (!secret) return false

  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )

  const signatureBuffer = await crypto.subtle.sign('HMAC', key, encoder.encode(payload))
  const computedSignature = Buffer.from(signatureBuffer).toString('hex')

  return computedSignature === signature
}
