import { createClient } from '@/lib/supabase/server'

export default async function PropertiesPage() {
  const supabase = await createClient()
  const { data: properties } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mes propriétés</h1>
          <p className="text-gray-500 mt-1">Gérez vos guides d&apos;accueil</p>
        </div>
      </div>

      {!properties || properties.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">Aucune propriété pour l&apos;instant.</p>
          <p className="text-sm mt-2">Sprint 2 — à venir.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <div key={p.id} className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-semibold text-gray-900">{p.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
