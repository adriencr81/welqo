'use client'

import { useRef, useState } from 'react'
import { updateSection } from '@/app/(dashboard)/properties/[id]/edit/actions'

interface Props {
  sectionId: string
  propertyId: string
  initialContent: Record<string, unknown>
}

export default function CustomForm({ sectionId, propertyId, initialContent }: Props) {
  const [body, setBody] = useState((initialContent.body as string) ?? '')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function save(value: string) {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      updateSection(sectionId, propertyId, { content: { body: value } })
    }, 1000)
  }

  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        Contenu{' '}
        <span className="text-gray-400 font-normal">— Markdown supporté</span>
      </label>
      <textarea
        value={body}
        rows={6}
        placeholder={"# Titre\n\nVotre texte ici...\n\n- Point 1\n- Point 2"}
        onChange={(e) => {
          setBody(e.target.value)
          save(e.target.value)
        }}
        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-mono"
      />
    </div>
  )
}
