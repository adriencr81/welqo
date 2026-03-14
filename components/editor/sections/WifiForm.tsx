'use client'

import { useRef, useState } from 'react'
import { updateSection } from '@/app/(dashboard)/properties/[id]/edit/actions'

interface Props {
  sectionId: string
  propertyId: string
  initialContent: Record<string, unknown>
}

export default function WifiForm({ sectionId, propertyId, initialContent }: Props) {
  const [network, setNetwork] = useState((initialContent.network as string) ?? '')
  const [password, setPassword] = useState((initialContent.password as string) ?? '')
  const [notes, setNotes] = useState((initialContent.notes as string) ?? '')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function save(patch: Partial<{ network: string; password: string; notes: string }>) {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      updateSection(sectionId, propertyId, {
        content: {
          network: patch.network ?? network,
          password: patch.password ?? password,
          notes: patch.notes ?? notes,
        },
      })
    }, 1000)
  }

  return (
    <div className="space-y-3">
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">
          Nom du réseau
        </label>
        <input
          type="text"
          value={network}
          placeholder="MonWifi_5G"
          onChange={(e) => {
            setNetwork(e.target.value)
            save({ network: e.target.value })
          }}
          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">
          Mot de passe
        </label>
        <input
          type="text"
          value={password}
          placeholder="motdepasse123"
          onChange={(e) => {
            setPassword(e.target.value)
            save({ password: e.target.value })
          }}
          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">
          Notes <span className="text-gray-400 font-normal">(optionnel)</span>
        </label>
        <input
          type="text"
          value={notes}
          placeholder="Box dans l'entrée"
          onChange={(e) => {
            setNotes(e.target.value)
            save({ notes: e.target.value })
          }}
          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  )
}
