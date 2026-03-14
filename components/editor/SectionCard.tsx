'use client'

import { useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical, ChevronDown, ChevronUp, Trash2 } from 'lucide-react'
import { SECTION_ICONS } from '@/lib/section-types'
import type { Section } from '@/lib/db-types'
import WifiForm from './sections/WifiForm'
import CheckinForm from './sections/CheckinForm'
import CheckoutForm from './sections/CheckoutForm'
import RulesForm from './sections/RulesForm'
import PlacesForm from './sections/PlacesForm'
import CustomForm from './sections/CustomForm'
import EmergencyForm from './sections/EmergencyForm'
import AppliancesForm from './sections/AppliancesForm'

interface Props {
  section: Section
  propertyId: string
  onDelete: (id: string) => void
}

function SectionFormSwitch({
  section,
  propertyId,
}: {
  section: Section
  propertyId: string
}) {
  const props = { sectionId: section.id, propertyId, initialContent: section.content }
  switch (section.type) {
    case 'wifi':
      return <WifiForm {...props} />
    case 'checkin':
      return <CheckinForm {...props} />
    case 'checkout':
      return <CheckoutForm {...props} />
    case 'rules':
      return <RulesForm {...props} />
    case 'places':
      return <PlacesForm {...props} />
    case 'appliances':
      return <AppliancesForm {...props} />
    case 'emergency':
      return <EmergencyForm {...props} />
    default:
      return <CustomForm {...props} />
  }
}

export default function SectionCard({ section, propertyId, onDelete }: Props) {
  const [expanded, setExpanded] = useState(true)
  const [deleting, setDeleting] = useState(false)

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  async function handleDelete() {
    if (!confirm('Supprimer cette section ?')) return
    setDeleting(true)
    onDelete(section.id)
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-3 bg-gray-50 border-b border-gray-100">
        {/* Drag handle */}
        <button
          {...attributes}
          {...listeners}
          className="text-gray-300 hover:text-gray-500 cursor-grab active:cursor-grabbing touch-none"
          aria-label="Réordonner"
        >
          <GripVertical className="h-5 w-5" />
        </button>

        <span className="text-lg" aria-hidden>
          {section.icon ?? SECTION_ICONS[section.type as keyof typeof SECTION_ICONS] ?? '📄'}
        </span>

        <span className="flex-1 text-sm font-medium text-gray-700 truncate">
          {section.title}
        </span>

        <button
          onClick={() => setExpanded((v) => !v)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label={expanded ? 'Réduire' : 'Développer'}
        >
          {expanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>

        <button
          onClick={handleDelete}
          disabled={deleting}
          className="text-gray-300 hover:text-red-500 transition-colors disabled:opacity-40"
          aria-label="Supprimer"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      {/* Form */}
      {expanded && (
        <div className="p-4">
          <SectionFormSwitch section={section} propertyId={propertyId} />
        </div>
      )}
    </div>
  )
}
