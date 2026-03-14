'use client'

import { useRef, useState } from 'react'
import { Plus, X, MapPin } from 'lucide-react'
import { updateSection } from '@/app/(dashboard)/properties/[id]/edit/actions'

interface PlaceItem {
  name: string
  category: string
  address: string
  distance: string
  tip: string
  maps_url: string
}

interface Props {
  sectionId: string
  propertyId: string
  initialContent: Record<string, unknown>
}

const CATEGORIES = [
  'restaurant',
  'boulangerie',
  'café',
  'bar',
  'supermarché',
  'pharmacie',
  'boucherie',
  'épicerie',
  'musée',
  'parc',
  'autre',
]

const DEFAULT_ITEM: PlaceItem = {
  name: '',
  category: 'restaurant',
  address: '',
  distance: '',
  tip: '',
  maps_url: '',
}

export default function PlacesForm({ sectionId, propertyId, initialContent }: Props) {
  const [items, setItems] = useState<PlaceItem[]>(
    (initialContent.items as PlaceItem[]) ?? []
  )
  const [expanded, setExpanded] = useState<number | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function save(newItems: PlaceItem[]) {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      updateSection(sectionId, propertyId, { content: { items: newItems } })
    }, 1000)
  }

  function addItem() {
    const next = [...items, { ...DEFAULT_ITEM }]
    setItems(next)
    setExpanded(next.length - 1)
    save(next)
  }

  function updateItem(index: number, field: keyof PlaceItem, value: string) {
    const next = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    )
    setItems(next)
    save(next)
  }

  function removeItem(index: number) {
    const next = items.filter((_, i) => i !== index)
    setItems(next)
    setExpanded(null)
    save(next)
  }

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
          {/* Collapsed header */}
          <div
            className="flex items-center gap-2 px-3 py-2.5 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <MapPin className="h-3.5 w-3.5 text-gray-400 shrink-0" />
            <span className="flex-1 text-sm text-gray-700">
              {item.name || <span className="text-gray-400 italic">Nouveau lieu</span>}
            </span>
            {item.category && (
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                {item.category}
              </span>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation()
                removeItem(i)
              }}
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Expanded form */}
          {expanded === i && (
            <div className="px-3 pb-3 space-y-2 border-t border-gray-100 pt-3">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Nom</label>
                  <input
                    type="text"
                    value={item.name}
                    placeholder="Boulangerie Paul"
                    onChange={(e) => updateItem(i, 'name', e.target.value)}
                    className="w-full px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Catégorie</label>
                  <select
                    value={item.category}
                    onChange={(e) => updateItem(i, 'category', e.target.value)}
                    className="w-full px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Adresse</label>
                  <input
                    type="text"
                    value={item.address}
                    placeholder="12 rue de la Paix"
                    onChange={(e) => updateItem(i, 'address', e.target.value)}
                    className="w-full px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Distance</label>
                  <input
                    type="text"
                    value={item.distance}
                    placeholder="200m à pied"
                    onChange={(e) => updateItem(i, 'distance', e.target.value)}
                    className="w-full px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Conseil <span className="text-gray-400">(optionnel)</span>
                </label>
                <input
                  type="text"
                  value={item.tip}
                  placeholder="Essayez le croissant du dimanche"
                  onChange={(e) => updateItem(i, 'tip', e.target.value)}
                  className="w-full px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Lien Google Maps <span className="text-gray-400">(optionnel)</span>
                </label>
                <input
                  type="url"
                  value={item.maps_url}
                  placeholder="https://maps.google.com/..."
                  onChange={(e) => updateItem(i, 'maps_url', e.target.value)}
                  className="w-full px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
        </div>
      ))}

      <button
        onClick={addItem}
        className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 transition-colors"
      >
        <Plus className="h-4 w-4" />
        Ajouter un lieu
      </button>
    </div>
  )
}
