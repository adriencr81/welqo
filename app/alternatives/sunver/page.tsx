import type { Metadata } from 'next'
import AlternativePage from '@/components/alternatives/AlternativePage'

export const metadata: Metadata = {
  title: 'Meilleure alternative à Sunver en 2025 — Welqo',
  description:
    'Sunver coûte 60-120€/an par propriété. Welqo : 79€ à vie pour toutes vos propriétés. Mode hors-ligne, aucun abonnement, setup en 15 min.',
  openGraph: {
    title: 'Meilleure alternative à Sunver en 2025 — Welqo',
    description: 'Stop aux abonnements par propriété. 79€ à vie, hors-ligne, illimité.',
  },
}

export default function SunverAlternativePage() {
  return (
    <AlternativePage
      competitorName="Sunver"
      competitorSlug="sunver"
      seoTitle="Meilleure alternative à Sunver en 2025 — Welqo"
      metaDescription="Sunver coûte 60-120€/an par propriété. Welqo : 79€ à vie total."
      headline="La meilleure alternative à Sunver en 2025"
      subheadline="Sunver facture par propriété chaque mois. Avec 3 logements sur le plan Starter annuel, vous payez déjà 180$/an — et ça monte chaque année. Welqo : 79€ une fois pour toutes vos propriétés."
      verdict="Le modèle de Sunver est conçu pour les gestionnaires avec beaucoup de propriétés. Pour un hôte solo ou avec 2-5 logements, le coût par propriété devient vite douloureux. Welqo est structurellement plus avantageux dès la première année."
      competitorPricing="60$/an (Starter) à 120$/an (Gold) par propriété — prix publics"
      tableRows={[
        { label: 'Modèle tarifaire', competitor: 'Par propriété/mois', welqo: 'Paiement unique', highlight: true },
        { label: 'Coût 1 propriété / an', competitor: '60$ (Starter)', welqo: '79€ à vie', highlight: true },
        { label: 'Coût 3 propriétés / an', competitor: '180$ (Starter)', welqo: '79€ à vie', highlight: true },
        { label: 'Coût 3 propriétés / 3 ans', competitor: '540$', welqo: '79€ total', highlight: true },
        { label: 'Mode hors-ligne', competitor: false, welqo: true, highlight: true },
        { label: 'QR code inclus', competitor: true, welqo: true },
        { label: 'Mise à jour en temps réel', competitor: true, welqo: true },
        { label: 'Assistant IA', competitor: 'Gold ($10/prop/mois)', welqo: 'Post-MVP' },
        { label: 'Analytics', competitor: 'Inclus', welqo: 'Post-MVP' },
        { label: 'Multilingue', competitor: '10 langues (Pro)', welqo: 'Post-MVP' },
      ]}
      whyLeave={[
        "Le coût s'accumule vite. 3 propriétés sur le plan Starter annuel = 180$/an. Sur 3 ans c'est 540$ — soit 7x le prix de Welqo pour des fonctionnalités comparables. Et si vous passez au plan Gold pour l'IA, c'est encore plus.",
        "Sunver n'a pas de mode hors-ligne. Pour vos voyageurs dans des zones rurales ou à l'étranger avec un forfait limité, c'est un vrai problème que Sunver ne résout pas.",
        "Le plan gratuit de Sunver est très limité (1 guidebook, 5 recommandations, 5 FAQ). En pratique vous payez dès que vous avez un guide complet — et le coût par propriété s'applique immédiatement.",
        "Sunver cible les hôtels et structures professionnelles avec des features complexes (commandes, paiements Stripe, police forms). Pour un hôte Airbnb solo, c'est de la complexité inutile.",
      ]}
      migrationSteps={[
        {
          title: 'Récupérez votre contenu Sunver',
          description: 'Copiez vos sections existantes depuis chaque guide Sunver : Wi-Fi, instructions, recommandations, règles.',
        },
        {
          title: 'Créez vos guides sur Welqo',
          description: 'Un compte, toutes vos propriétés. Recréez vos sections en moins de 15 minutes par guide — l\'interface est volontairement simple.',
        },
        {
          title: 'Annulez votre abonnement Sunver',
          description: 'Une fois vos guides Welqo publiés et vos QR codes remplacés, résiliez Sunver. Vous ne paierez plus jamais par propriété.',
        },
      ]}
      faq={[
        {
          q: 'Sunver a un assistant IA — Welqo aussi ?',
          a: 'L\'assistant IA n\'est pas dans le MVP. Il est sur la roadmap. En pratique, la plupart des hôtes solo n\'en ont pas besoin : leur guide est créé une fois et mis à jour rarement.',
        },
        {
          q: 'Sunver propose des analytics (vues, scans) — important pour moi.',
          a: 'Les analytics arrivent en post-MVP sur le plan Pro. Pour le MVP, Welqo se concentre sur l\'essentiel : un guide beau, rapide, et qui fonctionne hors-ligne.',
        },
        {
          q: 'Le plan gratuit de Sunver me suffit pour l\'instant.',
          a: 'Si vous avez une propriété avec peu de contenu, c\'est possible. Mais dès que vous ajoutez une 2e propriété ou plus de 5 recommandations, vous êtes forcé de passer au payant. Et le coût par propriété commence.',
        },
        {
          q: 'Sunver a des intégrations pour hôtels (F&B, police forms) — est-ce que Welqo a ces modules ?',
          a: 'Non. Welqo cible les hôtes Airbnb et gîtes, pas les hôtels. Ces modules sont de la complexité que 95% des hôtes solo n\'utilisent jamais.',
        },
      ]}
    />
  )
}
