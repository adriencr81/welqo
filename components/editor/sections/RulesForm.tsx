'use client'

import { useRef, useState } from 'react'
import { Plus, X } from 'lucide-react'
import { updateSection } from '@/app/(dashboard)/properties/[id]/edit/actions'

interface Props {
  sectionId: string
  propertyId: string
  initialContent: Record<string, unknown>
}

export default function RulesForm({ sectionId, propertyId, initialContent }: Props) {
  const [items, setItems] = useState<string[]>(
    (initialContent.items as string[]) ?? []
  )
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function save(newItems: string[]) {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      updateSection(sectionId, propertyId, { content: { items: newItems } })
    }, 1000)
  }

  function addItem() {
    const next = [...items, '']
    setItems(next)
    save(next)
  }

  function updateItem(index: number, value: string) {
    const next = items.map((item, i) => (i === index ? value : item))
    setItems(next)
    save(next)
  }

  function removeItem(index: number) {
    const next = items.filter((_, i) => i !== index)
    setItems(next)
    save(next)
  }

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-gray-300 text-sm shrink-0">•</span>
          <input
            type="text"
            value={item}
            placeholder="Pas de fumée à l'intérieur"
            onChange={(e) => updateItem(i, e.target.value)}
            className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => removeItem(i)}
            className="text-gray-300 hover:text-red-400 transition-colors shrink-0"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}

      <button
        onClick={addItem}
        className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 mt-1 transition-colors"
      >
        <Plus className="h-4 w-4" />
        Ajouter une règle
      </button>
    </div>
  )
}
