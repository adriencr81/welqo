import { redirect } from 'next/navigation'
import { Check, Zap } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import BuyButton from '@/components/pricing/BuyButton'

const FEATURES = [
  'Propriétés illimitées',
  'Toutes les sections (Wi-Fi, Équipements, Adresses…)',
  'QR code unique par propriété',
  'Guide fonctionnel hors-ligne',
  'Mises à jour incluses à vie',
  'Aucun abonnement mensuel',
]

export default async function PricingPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('plan')
    .eq('id', user.id)
    .single()

  const isLtd = profile?.plan === 'ltd'

  return (
    <div className="p-8 max-w-lg">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Passer en accès à vie</h1>
        <p className="text-gray-500 mt-1">
          Une seule fois, pour toujours.
        </p>
      </div>

      {isLtd ? (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 text-green-700 font-semibold mb-1">
            <Check className="h-5 w-5" />
            Vous avez déjà l&apos;accès à vie
          </div>
          <p className="text-sm text-green-600">
            Profitez de toutes les fonctionnalités sans aucune limite.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Badge early bird */}
          <div className="bg-blue-600 text-white text-xs font-semibold text-center py-2 tracking-wide uppercase">
            Early Bird — Places limitées
          </div>

          <div className="p-6">
            {/* Prix */}
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl font-bold text-gray-900">59€</span>
              <span className="text-gray-400 line-through text-lg">79€</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">Paiement unique · Accès à vie</p>

            {/* Features */}
            <ul className="space-y-2.5 mb-8">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <Check className="h-4 w-4 text-blue-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <BuyButton userId={user.id} />

            <p className="text-xs text-gray-400 text-center mt-3">
              Paiement sécurisé par Lemon Squeezy · Satisfait ou remboursé 30 jours
            </p>
          </div>
        </div>
      )}

      {/* Comparison */}
      {!isLtd && (
        <div className="mt-6 bg-gray-50 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Free vs Accès à vie
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Propriétés</span>
              <span>
                <span className="text-gray-400 mr-3">Free: 1</span>
                <span className="text-blue-600 font-medium">LTD: Illimité</span>
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Prix</span>
              <span>
                <span className="text-gray-400 mr-3">0€</span>
                <span className="text-blue-600 font-medium">59€ une fois</span>
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">TouchStay</span>
              <span className="text-gray-400">99€/an forever</span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center gap-2 text-xs text-gray-400">
        <Zap className="h-3.5 w-3.5" />
        Activation instantanée après paiement
      </div>
    </div>
  )
}
