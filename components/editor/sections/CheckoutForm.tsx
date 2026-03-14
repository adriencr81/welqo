'use client'

import { useRef, useState } from 'react'
import { updateSection } from '@/app/(dashboard)/properties/[id]/edit/actions'

interface Props {
  sectionId: string
  propertyId: string
  initialContent: Record<string, unknown>
}

export default function CheckoutForm({ sectionId, propertyId, initialContent }: Props) {
  const [departureTime, setDepartureTime] = useState((initialContent.departure_time as string) ?? '')
  const [instructions, setInstructions] = useState((initialContent.instructions as string) ?? '')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function save(patch: Partial<{ departure_time: string; instructions: string }>) {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      updateSection(sectionId, propertyId, {
        content: {
          departure_time: patch.departure_time ?? departureTime,
          instructions: patch.instructions ?? instructions,
        },
      })
    }, 1000)
  }

  return (
    <div className="space-y-3">
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">
          Heure de départ
        </label>
        <input
          type="text"
          value={departureTime}
          placeholder="Avant 11h"
          onChange={(e) => {
            setDepartureTime(e.target.value)
            save({ departure_time: e.target.value })
          }}
          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">
          Instructions
        </label>
        <textarea
          value={instructions}
          rows={4}
          placeholder="Merci de laisser les clés sur la table, sortir les poubelles..."
          onChange={(e) => {
            setInstructions(e.target.value)
            save({ instructions: e.target.value })
          }}
          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>
    </div>
  )
}
