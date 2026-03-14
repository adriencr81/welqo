'use client'

import { useRef, useState } from 'react'
import { Plus, X } from 'lucide-react'
import { updateSection } from '@/app/(dashboard)/properties/[id]/edit/actions'

interface ApplianceItem {
  name: string
  instructions: string
}

interface Props {
  sectionId: string
  propertyId: string
  initialContent: Record<string, unknown>
}

const DEFAULT_ITEM: ApplianceItem = { name: '', instructions: '' }

export default function AppliancesForm({ sectionId, propertyId, initialContent }: Props) {
  const [items, setItems] = useState<ApplianceItem[]>(
    (initialContent.items as ApplianceItem[]) ?? []
  )
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function save(newItems: ApplianceItem[]) {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      updateSection(sectionId, propertyId, { content: { items: newItems } })
    }, 1000)
  }

  function addItem() {
    const next = [...items, { ...DEFAULT_ITEM }]
    setItems(next)
    save(next)
  }

  function updateItem(index: number, field: keyof ApplianceItem, value: string) {
    const next = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    )
    setItems(next)
    save(next)
  }

  function removeItem(index: number) {
    const next = items.filter((_, i) => i !== index)
    setItems(next)
    save(next)
  }

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-lg p-3 space-y-2"
        >
          <div className="flex items-center justify-between">
            <input
              type="text"
              value={item.name}
              placeholder="Lave-linge"
              onChange={(e) => updateItem(i, 'name', e.target.value)}
              className="flex-1 text-sm font-medium border-none outline-none text-gray-800 placeholder-gray-400"
            />
            <button
              onClick={() => removeItem(i)}
              className="text-gray-300 hover:text-red-400 transition-colors ml-2 shrink-0"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <textarea
            value={item.instructions}
            rows={3}
            placeholder="1. Chargez le linge&#10;2. Mettez la lessive dans le tiroir du bas&#10;3. Sélectionnez le programme 30°..."
            onChange={(e) => updateItem(i, 'instructions', e.target.value)}
            className="w-full px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
      ))}

      <button
        onClick={addItem}
        className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 transition-colors"
      >
        <Plus className="h-4 w-4" />
        Ajouter un équipement
      </button>
    </div>
  )
}
