import { MapPin, ExternalLink } from 'lucide-react'

interface PlaceItem {
  name: string
  category: string
  address?: string
  distance?: string
  tip?: string
  maps_url?: string
}

interface PlacesContent {
  items: PlaceItem[]
}

interface Props {
  content: PlacesContent
}

const CATEGORY_COLORS: Record<string, string> = {
  restaurant: 'bg-orange-50 text-orange-700',
  boulangerie: 'bg-amber-50 text-amber-700',
  café: 'bg-yellow-50 text-yellow-700',
  bar: 'bg-purple-50 text-purple-700',
  supermarché: 'bg-green-50 text-green-700',
  pharmacie: 'bg-red-50 text-red-700',
  boucherie: 'bg-rose-50 text-rose-700',
  épicerie: 'bg-lime-50 text-lime-700',
  musée: 'bg-blue-50 text-blue-700',
  parc: 'bg-emerald-50 text-emerald-700',
  autre: 'bg-gray-100 text-gray-600',
}

export default function PlacesSection({ content }: Props) {
  if (!content.items?.length) return null

  return (
    <div className="space-y-3">
      {content.items.map((place, i) => (
        <div key={i} className="border border-gray-100 rounded-xl p-3.5 space-y-1.5">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <MapPin className="h-4 w-4 text-gray-400 shrink-0" />
              <p className="font-medium text-sm text-gray-800 truncate">{place.name}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {place.category && (
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    CATEGORY_COLORS[place.category] ?? CATEGORY_COLORS['autre']
                  }`}
                >
                  {place.category}
                </span>
              )}
              {place.maps_url && (
                <a
                  href={place.maps_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
          {(place.address || place.distance) && (
            <p className="text-xs text-gray-500 ml-6">
              {[place.address, place.distance].filter(Boolean).join(' · ')}
            </p>
          )}
          {place.tip && (
            <p className="text-xs text-gray-600 italic ml-6">&ldquo;{place.tip}&rdquo;</p>
          )}
        </div>
      ))}
    </div>
  )
}
