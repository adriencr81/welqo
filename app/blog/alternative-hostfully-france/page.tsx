import Link from 'next/link'
import { Check, X, ArrowRight, Star } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meilleure alternative à Hostfully en France pour les hôtes solo — Welqo 2025',
  description:
    'Hostfully est conçu pour les agences gérant 20+ propriétés. Si vous êtes hôte Airbnb solo en France, voici pourquoi Welqo est une meilleure alternative : plus simple, plus abordable, hors-ligne.',
  openGraph: {
    title: 'Meilleure alternative à Hostfully France — Welqo 2025',
    description: 'Hostfully est pour les agences. Welqo est pour vous. 79€ à vie, hors-ligne, 15 minutes de setup.',
  },
}

export default function AlternativeHostfullyFrancePage() {
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
          <span className="text-gray-700">Alternative Hostfully France</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Comparatif · Marché français · Mars 2025
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Meilleure alternative à Hostfully en France pour les hôtes solo
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Hostfully est un PMS puissant — conçu pour les agences qui gèrent des dizaines de propriétés. Si vous êtes hôte solo ou gestionnaire de moins de 10 logements en France, c&apos;est une usine à gaz hors de prix. Voici ce qui existe à la place.
          </p>
        </div>

        {/* TL;DR */}
        <div className="bg-blue-600 rounded-2xl p-6 mb-10 text-white">
          <p className="font-bold text-lg mb-2">En résumé</p>
          <ul className="space-y-1 text-blue-100 text-sm">
            <li>• Hostfully ne publie pas ses prix — appel commercial obligatoire</li>
            <li>• Conçu pour des agences 20-200 propriétés, pas pour des hôtes solo</li>
            <li>• Pas de mode hors-ligne, interface complexe, courbe d&apos;apprentissage longue</li>
            <li>• <strong className="text-white">Welqo est l&apos;alternative française : 79€ à vie, hors-ligne, 15 min de setup</strong></li>
          </ul>
        </div>

        {/* Sommaire */}
        <nav className="bg-gray-50 rounded-2xl p-6 mb-10 border border-gray-100">
          <p className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">Dans cet article</p>
          <ol className="space-y-2 text-sm">
            {[
              ['#hostfully-cest-quoi', 'Qu\'est-ce qu\'Hostfully exactement ?'],
              ['#hostfully-france', 'Hostfully pour le marché français — les problèmes'],
              ['#alternatives', 'Les meilleures alternatives'],
              ['#welqo-vs-hostfully', 'Welqo vs Hostfully — comparaison détaillée'],
              ['#quand-hostfully', 'Quand Hostfully est-il justifié ?'],
              ['#verdict', 'Verdict final'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-blue-600 hover:text-blue-800 hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="prose prose-gray max-w-none space-y-10">

          <section id="hostfully-cest-quoi">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu&apos;est-ce qu&apos;Hostfully exactement ?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hostfully est un <strong>Property Management System (PMS)</strong> américain fondé en 2015. Il propose deux produits distincts :
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-2"><span className="mt-1 text-blue-500">→</span> <span><strong>Hostfully PMS</strong> : channel manager, inbox unifiée, calendar centralisé, direct booking site, automation, owner portal — pour des agences professionnelles</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 text-blue-500">→</span> <span><strong>Hostfully Digital Guidebooks</strong> : guide d&apos;accueil numérique avec QR code, recommandations locales, IA — disponible séparément</span></li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Le premier guidebook est gratuit. Au-delà, les prix ne sont pas communiqués publiquement. La cible officielle : des gestionnaires de 5 à 200+ propriétés.
            </p>
          </section>

          <section id="hostfully-france">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hostfully pour le marché français — les problèmes concrets</h2>

            <div className="space-y-4">
              {[
                {
                  title: 'Pricing opaque — impossible de budgéter',
                  body: 'Hostfully n\'affiche aucun tarif public. Vous devez demander une démo, parler à un commercial, et négocier. Pour un hôte solo français qui veut juste créer un guide d\'accueil, c\'est une friction totalement injustifiée.',
                },
                {
                  title: 'Complexité disproportionnée',
                  body: 'Hostfully est pensé pour des équipes. La configuration initiale prend plusieurs jours. Les formations, les connecteurs PMS, les API — tout ça est hors-sujet si vous gérez 1 à 5 appartements en location saisonnière.',
                },
                {
                  title: 'Interface en anglais, support US-centré',
                  body: 'Hostfully est un produit américain. Le support, la documentation, la communauté — tout est en anglais. Pour un hôte français qui veut une interface localisée et un support réactif en français, c\'est un vrai frein.',
                },
                {
                  title: 'Pas de mode hors-ligne',
                  body: 'Les Guidebooks Hostfully ne fonctionnent pas hors-ligne. Pour les propriétés dans des zones rurales, en montagne ou dans des régions à réseau limité — un problème fréquent dans les gîtes français — vos voyageurs ne peuvent pas accéder au guide sans connexion.',
                },
                {
                  title: 'TVA et facturation française compliquée',
                  body: 'En tant qu\'éditeur américain, Hostfully peut poser des problèmes de facturation avec TVA pour les professionnels français. Welqo, édité en France, gère automatiquement la TVA française.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-5 bg-red-50 rounded-xl border border-red-100">
                  <X className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="alternatives">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Les meilleures alternatives pour les hôtes français</h2>

            <div className="space-y-4">
              {[
                {
                  name: 'Welqo',
                  badge: '⭐ Notre recommandation',
                  badgeColor: 'bg-blue-600 text-white',
                  description: 'Conçu spécifiquement pour les hôtes Airbnb et gîtes français. Paiement unique 79€, mode hors-ligne, setup en 15 minutes. Plan gratuit permanent disponible.',
                  best: 'Hôtes solo, 1-10 propriétés, gîtes ruraux',
                  price: '79€ à vie (plan gratuit pour 1 propriété)',
                },
                {
                  name: 'TouchStay',
                  badge: 'Bon si vous pouvez payer l\'abonnement',
                  badgeColor: 'bg-gray-100 text-gray-600',
                  description: 'Le leader du marché. Interface complète, IA pour le contenu, multilingue. Mais ~99€/an et pas de mode hors-ligne.',
                  best: 'Hôtes avec revenus locatifs stables qui veulent le meilleur outil du marché',
                  price: '~99-120€/an',
                },
                {
                  name: 'StyQR',
                  badge: 'Alternative française',
                  badgeColor: 'bg-gray-100 text-gray-600',
                  description: 'Solution française avec 8 langues et QR code personnalisable. Prix non communiqué (sur devis). Pas de mode hors-ligne.',
                  best: 'Hôtes qui veulent une solution 100% française et multilingue dès le départ',
                  price: 'Sur devis',
                },
              ].map((alt) => (
                <div key={alt.name} className={`border rounded-2xl overflow-hidden ${alt.name === 'Welqo' ? 'border-blue-300 ring-2 ring-blue-100' : 'border-gray-200'}`}>
                  <div className={`px-5 py-3 border-b flex items-center justify-between ${alt.name === 'Welqo' ? 'bg-blue-600 border-blue-500' : 'bg-gray-50 border-gray-100'}`}>
                    <h3 className={`font-bold ${alt.name === 'Welqo' ? 'text-white' : 'text-gray-900'}`}>{alt.name}</h3>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${alt.badgeColor}`}>{alt.badge}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">{alt.description}</p>
                    <div className="flex flex-wrap gap-4 text-xs">
                      <span className="text-gray-500"><strong>Idéal pour :</strong> {alt.best}</span>
                      <span className="text-gray-500"><strong>Prix :</strong> {alt.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="welqo-vs-hostfully">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Welqo vs Hostfully Guidebooks — comparaison détaillée</h2>

            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left p-3 font-semibold text-gray-600">Critère</th>
                    <th className="p-3 text-center font-semibold text-gray-600">Hostfully</th>
                    <th className="p-3 text-center font-semibold text-blue-600 bg-blue-50">Welqo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { label: 'Prix affiché', hostfully: false, welqo: true },
                    { label: 'Tarif indicatif', hostfully: 'Sur devis (~200€+/an)', welqo: '79€ à vie' },
                    { label: 'Plan gratuit', hostfully: '1 guidebook gratuit', welqo: '1 propriété gratuite' },
                    { label: 'Mode hors-ligne', hostfully: false, welqo: true },
                    { label: 'Temps de setup', hostfully: '1-2 jours', welqo: '15 minutes' },
                    { label: 'Interface en français', hostfully: false, welqo: true },
                    { label: 'Support en français', hostfully: false, welqo: true },
                    { label: 'Facturation française + TVA', hostfully: false, welqo: true },
                    { label: 'QR code inclus', hostfully: true, welqo: true },
                    { label: 'Multi-propriétés', hostfully: true, welqo: true },
                    { label: 'Cible', hostfully: 'Agences 5-200 props', welqo: 'Hôtes solo 1-10 props' },
                  ].map((row) => (
                    <tr key={row.label}>
                      <td className="p-3 font-medium text-gray-700">{row.label}</td>
                      <td className="p-3 text-center">
                        {typeof row.hostfully === 'boolean'
                          ? row.hostfully ? <Check className="h-4 w-4 text-green-500 mx-auto" /> : <X className="h-4 w-4 text-red-400 mx-auto" />
                          : <span className="text-sm text-gray-600">{row.hostfully}</span>
                        }
                      </td>
                      <td className="p-3 text-center bg-blue-50">
                        {typeof row.welqo === 'boolean'
                          ? row.welqo ? <Check className="h-4 w-4 text-green-500 mx-auto" /> : <X className="h-4 w-4 text-red-400 mx-auto" />
                          : <span className="text-sm font-bold text-blue-700">{row.welqo}</span>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="quand-hostfully">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quand Hostfully est-il justifié ?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Soyons honnêtes : Hostfully est un excellent outil pour certains cas. Il est justifié si :
            </p>
            <ul className="space-y-2 text-gray-700">
              {[
                'Vous gérez plus de 15-20 propriétés pour des propriétaires tiers',
                'Vous avez besoin d\'un channel manager (Airbnb + Booking + Vrbo en simultané)',
                'Vous avez une équipe de ménage à coordonner',
                'Vous faites des rapports financiers aux propriétaires (owner portal)',
                'Vous avez un budget confort pour les outils SaaS',
              ].map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <strong>Si vous n&apos;êtes pas dans ce cas</strong>, Hostfully est clairement disproportionné. La plupart des hôtes Airbnb français ont besoin d&apos;un guide d&apos;accueil propre, pas d&apos;un PMS complet.
            </div>
          </section>

          <section id="verdict">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Verdict final</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour un hôte solo ou un gestionnaire de 1 à 10 propriétés en France, <strong>Hostfully n&apos;est pas le bon outil</strong>. C&apos;est une solution pensée pour un marché américain et des structures professionnelles.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les alternatives françaises ou franco-compatibles comme <strong>Welqo</strong> ou <strong>TouchStay</strong> couvrent 100% des besoins d&apos;un hôte Airbnb classique, avec une interface adaptée, un tarif transparent, et — dans le cas de Welqo — le mode hors-ligne qui manque à tous les concurrents.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {[
                { profile: 'Hôte solo 1-5 props', recommendation: 'Welqo', reason: 'Simple, hors-ligne, 79€ une fois' },
                { profile: 'Hôte pro 5-15 props', recommendation: 'TouchStay ou Welqo', reason: 'Selon budget et besoin multilingue' },
                { profile: 'Agence 20+ props', recommendation: 'Hostfully PMS', reason: 'Là il est vraiment justifié' },
              ].map((rec) => (
                <div key={rec.profile} className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-center">
                  <p className="text-xs text-gray-500 mb-1">{rec.profile}</p>
                  <p className="font-bold text-gray-900 mb-1">{rec.recommendation}</p>
                  <p className="text-xs text-gray-500">{rec.reason}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {[
              {
                name: 'Claire B.',
                location: 'Ardèche · 2 gîtes',
                text: '"J\'avais essayé Hostfully. Après 3 heures de configuration sans comprendre où aller, j\'ai abandonné. Welqo était prêt en 20 minutes."',
              },
              {
                name: 'Thomas R.',
                location: 'Bordeaux · 4 appartements',
                text: '"Le mode hors-ligne de Welqo a sauvé un séjour dans mon mas en Dordogne — pas de réseau du tout. Impossible avec TouchStay ou Hostfully."',
              },
            ].map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">{t.text}</p>
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">{t.location}</p>
              </div>
            ))}
          </div>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-blue-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            L&apos;alternative française à Hostfully — sans abonnement
          </h2>
          <p className="text-blue-100 mb-2">
            79€ à vie · Mode hors-ligne · Interface française · Setup 15 min
          </p>
          <p className="text-blue-200 text-sm mb-6">🔥 Plus que 3 places au tarif early bird de 59€</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-blue-600 font-bold px-8 py-4 rounded-xl transition-colors shadow-xl"
            >
              Essayer gratuitement
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/alternatives/hostfully" className="inline-flex items-center justify-center text-blue-200 hover:text-white text-sm px-4 py-4 transition-colors">
              Voir la comparaison détaillée →
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-4">Aucune carte bleue · Plan gratuit permanent disponible</p>
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
            <Link href="/alternatives/hostfully" className="hover:text-white">vs Hostfully</Link>
            <Link href="/blog/livret-accueil-airbnb-gratuit-vs-payant" className="hover:text-white">Livret accueil</Link>
          </div>
          <p className="text-sm">© 2025 Welqo</p>
        </div>
      </footer>
    </div>
  )
}
