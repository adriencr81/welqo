import Link from 'next/link'
import { Check, X, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Livret d\'accueil Airbnb : gratuit ou payant — que choisir en 2025 ?',
  description:
    'Comparatif complet des solutions gratuites (Google Docs, Notion, PDF, Airbnb Guidebook) vs payantes (TouchStay, Welqo) pour créer votre livret d\'accueil Airbnb.',
  openGraph: {
    title: 'Livret d\'accueil Airbnb : gratuit ou payant en 2025 ?',
    description: 'Comparatif honnête des solutions gratuites et payantes pour votre guide d\'accueil location saisonnière.',
  },
}

export default function LivretAccueilGratuitVsPayantPage() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-semibold text-gray-900 text-lg">Welqo</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900 px-3 py-2">Se connecter</Link>
            <Link href="/signup" className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors">
              Essayer gratuitement
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-700">Welqo</Link>
          <span>›</span>
          <span className="text-gray-700">Blog</span>
          <span>›</span>
          <span className="text-gray-700">Livret accueil gratuit vs payant</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Guide comparatif · Mis à jour mars 2025
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Livret d&apos;accueil Airbnb : gratuit ou payant — que choisir en 2025 ?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Vous vous demandez si un outil payant vaut vraiment le coup par rapport à un Google Doc ou un PDF ? Voici un comparatif honnête de toutes les options, avec les avantages et limites de chacune.
          </p>
        </div>

        {/* Sommaire */}
        <nav className="bg-gray-50 rounded-2xl p-6 mb-10 border border-gray-100">
          <p className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">Dans cet article</p>
          <ol className="space-y-2 text-sm">
            {[
              ['#pourquoi', 'Pourquoi avoir un livret d\'accueil ?'],
              ['#gratuit', 'Les solutions gratuites (et leurs limites)'],
              ['#payant', 'Les solutions payantes'],
              ['#comparatif', 'Tableau comparatif complet'],
              ['#verdict', 'Notre verdict : quand passer au payant ?'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-blue-600 hover:text-blue-800 hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="prose prose-gray max-w-none space-y-10">

          {/* Section 1 */}
          <section id="pourquoi">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi avoir un livret d&apos;accueil ?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chaque hôte Airbnb répond en moyenne aux mêmes 8 à 12 questions à chaque séjour : le code Wi-Fi, le fonctionnement du chauffage, où mettre les poubelles, un restaurant recommandé... Multiplié par 20, 30 ou 50 séjours par an, c&apos;est des heures perdues en réponses identiques.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Un livret d&apos;accueil numérique règle ça une fois pour toutes. Mais la vraie question est : quel niveau d&apos;outil justifie un investissement ?
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-blue-800">
              <strong>Pour qui cet article est-il utile ?</strong> Pour les hôtes Airbnb, Gîtes de France, Booking.com qui veulent un guide d&apos;accueil propre sans passer des heures à configurer un outil complexe.
            </div>
          </section>

          {/* Section 2 */}
          <section id="gratuit">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Les solutions gratuites — et leurs vraies limites</h2>

            {[
              {
                name: 'PDF ou document Word',
                pros: ['Zéro coût', 'Vous le mettez en forme comme vous voulez', 'Envoyable par message'],
                cons: [
                  'Pas de mode hors-ligne : si le voyageur ne l\'a pas téléchargé, il ne peut pas l\'ouvrir sans réseau',
                  'Mise à jour = renvoyer le fichier à tous vos voyageurs en cours',
                  'Souvent mal affiché sur mobile (taille de police, mise en page cassée)',
                  'Aucun QR code natif — vous devez en créer un séparément',
                ],
                verdict: 'Acceptable pour débuter, insuffisant dès que vous avez plus de 5-10 séjours/an.',
              },
              {
                name: 'Google Docs partagé',
                pros: ['Gratuit', 'Mise à jour en temps réel (vos voyageurs voient les changements)', 'Accessible depuis un lien'],
                cons: [
                  'Pas pensé pour les touristes : interface Google peu adaptée sur mobile',
                  'Nécessite un compte Google pour modifier',
                  'Aucun mode hors-ligne — en zone blanche, inutilisable',
                  'Aucun QR code, aucun branding possible',
                  'Problèmes de RGPD : vos données hébergées sur des serveurs US',
                ],
                verdict: 'Pratique mais bricolage. Vos voyageurs sentent que vous n\'avez pas vraiment investi dans leur expérience.',
              },
              {
                name: 'Notion public',
                pros: ['Beau sur desktop', 'Hiérarchie de pages très flexible', 'Lien partageable'],
                cons: [
                  'Rendu mobile souvent bancal (menus, colonnes)',
                  'Aucun mode hors-ligne natif',
                  'Dépend de la disponibilité de Notion (pannes, changements de politique)',
                  'Aucun QR code intégré',
                  'Limite de vues sur le plan gratuit (1000 vues/mois)',
                ],
                verdict: 'Solution de "tech-savvy host" mais fragile et pas pensée pour des voyageurs non initiés.',
              },
              {
                name: 'Airbnb Guidebook (natif)',
                pros: ['Intégré à la plateforme Airbnb', 'Visible directement depuis l\'app voyageur', 'Gratuit'],
                cons: [
                  'Disponible seulement pour les voyageurs qui utilisent l\'app Airbnb',
                  'Uniquement pour les réservations Airbnb — inutilisable pour Booking, Gîtes, location directe',
                  'Sections très limitées : pas de Wi-Fi, pas d\'instructions techniques',
                  'Aucun QR code, aucun lien partageable indépendant',
                  'Zéro personnalisation visuelle',
                ],
                verdict: 'Utile en complément mais jamais suffisant seul. Ne couvre pas les usages hors-Airbnb.',
              },
            ].map((tool) => (
              <div key={tool.name} className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
                <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                  <h3 className="font-bold text-gray-900">{tool.name}</h3>
                </div>
                <div className="p-5 grid sm:grid-cols-2 gap-5">
                  <div>
                    <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">✓ Avantages</p>
                    <ul className="space-y-1">
                      {tool.pros.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">✗ Limites</p>
                    <ul className="space-y-1">
                      {tool.cons.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                          <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-5 py-3 bg-amber-50 border-t border-amber-100">
                  <p className="text-sm text-amber-800"><strong>Notre avis :</strong> {tool.verdict}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Section 3 */}
          <section id="payant">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Les solutions payantes</h2>

            {[
              {
                name: 'TouchStay',
                price: '~99€/an par propriété',
                target: 'Hôtes professionnels, B&B, glamping',
                pros: ['Interface complète et professionnelle', 'QR code intégré', 'Multilingue', 'IA pour rédiger le contenu'],
                cons: ['Abonnement annuel — coût récurrent', 'Interface complexe pour un usage simple', 'Pas de mode hors-ligne', 'Pricing opaque (calculateur JS)'],
                verdict: 'Le leader du marché. Puissant mais sur-dimensionné pour un hôte solo. À ~100€/an, vous payez beaucoup pour des fonctionnalités que vous n\'utiliserez pas.',
              },
              {
                name: 'Sunver',
                price: '60-120$/an par propriété',
                target: 'Hôtels, résidences, camping',
                pros: ['Pricing transparent', 'Assistant IA inclus (Gold)', 'Commandes et paiements voyageurs', 'Multilingue'],
                cons: ['Facturé par propriété — s\'accumule vite', 'Cible les hôtels et structures professionnelles', 'Pas de mode hors-ligne', 'Fonctionnalités inutiles pour Airbnb'],
                verdict: '3 propriétés sur Gold annuel = 216$/an. Pertinent pour les hôtels, pas pour un hôte Airbnb classique.',
              },
              {
                name: 'Welqo',
                price: '79€ une fois (early bird : 59€)',
                target: 'Hôtes Airbnb, gîtes, locations saisonnières',
                pros: ['Paiement unique — plus jamais d\'abonnement', 'Mode hors-ligne inclus', 'Setup en 15 minutes', 'QR code téléchargeable', 'Gratuit pour 1 propriété'],
                cons: ['Multilingue post-MVP', 'Analytics post-MVP', 'Plus jeune que les concurrents'],
                verdict: 'Conçu spécifiquement pour les hôtes solo. Le mode hors-ligne est unique sur le marché. À 79€ une fois, amorti dès le premier séjour évité.',
              },
            ].map((tool) => (
              <div key={tool.name} className={`border rounded-2xl overflow-hidden mb-6 ${tool.name === 'Welqo' ? 'border-blue-300 ring-2 ring-blue-100' : 'border-gray-200'}`}>
                <div className={`px-5 py-3 border-b flex items-center justify-between ${tool.name === 'Welqo' ? 'bg-blue-600 border-blue-500' : 'bg-gray-50 border-gray-200'}`}>
                  <h3 className={`font-bold ${tool.name === 'Welqo' ? 'text-white' : 'text-gray-900'}`}>{tool.name}</h3>
                  <div className="text-right">
                    <span className={`text-sm font-semibold ${tool.name === 'Welqo' ? 'text-blue-100' : 'text-gray-600'}`}>{tool.price}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-500 mb-4">Cible : {tool.target}</p>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">✓ Points forts</p>
                      <ul className="space-y-1">
                        {tool.pros.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">✗ Limites</p>
                      <ul className="space-y-1">
                        {tool.cons.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                            <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`px-5 py-3 border-t ${tool.name === 'Welqo' ? 'bg-blue-50 border-blue-100' : 'bg-amber-50 border-amber-100'}`}>
                  <p className="text-sm text-gray-800"><strong>Notre avis :</strong> {tool.verdict}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Comparison table */}
          <section id="comparatif">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tableau comparatif complet</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left p-3 font-semibold text-gray-600 w-1/4">Critère</th>
                    <th className="p-3 text-center font-semibold text-gray-600">PDF/Word</th>
                    <th className="p-3 text-center font-semibold text-gray-600">Google Docs</th>
                    <th className="p-3 text-center font-semibold text-gray-600">TouchStay</th>
                    <th className="p-3 text-center font-semibold text-blue-600 bg-blue-50">Welqo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { label: 'Prix', pdf: 'Gratuit', gdocs: 'Gratuit', ts: '~99€/an', welqo: '79€ à vie' },
                    { label: 'Mode hors-ligne', pdf: false, gdocs: false, ts: false, welqo: true },
                    { label: 'QR code intégré', pdf: false, gdocs: false, ts: true, welqo: true },
                    { label: 'Mise à jour temps réel', pdf: false, gdocs: true, ts: true, welqo: true },
                    { label: 'Optimisé mobile', pdf: false, gdocs: false, ts: true, welqo: true },
                    { label: 'Multi-propriétés', pdf: true, gdocs: true, ts: true, welqo: true },
                    { label: 'Sans abonnement', pdf: true, gdocs: true, ts: false, welqo: true },
                    { label: 'Sans app voyageur', pdf: true, gdocs: true, ts: true, welqo: true },
                  ].map((row) => (
                    <tr key={row.label}>
                      <td className="p-3 font-medium text-gray-700">{row.label}</td>
                      {(['pdf', 'gdocs', 'ts', 'welqo'] as const).map((key) => (
                        <td key={key} className={`p-3 text-center ${key === 'welqo' ? 'bg-blue-50' : ''}`}>
                          {typeof row[key] === 'boolean'
                            ? row[key]
                              ? <Check className="h-4 w-4 text-green-500 mx-auto" />
                              : <X className="h-4 w-4 text-red-400 mx-auto" />
                            : <span className={`text-sm ${key === 'welqo' ? 'font-bold text-blue-700' : 'text-gray-600'}`}>{row[key]}</span>
                          }
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Verdict */}
          <section id="verdict">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre verdict : quand passer au payant ?</h2>

            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-800 mb-2">Le gratuit suffit si…</h3>
                <ul className="space-y-1 text-sm text-green-700">
                  <li>• Vous avez moins de 5 séjours par an et peu de questions récurrentes</li>
                  <li>• Vos voyageurs ont toujours une bonne connexion</li>
                  <li>• Vous n&apos;avez qu&apos;une seule propriété et ne prévoyez pas d&apos;en avoir d&apos;autres</li>
                  <li>• Le temps passé à répondre aux questions ne vous dérange pas</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-800 mb-2">Le payant vaut le coup si…</h3>
                <ul className="space-y-1 text-sm text-blue-700">
                  <li>• Vous avez 10+ séjours par an (le ROI est immédiat)</li>
                  <li>• Votre propriété est dans une zone avec réseau limité</li>
                  <li>• Vous gérez plusieurs logements</li>
                  <li>• Vous voulez que vos voyageurs aient une vraie expérience premium</li>
                  <li>• Vous en avez marre de répondre aux mêmes messages</li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-bold text-amber-800 mb-2">Le cas Welqo : le meilleur des deux mondes</h3>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Welqo a un plan gratuit permanent pour 1 propriété — vous pouvez donc tester toutes les fonctionnalités sans payer. Si ça vous convient, l&apos;accès à vie (multi-propriétés, toutes les features) coûte 79€ une fois. Sur 3 ans, c&apos;est 26€/an — moins cher que n&apos;importe quel concurrent en abonnement.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-blue-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Testez Welqo gratuitement — sans carte bleue
          </h2>
          <p className="text-blue-100 mb-6">
            1 propriété complète, toutes les sections, QR code inclus. Gratuit pour toujours.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-blue-600 font-bold px-8 py-4 rounded-xl transition-colors shadow-xl"
          >
            Créer mon guide gratuitement
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="text-blue-200 text-sm mt-4">
            Accès immédiat · Aucune carte bleue · Upgrade à 59€ si vous voulez plus de propriétés
          </p>
        </div>

      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">W</span>
            </div>
            <span className="text-white font-semibold">Welqo</span>
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <Link href="/alternatives/touchstay" className="hover:text-white">vs TouchStay</Link>
            <Link href="/alternatives/hostfully" className="hover:text-white">vs Hostfully</Link>
          </div>
          <p className="text-sm">© 2025 Welqo</p>
        </div>
      </footer>
    </div>
  )
}
