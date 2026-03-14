interface SendEmailParams {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: SendEmailParams): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('RESEND_API_KEY non définie — email non envoyé')
    return
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Welqo <noreply@welqo.app>',
      to,
      subject,
      html,
    }),
  })

  if (!res.ok) {
    console.error('Resend error:', await res.text())
  }
}

export function ltdConfirmationEmail(): string {
  return `
    <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; padding: 32px;">
      <div style="text-align: center; margin-bottom: 32px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #111827; margin: 0;">
          Bienvenue sur Welqo ! 🎉
        </h1>
      </div>
      <p style="color: #374151; font-size: 15px; line-height: 1.6;">
        Votre accès à vie est activé. Vous pouvez désormais créer autant de guides
        d'accueil que vous souhaitez.
      </p>
      <div style="background: #eff6ff; border-radius: 12px; padding: 20px; margin: 24px 0;">
        <p style="margin: 0; color: #1d4ed8; font-weight: 600; font-size: 15px;">
          ✓ Propriétés illimitées<br/>
          ✓ Toutes les sections<br/>
          ✓ QR code par propriété<br/>
          ✓ Fonctionne hors-ligne<br/>
          ✓ Mises à jour incluses à vie
        </p>
      </div>
      <a
        href="${process.env.NEXT_PUBLIC_APP_URL}/properties"
        style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;"
      >
        Accéder à mon dashboard →
      </a>
      <p style="color: #6b7280; font-size: 13px; margin-top: 32px;">
        Une question ? Répondez directement à cet email.<br/>
        — L'équipe Welqo
      </p>
    </div>
  `
}
