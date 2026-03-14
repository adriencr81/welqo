'use client'

import { useRef, useState } from 'react'
import { Plus, X } from 'lucide-react'
import { updateSection } from '@/app/(dashboard)/properties/[id]/edit/actions'

interface EmergencyItem {
  label: string
  number: string
  notes: string
}

interface Props {
  sectionId: string
  propertyId: string
  initialContent: Record<string, unknown>
}

const DEFAULT_ITEM: EmergencyItem = { label: '', number: '', notes: '' }

export default function EmergencyForm({ sectionId, propertyId, initialContent }: Props) {
  const [items, setItems] = useState<EmergencyItem[]>(
    (initialContent.items as EmergencyItem[]) ?? []
  )
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function save(newItems: EmergencyItem[]) {
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

  function updateItem(index: number, field: keyof EmergencyItem, value: string) {
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
            <span className="text-xs font-medium text-gray-500">
              Contact {i + 1}
            </span>
            <button
              onClick={() => removeItem(i)}
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Intitulé</label>
              <input
                type="text"
                value={item.label}
                placeholder="SAMU"
                onChange={(e) => updateItem(i, 'label', e.target.value)}
                className="w-full px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Numéro</label>
              <input
                type="text"
                value={item.number}
                placeholder="15"
                onChange={(e) => updateItem(i, 'number', e.target.value)}
                className="w-full px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">
              Notes <span className="text-gray-400">(optionnel)</span>
            </label>
            <input
              type="text"
              value={item.notes}
              placeholder="Urgences médicales"
              onChange={(e) => updateItem(i, 'notes', e.target.value)}
              className="w-full px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      ))}

      <button
        onClick={addItem}
        className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 transition-colors"
      >
        <Plus className="h-4 w-4" />
        Ajouter un contact
      </button>
    </div>
  )
}
