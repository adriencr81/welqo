import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import QrCodeDisplay from '@/components/qr/QrCodeDisplay'

interface Props {
  params: Promise<{ id: string }>
}

export default async function QrPage({ params }: Props) {
  const { id } = await params
  const supabase = await createClient()

  const { data: property } = await supabase
    .from('properties')
    .select('id, name, slug, accent_color, published')
    .eq('id', id)
    .single()

  if (!property) notFound()

  const guideUrl = `${process.env.NEXT_PUBLIC_APP_URL}/g/${property.slug}`

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-3">
        <Link
          href={`/properties/${id}`}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <p className="text-sm font-semibold text-gray-900">{property.name}</p>
          <p className="text-xs text-gray-400">QR Code</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-12">
        {!property.published && (
          <div className="mb-6 bg-amber-50 border border-amber-200 text-amber-700 text-sm rounded-xl px-4 py-3">
            Votre guide n&apos;est pas encore publié. Le QR code ne fonctionnera qu&apos;après publication.
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-xl font-bold text-gray-900 mb-2 text-center">QR Code</h1>
          <p className="text-sm text-gray-500 text-center mb-8">
            Imprimez ce QR code et placez-le dans votre logement.
            Vos voyageurs n&apos;ont qu&apos;à le scanner.
          </p>

          <QrCodeDisplay
            url={guideUrl}
            propertyName={property.name}
            accentColor={property.accent_color ?? '#3B82F6'}
          />
        </div>

        <p className="text-xs text-gray-400 text-center mt-6">
          Conseil : imprimez en A5, plastifiez et posez sur la table d&apos;entrée.
        </p>
      </div>
    </div>
  )
}
