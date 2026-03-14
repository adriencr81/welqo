import Image from 'next/image'
import type { Property, Section } from '@/lib/db-types'
import SectionRenderer from './SectionRenderer'

interface Props {
  property: Property
  sections: Section[]
}

export default function GuideViewer({ property, sections }: Props) {
  const accentColor = property.accent_color ?? '#3B82F6'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec image de couverture */}
      <div className="relative h-52 w-full overflow-hidden" style={{ backgroundColor: accentColor }}>
        {property.cover_image_url && (
          <Image
            src={property.cover_image_url}
            alt={property.name}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" />
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
          <h1 className="text-white text-2xl font-bold leading-tight">{property.name}</h1>
          {property.description && (
            <p className="text-white/80 text-sm mt-1 line-clamp-2">{property.description}</p>
          )}
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-lg mx-auto px-4 py-6 space-y-3 pb-16">
        {sections.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-sm">Ce guide est en cours de création.</p>
          </div>
        )}
        {sections.map((section) => (
          <SectionCard key={section.id} section={section} />
        ))}
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 text-center py-3 bg-white/80 backdrop-blur-sm border-t border-gray-100">
        <p className="text-xs text-gray-400">
          Propulsé par{' '}
          <span className="font-semibold text-gray-600">Welqo</span>
        </p>
      </div>
    </div>
  )
}

// Composant interne pour chaque section (details/summary natif)
async function SectionCard({ section }: { section: Section }) {
  return (
    <details className="bg-white rounded-2xl shadow-sm overflow-hidden group" open>
      <summary
        className="flex items-center gap-3 px-4 py-4 cursor-pointer select-none list-none"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <span className="text-xl">{section.icon ?? '📄'}</span>
        <span className="flex-1 font-semibold text-gray-800 text-sm">{section.title}</span>
        <svg
          className="h-4 w-4 text-gray-400 transition-transform duration-200 group-open:rotate-180 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-4 pb-4 border-t border-gray-50 pt-3">
        <SectionRenderer section={section} />
      </div>
    </details>
  )
}
