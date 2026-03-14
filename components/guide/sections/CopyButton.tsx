'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface Props {
  text: string
  label?: string
}

export default function CopyButton({ text, label }: Props) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback silencieux si clipboard non disponible
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all"
      style={
        copied
          ? { backgroundColor: '#f0fdf4', color: '#16a34a' }
          : { backgroundColor: '#eff6ff', color: '#2563eb' }
      }
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          Copié !
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          {label ?? 'Copier'}
        </>
      )}
    </button>
  )
}
