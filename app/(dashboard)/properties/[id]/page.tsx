import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import {
  ArrowLeft,
  Globe,
  EyeOff,
  Pencil,
  QrCode,
  Home,
  Plus,
} from 'lucide-react'

interface Props {
  params: Promise<{ id: string }>
}

export default async function PropertyPage({ params }: Props) {
  const { id } = await params
  const supabase = await createClient()

  const { data: property } = await supabase
    .from('properties')
    .select('*')
    .eq('id', id)
    .single()

  if (!property) notFound()

  const { data: sections } = await supabase
    .from('sections')
    .select('*')
    .eq('property_id', id)
    .order('position', { ascending: true })

  return (
    <div className="p-8">
      {/* Breadcrumb */}
      <Link
        href="/properties"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Mes propriétés
      </Link>

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          {property.cover_image_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={property.cover_image_url}
              alt={property.name}
              className="h-16 w-16 rounded-xl object-cover shrink-0"
            />
          ) : (
            <div className="h-16 w-16 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
              <Home className="h-7 w-7 text-blue-400" />
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{property.name}</h1>
            <p className="text-sm text-gray-400 font-mono mt-0.5">/g/{property.slug}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span
            className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${
              property.published
                ? 'bg-green-50 text-green-700'
                : 'bg-gray-100 text-gray-500'
            }`}
          >
            {property.published ? (
              <>
                <Globe className="h-3.5 w-3.5" />
                Publié
              </>
            ) : (
              <>
                <EyeOff className="h-3.5 w-3.5" />
                Brouillon
              </>
            )}
          </span>

          <Link
            href={`/properties/${id}/edit`}
            className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <Pencil className="h-3.5 w-3.5" />
            Modifier le guide
          </Link>

          <Link
            href={`/properties/${id}/qr`}
            className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <QrCode className="h-3.5 w-3.5" />
            QR Code
          </Link>
        </div>
      </div>

      {/* Sections */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Sections du guide
          {sections && sections.length > 0 && (
            <span className="ml-2 text-sm font-normal text-gray-400">
              ({sections.length})
            </span>
          )}
        </h2>
        <Link
          href={`/properties/${id}/edit`}
          className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Ajouter une section
        </Link>
      </div>

      {!sections || sections.length === 0 ? (
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-12 text-center">
          <p className="text-gray-400 mb-4">
            Aucune section pour l&apos;instant.
          </p>
          <Link
            href={`/properties/${id}/edit`}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <Plus className="h-4 w-4" />
            Créer la première section
          </Link>
        </div>
      ) : (
        <div className="space-y-2">
          {sections.map((section, i) => (
            <div
              key={section.id}
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3"
            >
              <span className="text-lg">{section.icon ?? '📄'}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{section.title}</p>
                <p className="text-xs text-gray-400 capitalize">{section.type}</p>
              </div>
              <span className="text-xs text-gray-300">{i + 1}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
