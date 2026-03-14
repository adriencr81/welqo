import type { Metadata } from 'next'
import AlternativePage from '@/components/alternatives/AlternativePage'

export const metadata: Metadata = {
  title: 'Alternative à StayGuide et aux guides PDF statiques — Welqo',
  description:
    'StayGuide n\'est plus actif. Cherchez-vous un guide d\'accueil numérique pour votre location ? Welqo remplace les PDF et guides statiques : QR code, hors-ligne, 79€ à vie.',
  openGraph: {
    title: 'Alternative à StayGuide — Welqo',
    description: 'Guide d\'accueil numérique avec QR code. Hors-ligne. 79€ à vie.',
  },
}

export default function StayGuideAlternativePage() {
  return (
    <AlternativePage
      competitorName="StayGuide / guides statiques"
      competitorSlug="stayguide"
      seoTitle="Alternative à StayGuide — Welqo"
      metaDescription="StayGuide n'est plus actif. Welqo : guide numérique, hors-ligne, 79€ à vie."
      headline="Vous cherchiez StayGuide ? Voici ce que vous cherchiez vraiment"
      subheadline="StayGuide (stayguide.app / stayguide.io) n'est plus un produit actif. Si vous cherchez un guide d'accueil numérique pour votre location saisonnière, Welqo fait exactement ça — avec le mode hors-ligne en plus."
      verdict="La plupart des recherches 'StayGuide' viennent d'hôtes qui veulent remplacer leur PDF ou leur doc Google. Welqo est exactement ça : un guide beau, mobile, accessible sans connexion, que vous créez en 15 minutes."
      competitorPricing="Produit inactif — stayguide.app et stayguide.io ne sont plus opérationnels"
      tableRows={[
        { label: 'Disponibilité', competitor: '❌ Site inactif', welqo: '✅ Opérationnel', highlight: true },
        { label: 'Mode hors-ligne', competitor: false, welqo: true, highlight: true },
        { label: 'QR code inclus', competitor: false, welqo: true, highlight: true },
        { label: 'Mise à jour en temps réel', competitor: false, welqo: true, highlight: true },
        { label: 'Setup', competitor: 'N/A', welqo: '15 min' },
        { label: 'Multi-propriétés', competitor: false, welqo: true },
        { label: 'Prix', competitor: 'N/A', welqo: '79€ à vie' },
        { label: 'Sans app à télécharger', competitor: false, welqo: true },
      ]}
      whyLeave={[
        "StayGuide n'est plus opérationnel. Les domaines stayguide.app et stayguide.io sont inactifs ou redirigent vers des pages par défaut. Si vous avez trouvé cette page, vous cherchez ce que StayGuide promettait — pas StayGuide lui-même.",
        "Les guides PDF et Word que beaucoup d'hôtes utilisent en remplacement sont statiques : vous devez le renvoyer à chaque mise à jour, il ne fonctionne pas hors-ligne, et il est souvent moche sur mobile.",
        "Les docs Google partagés fonctionnent, mais ne sont pas pensés pour les touristes : pas de QR code, aucun branding, nécessitent un compte Google pour les modifier, et n'ont aucun mode hors-ligne.",
        "Un guide Notion public est une solution de bricolage : beau sur desktop, souvent mal rendu sur mobile, aucun mode hors-ligne, aucun QR code natif, et dépend entièrement de la disponibilité de Notion.",
      ]}
      migrationSteps={[
        {
          title: 'Récupérez votre contenu existant',
          description: 'Que ce soit un PDF, un doc Word, un Google Doc ou un Notion — copiez vos textes : Wi-Fi, instructions d\'arrivée, règles, bonnes adresses.',
        },
        {
          title: 'Créez votre guide Welqo',
          description: 'Créez un compte gratuit et collez votre contenu dans les sections correspondantes. L\'interface est conçue pour que ça prenne moins de 15 minutes.',
        },
        {
          title: 'Imprimez le QR code et oubliez les PDF',
          description: 'Téléchargez votre QR code et collez-le dans votre logement. Vos voyageurs ont accès à votre guide à jour, même sans connexion.',
        },
      ]}
      faq={[
        {
          q: 'J\'utilisais un PDF — pourquoi passer à Welqo ?',
          a: 'Trois raisons : votre PDF ne se met pas à jour automatiquement chez vos voyageurs, il ne fonctionne pas hors-ligne fiablement sur tous les téléphones, et vous devez le renvoyer à chaque réservation. Welqo règle les trois.',
        },
        {
          q: 'J\'utilise Notion ou Google Docs — c\'est vraiment insuffisant ?',
          a: 'Ça fonctionne, mais c\'est du bricolage. Aucun QR code natif, pas de mode hors-ligne, pas pensé pour les touristes sur mobile. Welqo est conçu spécifiquement pour ce cas d\'usage.',
        },
        {
          q: 'Est-ce que mes voyageurs ont besoin d\'un compte pour voir le guide ?',
          a: 'Non. Ils scannent le QR code ou cliquent sur un lien, et le guide s\'ouvre directement dans leur navigateur. Aucune inscription, aucun téléchargement.',
        },
        {
          q: 'Qu\'est-ce qui se passe si je mets à jour mon guide alors qu\'un voyageur l\'a déjà ouvert ?',
          a: 'Ils voient les modifications dès qu\'ils rechargent la page ou se reconnectent. Et grâce au mode hors-ligne, ils gardent accès à la version mise en cache même sans réseau.',
        },
      ]}
    />
  )
}
