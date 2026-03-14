import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Plus, Home, Globe, EyeOff } from 'lucide-react'

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
        <Link
          href="/properties/new"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <Plus className="h-4 w-4" />
          Nouvelle propriété
        </Link>
      </div>

      {!properties || properties.length === 0 ? (
        <div className="text-center py-24">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-50 rounded-full p-4">
              <Home className="h-8 w-8 text-blue-400" />
            </div>
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Aucune propriété pour l&apos;instant
          </h2>
          <p className="text-gray-500 mb-6 max-w-sm mx-auto">
            Créez votre premier guide d&apos;accueil en quelques minutes.
          </p>
          <Link
            href="/properties/new"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            <Plus className="h-4 w-4" />
            Créer ma première propriété
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <Link
              key={p.id}
              href={`/properties/${p.id}`}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-blue-200 transition-all"
            >
              {p.cover_image_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.cover_image_url}
                  alt={p.name}
                  className="h-40 w-full object-cover"
                />
              ) : (
                <div className="h-40 w-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <Home className="h-10 w-10 text-blue-300" />
                </div>
              )}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {p.name}
                  </h2>
                  <span
                    className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full shrink-0 ${
                      p.published
                        ? 'bg-green-50 text-green-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {p.published ? (
                      <>
                        <Globe className="h-3 w-3" />
                        Publié
                      </>
                    ) : (
                      <>
                        <EyeOff className="h-3 w-3" />
                        Brouillon
                      </>
                    )}
                  </span>
                </div>
                {p.description && (
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {p.description}
                  </p>
                )}
                <p className="text-xs text-gray-400 mt-3 font-mono">
                  /g/{p.slug}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
