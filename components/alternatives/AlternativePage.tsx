import Link from 'next/link'
import { Check, X, ArrowRight } from 'lucide-react'

export interface CompetitorRow {
  label: string
  competitor: string | boolean
  welqo: string | boolean
  highlight?: boolean
}

export interface AlternativePageProps {
  competitorName: string
  competitorSlug: string
  seoTitle: string
  metaDescription: string
  headline: string
  subheadline: string
  verdict: string
  competitorPricing: string
  tableRows: CompetitorRow[]
  whyLeave: string[]
  migrationSteps: { title: string; description: string }[]
  faq?: { q: string; a: string }[]
}

export default function AlternativePage({
  competitorName,
  headline,
  subheadline,
  verdict,
  competitorPricing,
  tableRows,
  whyLeave,
  migrationSteps,
  faq,
}: AlternativePageProps) {
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
            <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-3 py-2">
              Se connecter
            </Link>
            <Link
              href="/signup"
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Essayer gratuitement
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-700">Welqo</Link>
          <span>›</span>
          <Link href="/#comparaison" className="hover:text-gray-700">Alternatives</Link>
          <span>›</span>
          <span className="text-gray-700">{competitorName}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Alternative à {competitorName}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {headline}
          </h1>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">{subheadline}</p>
          <p className="text-gray-700 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm leading-relaxed">
            💡 {verdict}
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-12 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Welqo vs {competitorName} — comparaison détaillée
          </h2>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left p-4 text-sm font-semibold text-gray-500 w-2/5">Critère</th>
                    <th className="p-4 text-sm font-semibold text-gray-500 text-center">{competitorName}</th>
                    <th className="p-4 text-sm font-semibold text-blue-600 text-center bg-blue-50">Welqo ✨</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {tableRows.map((row) => (
                    <tr key={row.label}>
                      <td className="p-4 text-sm font-medium text-gray-700">{row.label}</td>
                      <td className="p-4 text-center">
                        <Cell value={row.competitor} />
                      </td>
                      <td className={`p-4 text-center bg-blue-50 ${row.highlight ? 'font-bold text-blue-700' : ''}`}>
                        <Cell value={row.welqo} highlight={row.highlight} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            Prix {competitorName} : {competitorPricing}
          </p>
        </div>
      </section>

      {/* Why leave */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Pourquoi les hôtes quittent {competitorName}
          </h2>
          <div className="space-y-4">
            {whyLeave.map((reason, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration steps */}
      <section className="py-16 px-4 sm:px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            Migrer de {competitorName} vers Welqo en 3 étapes
          </h2>
          <p className="text-center text-gray-600 mb-10">Moins de 30 minutes, zéro perte de contenu.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {migrationSteps.map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-lg mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Questions fréquentes</h2>
            <div className="space-y-3">
              {faq.map((item) => (
                <details
                  key={item.q}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                    <span className="shrink-0 text-gray-400 text-xl transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à quitter {competitorName} ?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Créez votre premier guide en 15 minutes. 79€ à vie — pas d&apos;abonnement, pas de surprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-blue-600 font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-xl"
            >
              Commencer gratuitement
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <p className="mt-6 text-blue-200 text-sm">Aucune carte de crédit requise · Accès immédiat</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">W</span>
            </div>
            <span className="text-white font-semibold">Welqo</span>
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <Link href="/alternatives/touchstay" className="hover:text-white transition-colors">vs TouchStay</Link>
            <Link href="/alternatives/sunver" className="hover:text-white transition-colors">vs Sunver</Link>
            <Link href="/alternatives/hostfully" className="hover:text-white transition-colors">vs Hostfully</Link>
          </div>
          <p className="text-sm">© 2025 Welqo</p>
        </div>
      </footer>
    </div>
  )
}

function Cell({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
  if (typeof value === 'boolean') {
    return value
      ? <Check className="h-5 w-5 text-green-500 mx-auto" />
      : <X className="h-5 w-5 text-red-400 mx-auto" />
  }
  return (
    <span className={`text-sm ${highlight ? 'font-bold text-blue-700' : 'text-gray-600'}`}>
      {value}
    </span>
  )
}
