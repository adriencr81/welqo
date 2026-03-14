import { Wifi } from 'lucide-react'
import CopyButton from './CopyButton'

interface WifiContent {
  network: string
  password: string
  notes?: string
}

interface Props {
  content: WifiContent
}

export default function WifiSection({ content }: Props) {
  return (
    <div className="space-y-4">
      <div className="bg-blue-50 rounded-xl p-4 space-y-3">
        <div className="flex items-center gap-2 text-blue-600 mb-1">
          <Wifi className="h-4 w-4" />
          <span className="text-xs font-semibold uppercase tracking-wide">Réseau Wi-Fi</span>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Nom du réseau</p>
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-sm font-semibold text-gray-800 break-all">
              {content.network || '—'}
            </p>
            {content.network && <CopyButton text={content.network} label="Copier" />}
          </div>
        </div>
        <div className="border-t border-blue-100 pt-3">
          <p className="text-xs text-gray-500 mb-0.5">Mot de passe</p>
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-sm font-semibold text-gray-800 break-all">
              {content.password || '—'}
            </p>
            {content.password && (
              <CopyButton text={content.password} label="Copier" />
            )}
          </div>
        </div>
      </div>
      {content.notes && (
        <p className="text-sm text-gray-600">{content.notes}</p>
      )}
    </div>
  )
}
