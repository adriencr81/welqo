'use client'

import { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'
import { Download } from 'lucide-react'

interface Props {
  url: string
  propertyName: string
  accentColor: string
}

export default function QrCodeDisplay({ url, propertyName, accentColor }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [generated, setGenerated] = useState(false)

  useEffect(() => {
    if (!canvasRef.current) return
    QRCode.toCanvas(canvasRef.current, url, {
      width: 280,
      margin: 2,
      color: {
        dark: '#111827',
        light: '#ffffff',
      },
    }).then(() => setGenerated(true))
  }, [url])

  function handleDownload() {
    if (!canvasRef.current) return
    const link = document.createElement('a')
    link.download = `qr-${propertyName.toLowerCase().replace(/\s+/g, '-')}.png`
    link.href = canvasRef.current.toDataURL('image/png')
    link.click()
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <canvas ref={canvasRef} className="rounded-lg" />
      </div>

      <div className="text-center">
        <p className="text-xs text-gray-500 mb-4 font-mono break-all">{url}</p>
        <button
          onClick={handleDownload}
          disabled={!generated}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold shadow-sm transition-opacity disabled:opacity-50"
          style={{ backgroundColor: accentColor }}
        >
          <Download className="h-4 w-4" />
          Télécharger en PNG
        </button>
      </div>
    </div>
  )
}
