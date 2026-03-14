import type { Metadata } from 'next'
import AlternativePage from '@/components/alternatives/AlternativePage'

export const metadata: Metadata = {
  title: 'Meilleure alternative à Hostfully pour les hôtes solo — Welqo',
  description:
    'Hostfully est conçu pour les agences gérant 20+ propriétés. Si vous êtes hôte solo ou avez moins de 10 logements, Welqo est plus adapté : 79€ à vie, setup en 15 minutes.',
  openGraph: {
    title: 'Meilleure alternative à Hostfully pour les hôtes solo — Welqo',
    description: 'Hostfully c\'est pour les agences. Welqo c\'est pour vous. 79€ à vie, hors-ligne, simple.',
  },
}

export default function HostfullyAlternativePage() {
  return (
    <AlternativePage
      competitorName="Hostfully"
      competitorSlug="hostfully"
      seoTitle="Meilleure alternative à Hostfully pour les hôtes solo — Welqo"
      metaDescription="Hostfully pour agences. Welqo pour hôtes solo. 79€ à vie."
      headline="Hostfully est fait pour les agences — Welqo est fait pour vous"
      subheadline="Hostfully est un PMS complet pour des agences gérant 20 à 200 propriétés. Si vous avez 1 à 10 logements, c'est une usine à gaz hors de prix. Welqo fait exactement ce dont vous avez besoin, en 15 minutes, pour 79€."
      verdict="Hostfully ne publie pas ses prix — ils demandent un appel commercial. Pour les hôtes solo, c'est déjà un signal : ce n'est pas votre outil. Welqo est conçu spécifiquement pour les propriétaires individuels qui veulent un guide propre, rapide, et qui fonctionne hors-ligne."
      competitorPricing="Non communiqué — appel commercial requis (estimé 200-500€/an pour les petites structures)"
      tableRows={[
        { label: 'Cible', competitor: 'Agences 20-200 props', welqo: 'Hôtes solo 1-10 props', highlight: true },
        { label: 'Prix', competitor: 'Sur devis', welqo: '79€ à vie', highlight: true },
        { label: 'Temps de setup', competitor: 'Demi-journée+', welqo: '15 min', highlight: true },
        { label: 'Mode hors-ligne', competitor: false, welqo: true, highlight: true },
        { label: 'Complexité', competitor: 'Élevée (PMS complet)', welqo: 'Minimale', highlight: true },
        { label: 'QR code inclus', competitor: true, welqo: true },
        { label: 'Multi-propriétés', competitor: true, welqo: true },
        { label: 'Channel manager', competitor: true, welqo: false },
        { label: 'API ouverte', competitor: true, welqo: 'Post-MVP' },
        { label: 'App mobile dédiée', competitor: true, welqo: 'PWA installable' },
      ]}
      whyLeave={[
        "Hostfully est un PMS (Property Management System) complet : calendar centralisé, channel manager sur 60 plateformes, inbox unifiée, pipeline de réservation… Si vous avez 1-5 propriétés, vous payez pour 80% de fonctionnalités que vous n'utilisez jamais.",
        "Leur pricing est opaque. Pas de tarif affiché, appel commercial obligatoire, et les estimations du marché tournent autour de 200-500€/an pour les petites structures. Welqo : 79€ une fois.",
        "La courbe d'apprentissage est très longue. Hostfully est puissant mais complexe — il faut du temps pour configurer et former une équipe. Pour un hôte solo, c'est disproportionné.",
        "Le mode hors-ligne n'existe pas. Vos voyageurs dans une propriété rurale ou à l'étranger ne peuvent pas consulter le guide sans connexion.",
      ]}
      migrationSteps={[
        {
          title: 'Identifiez ce que vous utilisez vraiment',
          description: 'Dans Hostfully, listez les 5 fonctionnalités que vous utilisez réellement. Pour la plupart des hôtes solo : c\'est juste le guide digital.',
        },
        {
          title: 'Recréez votre guide sur Welqo',
          description: 'Copiez votre contenu depuis Hostfully Guidebooks vers Welqo. L\'interface est bien plus rapide — comptez 15 minutes par propriété.',
        },
        {
          title: 'Résiliez les modules inutiles ou tout Hostfully',
          description: 'Si vous n\'utilisez que les guides, résiliez complètement. Si vous avez besoin du PMS, gardez-le pour la gestion mais utilisez Welqo pour les guides voyageurs.',
        },
      ]}
      faq={[
        {
          q: 'J\'utilise Hostfully pour le channel manager — je dois garder les deux ?',
          a: 'Tout à fait. Welqo remplace uniquement le module "Digital Guidebooks" d\'Hostfully. Vous pouvez garder Hostfully pour la gestion des réservations et utiliser Welqo pour les guides voyageurs.',
        },
        {
          q: 'Hostfully propose un guidebook gratuit — Welqo aussi ?',
          a: 'Oui. Le plan gratuit de Welqo inclut 1 propriété complète, sans limite de temps. Vous pouvez tester sans engagement avant d\'acheter l\'accès à vie.',
        },
        {
          q: 'Je gère 15 propriétés pour des clients — Hostfully n\'est-il pas plus adapté ?',
          a: 'Pour 15 propriétés, Hostfully peut être justifié si vous avez besoin du PMS complet. Welqo cible surtout les hôtes solo et les petites agences jusqu\'à ~10 propriétés. Un plan Agence est prévu en roadmap.',
        },
        {
          q: 'Hostfully a des intégrations Airbnb/Vrbo — Welqo aussi ?',
          a: 'Les intégrations PMS sont sur la roadmap post-MVP. En MVP, le guide est créé manuellement — ce qui prend 15 minutes et ne nécessite aucune intégration.',
        },
      ]}
    />
  )
}
