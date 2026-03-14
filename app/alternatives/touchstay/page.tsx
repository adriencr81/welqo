import type { Metadata } from 'next'
import AlternativePage from '@/components/alternatives/AlternativePage'

export const metadata: Metadata = {
  title: 'Meilleure alternative à TouchStay en 2025 — Welqo',
  description:
    'Welqo remplace TouchStay pour 79€ à vie au lieu de 99€/an. Mode hors-ligne inclus, setup en 15 minutes. Aucun abonnement.',
  openGraph: {
    title: 'Meilleure alternative à TouchStay en 2025 — Welqo',
    description: 'Guide d\'accueil numérique à vie pour 79€. Fonctionne hors-ligne. Plus simple que TouchStay.',
  },
}

export default function TouchStayAlternativePage() {
  return (
    <AlternativePage
      competitorName="TouchStay"
      competitorSlug="touchstay"
      seoTitle="Meilleure alternative à TouchStay en 2025 — Welqo"
      metaDescription="Welqo remplace TouchStay pour 79€ à vie au lieu de 99€/an."
      headline="La meilleure alternative à TouchStay en 2025"
      subheadline="Tout ce que fait TouchStay, sans l'abonnement annuel. Setup en 15 minutes, mode hors-ligne inclus, 79€ une fois pour toutes."
      verdict="TouchStay est une bonne solution, mais à ~100€/an vous dépensez plus que la valeur réelle de l'outil en quelques années. Welqo offre les mêmes fonctionnalités essentielles à prix fixe, avec en plus le mode hors-ligne que TouchStay n'a pas."
      competitorPricing="~99-120€/an (abonnement récurrent)"
      tableRows={[
        { label: 'Prix', competitor: '~99€/an', welqo: '79€ à vie', highlight: true },
        { label: 'Mode hors-ligne', competitor: false, welqo: true, highlight: true },
        { label: 'Temps de setup', competitor: '1-2h', welqo: '15 min', highlight: true },
        { label: 'QR code inclus', competitor: true, welqo: true },
        { label: 'Multi-propriétés', competitor: true, welqo: true },
        { label: 'Personnalisation couleurs', competitor: true, welqo: true },
        { label: 'Sections Wi-Fi, arrivée, règles…', competitor: true, welqo: true },
        { label: 'Mise à jour en temps réel', competitor: true, welqo: true },
        { label: 'Sans abonnement', competitor: false, welqo: true, highlight: true },
        { label: 'Prix transparent affiché', competitor: false, welqo: true },
      ]}
      whyLeave={[
        "L'abonnement annuel (~99€/an) revient à plus de 300€ en 3 ans pour un outil qu'on utilise ponctuellement. La valeur ne justifie pas le coût récurrent pour un hôte solo.",
        "TouchStay n'a pas de mode hors-ligne. Vos voyageurs dans un gîte rural ou une maison de montagne ne peuvent pas consulter le guide sans connexion — exactement là où c'est le plus utile.",
        "L'interface est puissante mais complexe pour quelqu'un qui veut juste créer un guide simple et propre rapidement. La courbe d'apprentissage est inutilement longue.",
        "Leur politique tarifaire peut changer à tout moment. Vous êtes lié à un abonnement et à leur roadmap, sans contrôle sur vos coûts futurs.",
      ]}
      migrationSteps={[
        {
          title: 'Exportez votre contenu',
          description: 'Récupérez les textes de vos sections TouchStay (Wi-Fi, instructions arrivée, règles, adresses). Un simple copier-coller suffit.',
        },
        {
          title: 'Créez votre guide Welqo',
          description: 'Créez un compte gratuit, ajoutez votre propriété et recréez vos sections en 15 minutes. L\'interface est conçue pour être plus rapide.',
        },
        {
          title: 'Remplacez le QR code',
          description: 'Téléchargez votre nouveau QR code Welqo et remplacez l\'ancien. Informez vos prochains voyageurs dans votre message de bienvenue.',
        },
      ]}
      faq={[
        {
          q: 'TouchStay propose un essai gratuit 14 jours — est-ce que Welqo aussi ?',
          a: 'Oui. Welqo a un plan gratuit permanent pour 1 propriété. Vous pouvez tester entièrement l\'outil avant de décider d\'acheter l\'accès à vie.',
        },
        {
          q: 'Est-ce que Welqo supporte le multilingue comme TouchStay ?',
          a: 'Le multilingue automatique est sur la roadmap post-MVP. Pour l\'instant vous pouvez créer manuellement du contenu en plusieurs langues. La plupart des hôtes solo n\'ont pas besoin de traduction automatique.',
        },
        {
          q: 'TouchStay a des intégrations PMS — est-ce que Welqo aussi ?',
          a: 'Pas en MVP. Les intégrations PMS (Airbnb, Vrbo, Booking.com) sont prévues pour la version Pro. Pour un hôte solo, elles sont rarement indispensables.',
        },
        {
          q: 'Si Welqo ferme dans 3 ans, qu\'est-ce qui se passe ?',
          a: 'C\'est la vraie question à poser à tout SaaS. Votre contenu reste exportable. Et contrairement à TouchStay, vous n\'aurez pas payé chaque année — votre investissement est fixe et amorti dès J1.',
        },
      ]}
    />
  )
}
