'use client'

import { useRef, useState } from 'react'
import { updateSection } from '@/app/(dashboard)/properties/[id]/edit/actions'

interface Props {
  sectionId: string
  propertyId: string
  initialContent: Record<string, unknown>
}

export default function CheckinForm({ sectionId, propertyId, initialContent }: Props) {
  const [arrivalTime, setArrivalTime] = useState((initialContent.arrival_time as string) ?? '')
  const [code, setCode] = useState((initialContent.code as string) ?? '')
  const [parking, setParking] = useState((initialContent.parking as string) ?? '')
  const [instructions, setInstructions] = useState((initialContent.instructions as string) ?? '')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function save(patch: Partial<{ arrival_time: string; code: string; parking: string; instructions: string }>) {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      updateSection(sectionId, propertyId, {
        content: {
          arrival_time: patch.arrival_time ?? arrivalTime,
          code: patch.code ?? code,
          parking: patch.parking ?? parking,
          instructions: patch.instructions ?? instructions,
        },
      })
    }, 1000)
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Heure d&apos;arrivée
          </label>
          <input
            type="text"
            value={arrivalTime}
            placeholder="À partir de 15h"
            onChange={(e) => {
              setArrivalTime(e.target.value)
              save({ arrival_time: e.target.value })
            }}
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Code d&apos;accès
          </label>
          <input
            type="text"
            value={code}
            placeholder="1234#"
            onChange={(e) => {
              setCode(e.target.value)
              save({ code: e.target.value })
            }}
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">
          Parking <span className="text-gray-400 font-normal">(optionnel)</span>
        </label>
        <input
          type="text"
          value={parking}
          placeholder="Parking gratuit rue de la Paix"
          onChange={(e) => {
            setParking(e.target.value)
            save({ parking: e.target.value })
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
          placeholder="Entrez dans la cour, prenez l'escalier B au fond à gauche..."
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
