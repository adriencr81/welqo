'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import type { DragEndEvent } from '@dnd-kit/core'
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable'
import {
  ArrowLeft,
  Plus,
  Globe,
  EyeOff,
  ExternalLink,
  Loader2,
} from 'lucide-react'
import type { Property, Section } from '@/lib/db-types'
import type { SectionType } from '@/lib/section-types'
import { SECTION_TYPES } from '@/lib/section-types'
import {
  createSection,
  deleteSection,
  reorderSections,
  togglePublish,
} from '@/app/(dashboard)/properties/[id]/edit/actions'
import SectionCard from './SectionCard'
import AddSectionModal from './AddSectionModal'

interface Props {
  property: Property
  initialSections: Section[]
}

export default function GuideEditor({ property, initialSections }: Props) {
  const [sections, setSections] = useState<Section[]>(initialSections)
  const [showModal, setShowModal] = useState(false)
  const [publishing, setPublishing] = useState(false)
  const [published, setPublished] = useState(property.published)
  const [addingType, setAddingType] = useState<SectionType | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  async function handleAddSection(type: SectionType) {
    const meta = SECTION_TYPES.find((t) => t.type === type)
    if (!meta) return

    setAddingType(type)
    try {
      const newSection = await createSection(
        property.id,
        type,
        meta.defaultTitle,
        meta.defaultContent,
        sections.length
      )
      setSections((prev) => [...prev, newSection])
    } finally {
      setAddingType(null)
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over || active.id === over.id) return

    setSections((prev) => {
      const oldIndex = prev.findIndex((s) => s.id === active.id)
      const newIndex = prev.findIndex((s) => s.id === over.id)
      const reordered = arrayMove(prev, oldIndex, newIndex)
      reorderSections(
        property.id,
        reordered.map((s) => s.id)
      )
      return reordered
    })
  }

  async function handleDelete(sectionId: string) {
    setSections((prev) => prev.filter((s) => s.id !== sectionId))
    await deleteSection(sectionId, property.id)
  }

  async function handleTogglePublish() {
    setPublishing(true)
    try {
      const next = !published
      await togglePublish(property.id, next)
      setPublished(next)
    } finally {
      setPublishing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-4">
        <Link
          href={`/properties/${property.id}`}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {property.name}
          </p>
          <p className="text-xs text-gray-400">Éditeur de guide</p>
        </div>

        <Link
          href={`/g/${property.slug}`}
          target="_blank"
          className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-600 transition-colors"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Voir le guide
        </Link>

        <button
          onClick={handleTogglePublish}
          disabled={publishing}
          className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg font-medium transition-colors disabled:opacity-60 ${
            published
              ? 'bg-green-50 text-green-700 hover:bg-green-100'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {publishing ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : published ? (
            <Globe className="h-3.5 w-3.5" />
          ) : (
            <EyeOff className="h-3.5 w-3.5" />
          )}
          {published ? 'Publié' : 'Publier'}
        </button>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        {sections.length === 0 && (
          <div className="text-center py-16 text-gray-400 mb-6">
            <p className="text-sm">Aucune section — ajoutez-en une pour commencer.</p>
          </div>
        )}

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={sections.map((s) => s.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-3 mb-6">
              {sections.map((section) => (
                <SectionCard
                  key={section.id}
                  section={section}
                  propertyId={property.id}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>

        {/* Add section button */}
        <button
          onClick={() => setShowModal(true)}
          disabled={addingType !== null}
          className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 hover:border-blue-400 text-gray-400 hover:text-blue-500 rounded-xl py-4 text-sm font-medium transition-all disabled:opacity-50"
        >
          {addingType ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
          {addingType ? 'Ajout en cours...' : 'Ajouter une section'}
        </button>
      </div>

      {showModal && (
        <AddSectionModal
          onSelect={handleAddSection}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}
