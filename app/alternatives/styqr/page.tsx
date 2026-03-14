import type { Metadata } from 'next'
import AlternativePage from '@/components/alternatives/AlternativePage'

export const metadata: Metadata = {
  title: 'Meilleure alternative à StyQR en 2025 — Welqo',
  description:
    'StyQR cache ses prix, Welqo les affiche. 79€ à vie, mode hors-ligne, setup en 15 minutes. La solution française transparente pour vos guides d\'accueil.',
  openGraph: {
    title: 'Meilleure alternative à StyQR en 2025 — Welqo',
    description: 'Guide d\'accueil numérique à 79€ à vie. Prix transparent, hors-ligne, sans abonnement caché.',
  },
}

export default function StyQRAlternativePage() {
  return (
    <AlternativePage
      competitorName="StyQR"
      competitorSlug="styqr"
      seoTitle="Meilleure alternative à StyQR en 2025 — Welqo"
      metaDescription="StyQR cache ses prix. Welqo : 79€ à vie, transparent, hors-ligne."
      headline="La meilleure alternative à StyQR en 2025"
      subheadline="StyQR est une solution française sérieuse, mais sans prix affiché et sans mode hors-ligne. Welqo propose la même chose avec des tarifs clairs et un guide qui fonctionne même sans réseau."
      verdict="StyQR ne publie pas ses tarifs — vous devez demander un devis. C'est le signe d'un pricing qui peut surprendre. Welqo affiche 79€ une fois, point final. Pas de négociation, pas de surprise."
      competitorPricing="Non communiqué publiquement — sur devis"
      tableRows={[
        { label: 'Prix affiché publiquement', competitor: false, welqo: true, highlight: true },
        { label: 'Tarif', competitor: 'Sur devis', welqo: '79€ à vie', highlight: true },
        { label: 'Mode hors-ligne', competitor: false, welqo: true, highlight: true },
        { label: 'Temps de setup', competitor: '~1h', welqo: '15 min', highlight: true },
        { label: 'QR code inclus', competitor: true, welqo: true },
        { label: 'Multi-propriétés', competitor: true, welqo: true },
        { label: 'Personnalisation couleurs', competitor: true, welqo: true },
        { label: 'Marché français', competitor: true, welqo: true },
        { label: 'Sans abonnement', competitor: false, welqo: true },
        { label: 'Multilingue', competitor: '8 langues', welqo: 'Post-MVP' },
      ]}
      whyLeave={[
        "StyQR ne publie pas ses tarifs. Vous devez contacter leur équipe pour obtenir un devis — c'est une friction inutile et souvent le signe d'un prix élevé qu'ils préfèrent justifier en appel plutôt qu'afficher en ligne.",
        "Aucune mention de mode hors-ligne. Pour les propriétés en zone rurale, montagne ou sans bon réseau, c'est une limitation concrète qui impacte directement vos voyageurs.",
        "Le processus de souscription implique un contact commercial, ce qui ralentit considérablement le démarrage. Welqo : compte créé, guide en ligne en 15 minutes, sans parler à personne.",
        "La localisation géographique automatique (points d'intérêt) semble dépendre de services tiers — une fonctionnalité utile mais qui peut ne pas fonctionner hors-ligne ou dans les zones mal référencées.",
      ]}
      migrationSteps={[
        {
          title: 'Récupérez votre contenu StyQR',
          description: 'Copiez les textes de vos modules existants : Wi-Fi, instructions, adresses, règles. Tout ce que vous avez écrit reste le vôtre.',
        },
        {
          title: 'Créez votre guide Welqo',
          description: 'Inscrivez-vous gratuitement, créez votre propriété et ajoutez vos sections. L\'interface est pensée pour être plus rapide que StyQR.',
        },
        {
          title: 'Activez le mode hors-ligne',
          description: 'Votre guide Welqo fonctionne automatiquement hors-ligne après le premier chargement. Rien à configurer — c\'est inclus par défaut.',
        },
      ]}
      faq={[
        {
          q: 'StyQR propose la géolocalisation des points d\'intérêt — Welqo aussi ?',
          a: 'Pas en MVP. Vous pouvez ajouter manuellement vos bonnes adresses avec distance et lien Maps dans la section "Places". La géolocalisation automatique est sur la roadmap.',
        },
        {
          q: 'StyQR supporte 8 langues — c\'est important pour moi.',
          a: 'Le multilingue automatique arrive en post-MVP. Si vous avez besoin de multilingue maintenant, vous pouvez créer manuellement des sections bilingues. Pour la majorité des hôtes solo, c\'est rarement nécessaire dès le départ.',
        },
        {
          q: 'StyQR a une note 4.8/5 — comment ça se compare à Welqo ?',
          a: 'Welqo est plus récent et construit ses premiers retours. La différence clé : 79€ une fois vs un abonnement non communiqué, plus le mode hors-ligne que StyQR n\'a pas.',
        },
      ]}
    />
  )
}
