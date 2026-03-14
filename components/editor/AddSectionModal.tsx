'use client'

import { SECTION_TYPES } from '@/lib/section-types'
import type { SectionType } from '@/lib/section-types'
import { X } from 'lucide-react'

interface Props {
  onSelect: (type: SectionType) => void
  onClose: () => void
}

export default function AddSectionModal({ onSelect, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-900">
            Ajouter une section
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 grid grid-cols-2 gap-2">
          {SECTION_TYPES.map(({ type, label, icon, description }) => (
            <button
              key={type}
              onClick={() => {
                onSelect(type)
                onClose()
              }}
              className="flex items-start gap-3 text-left p-3 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
            >
              <span className="text-2xl shrink-0">{icon}</span>
              <div>
                <p className="text-sm font-medium text-gray-900 group-hover:text-blue-700">
                  {label}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
