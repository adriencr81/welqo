import Link from 'next/link'
import { Check, X, Wifi, MapPin, Clock, Zap, Shield, Smartphone, Star } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Welqo — Le guide d'accueil digital que vos voyageurs adorent",
  description:
    "Créez un guide d'accueil numérique en 15 minutes. QR code, mode hors-ligne, à vie pour 79€. Plus jamais le même message à 23h.",
  openGraph: {
    title: "Welqo — Le guide d'accueil digital que vos voyageurs adorent",
    description:
      "Créez un guide d'accueil numérique en 15 minutes. QR code, mode hors-ligne, à vie pour 79€.",
    type: 'website',
  },
}

const PAIN_POINTS = [
  { emoji: '📱', text: '"C\'est quoi le code Wi-Fi ?"', time: 'à 23h, le soir de l\'arrivée' },
  { emoji: '🧺', text: '"Comment fonctionne la machine à laver ?"', time: 'le lendemain matin' },
  { emoji: '🗑️', text: '"Où sont les poubelles ?"', time: 'le jour du départ' },
  { emoji: '🍽️', text: '"Un restaurant ouvert le dimanche ?"', time: '3 fois par mois' },
]

const FEATURES = [
  {
    icon: Zap,
    title: 'Ultra-simple à créer',
    description:
      '15 minutes et votre guide est prêt. Pas de formation, pas de tutoriel. Vous ajoutez vos sections comme vous écrivez un message.',
  },
  {
    icon: Shield,
    title: 'Fonctionne hors-ligne',
    description:
      'Vos touristes sont dans un village sans réseau ? Le guide s\'ouvre quand même. Il se met en cache automatiquement après le premier chargement.',
  },
  {
    icon: Smartphone,
    title: 'À vie, pas par mois',
    description:
      'Payez une fois, utilisez pour toujours. Pas d\'abonnement surprise, pas de renouvellement oublié. 79€ c\'est 79€.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'Est-ce que mes voyageurs doivent télécharger une app ?',
    a: 'Non. Ils scannent le QR code et le guide s\'ouvre directement dans le navigateur. Aucune installation, aucun compte à créer.',
  },
  {
    q: 'Que se passe-t-il si j\'ai plusieurs logements ?',
    a: 'Vous créez autant de guides que vous voulez depuis un seul tableau de bord, chacun avec son propre QR code et son propre lien.',
  },
  {
    q: 'Est-ce que le guide fonctionne sans connexion internet ?',
    a: 'Oui. Dès que le guide a été chargé une fois, il reste accessible hors-ligne. Idéal pour les gîtes à la campagne ou les propriétés en zone blanche.',
  },
  {
    q: 'Que se passe-t-il si je modifie mon guide après que le touriste l\'ait chargé ?',
    a: 'Ils voient les modifications dès qu\'ils se reconnectent ou rechargent la page. Les changements sont instantanés pour tous les futurs visiteurs.',
  },
  {
    q: 'C\'est vraiment à vie ? Pas de frais cachés ?',
    a: 'À vie signifie à vie. Pas d\'abonnement, pas de frais par propriété, pas de surprise dans 12 mois. Le prix que vous payez aujourd\'hui est le seul que vous payez.',
  },
  {
    q: 'Puis-je essayer avant d\'acheter ?',
    a: 'Oui, créez un compte gratuit et construisez votre premier guide. Le compte gratuit vous permet de créer 1 propriété complète pour tester.',
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-semibold text-gray-900 text-lg">Welqo</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-3 py-2"
            >
              Se connecter
            </Link>
            <Link
              href="/signup"
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Commencer gratuitement
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-20 pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <span>🎉</span>
            <span>Early bird — 50 places à 59€ (prix normal : 79€)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            Le guide d&apos;accueil digital que vos{' '}
            <span className="text-blue-600">voyageurs adorent</span> ouvrir
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Créez un guide élégant en 15 minutes. Vos touristes le consultent hors-ligne,
            sans app, sans compte.{' '}
            <strong className="text-gray-900">Plus jamais le même message à 23h.</strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-blue-200"
            >
              Obtenir l&apos;accès à vie — 59€
              <span className="text-blue-200 line-through text-base font-normal">79€</span>
            </Link>
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center text-gray-600 hover:text-gray-900 font-medium px-6 py-4 transition-colors"
            >
              Essayer gratuitement →
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            Rejoignez{' '}
            <strong className="text-gray-700">47 hôtes</strong>{' '}
            qui ne répondent plus aux mêmes questions
          </p>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Vous connaissez ça ?
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Vous avez déjà répondu à ces questions des dizaines de fois.
              Un guide numérique règle ça une fois pour toutes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {PAIN_POINTS.map((point) => (
              <div
                key={point.text}
                className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100"
              >
                <div className="text-3xl shrink-0">{point.emoji}</div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{point.text}</p>
                  <p className="text-sm text-gray-500 mt-1">{point.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-block bg-blue-600 text-white rounded-2xl px-8 py-5 text-center shadow-lg shadow-blue-200">
              <p className="text-xl font-bold mb-1">
                Créez votre guide. Partagez le QR code.
              </p>
              <p className="text-blue-100">
                Vos voyageurs ont toutes les réponses. Vous dormez tranquille.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product demo mockup */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Prêt en 15 minutes, utilisé pour toujours
            </h2>
            <p className="text-lg text-gray-600">
              Créez, personnalisez, publiez. Vos voyageurs scannent et ont tout sous la main.
            </p>
          </div>

          {/* Mock guide preview */}
          <div className="flex flex-col lg:flex-row items-center gap-12 justify-center">
            {/* Editor side */}
            <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
              <div className="bg-blue-600 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <span className="text-white text-xs font-medium ml-2 opacity-80">Éditeur Welqo</span>
              </div>
              <div className="p-4 space-y-3">
                <div className="text-sm font-semibold text-gray-700 mb-1">Mon Appartement Paris</div>
                {[
                  { icon: Wifi, label: 'Wi-Fi', color: 'text-blue-600 bg-blue-50' },
                  { icon: Clock, label: 'Arrivée & Départ', color: 'text-green-600 bg-green-50' },
                  { icon: MapPin, label: 'Bonnes adresses', color: 'text-orange-600 bg-orange-50' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50"
                  >
                    <div className={`p-2 rounded-lg ${s.color}`}>
                      <s.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{s.label}</span>
                    <div className="ml-auto w-10 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                ))}
                <div className="pt-1">
                  <div className="w-full h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xs font-medium">✓ Guide publié</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center gap-2 text-gray-400">
              <div className="text-3xl">→</div>
              <div className="text-sm font-medium">QR code</div>
            </div>

            {/* Phone mockup */}
            <div className="w-52 bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
              <div className="bg-white rounded-[2rem] overflow-hidden h-96">
                <div className="bg-blue-600 p-4 pt-6 text-white">
                  <p className="text-xs opacity-75 mb-1">Guide d&apos;accueil</p>
                  <p className="font-bold text-lg leading-tight">Mon Appartement Paris</p>
                </div>
                <div className="p-3 space-y-2">
                  {[
                    { icon: '📶', label: 'Wi-Fi', val: 'Ap@rt-12' },
                    { icon: '🔑', label: 'Code porte', val: '1847#' },
                    { icon: '🍕', label: 'Restaurants', val: '5 adresses' },
                    { icon: '🚨', label: 'Urgences', val: '15 · 17 · 18' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 p-2 rounded-xl bg-gray-50 text-xs"
                    >
                      <span>{item.icon}</span>
                      <span className="font-medium text-gray-700 flex-1">{item.label}</span>
                      <span className="text-gray-500">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tout ce dont vous avez besoin, rien de plus
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-2xl mb-5">
                  <feature.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Welqo ?
            </h2>
            <p className="text-lg text-gray-600">
              La seule solution avec le mode hors-ligne, à un prix qui ne revient pas chaque année.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left p-4 text-sm font-semibold text-gray-500 w-1/4">Critère</th>
                    <th className="p-4 text-sm font-semibold text-gray-500 text-center">TouchStay</th>
                    <th className="p-4 text-sm font-semibold text-gray-500 text-center">Hostfully</th>
                    <th className="p-4 text-sm font-semibold text-blue-600 text-center bg-blue-50">
                      Welqo ✨
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      label: 'Prix',
                      touchstay: '99€/an',
                      hostfully: '300€/an',
                      welqo: '79€ à vie',
                      highlight: true,
                    },
                    {
                      label: 'Mode hors-ligne',
                      touchstay: false,
                      hostfully: false,
                      welqo: true,
                      highlight: true,
                    },
                    {
                      label: 'Temps de setup',
                      touchstay: '1-2h',
                      hostfully: 'Demi-journée',
                      welqo: '15 min',
                      highlight: true,
                    },
                    {
                      label: 'QR code inclus',
                      touchstay: true,
                      hostfully: true,
                      welqo: true,
                      highlight: false,
                    },
                    {
                      label: 'Multi-propriétés',
                      touchstay: true,
                      hostfully: true,
                      welqo: true,
                      highlight: false,
                    },
                  ].map((row) => (
                    <tr key={row.label}>
                      <td className="p-4 text-sm font-medium text-gray-700">{row.label}</td>
                      <td className="p-4 text-center">
                        <ComparisonCell value={row.touchstay} />
                      </td>
                      <td className="p-4 text-center">
                        <ComparisonCell value={row.hostfully} />
                      </td>
                      <td className={`p-4 text-center bg-blue-50 ${row.highlight ? 'font-bold text-blue-700' : ''}`}>
                        <ComparisonCell value={row.welqo} highlight={row.highlight} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos hôtes
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: 'Sophie M.',
                location: 'Paris · 1 propriété',
                text: '"Mes voyageurs ne m\'écrivent plus pour le code Wi-Fi. Ça vaut 10x le prix déjà."',
              },
              {
                name: 'Marc D.',
                location: 'Provence · 3 gîtes',
                text: '"J\'ai remplacé un PDF de 8 pages par un guide qui fonctionne même sans réseau. Bluffant."',
              },
              {
                name: 'Julie R.',
                location: 'Lyon · 2 appartements',
                text: '"Setup en 20 minutes pour les 2 propriétés. Le QR code est collé à l\'entrée, c\'est tout."',
              },
            ].map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-5 italic">{t.text}</p>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.q}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                  <span className="shrink-0 text-gray-400 text-xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Rejoignez les hôtes qui ont arrêté de répondre aux mêmes questions
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Early bird — 50 places à 59€ (prix normal : 79€)
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-blue-600 font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-xl"
            >
              Obtenir l&apos;accès à vie — 59€
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center text-blue-100 hover:text-white font-medium px-6 py-4 transition-colors"
            >
              Essayer gratuitement →
            </Link>
          </div>

          <p className="mt-8 text-blue-200 text-sm">
            Aucun abonnement · Paiement unique · Accès immédiat
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">W</span>
              </div>
              <span className="text-white font-semibold">Welqo</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/login" className="hover:text-white transition-colors">Se connecter</Link>
              <Link href="/signup" className="hover:text-white transition-colors">Créer un compte</Link>
              <a href="mailto:hello@welqo.io" className="hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-sm">© 2025 Welqo · Fait avec ☕ en France</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ComparisonCell({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="h-5 w-5 text-green-500 mx-auto" />
    ) : (
      <X className="h-5 w-5 text-red-400 mx-auto" />
    )
  }
  return (
    <span className={`text-sm ${highlight ? 'font-bold text-blue-700' : 'text-gray-600'}`}>
      {value}
    </span>
  )
}
