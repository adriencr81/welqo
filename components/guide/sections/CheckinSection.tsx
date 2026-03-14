import { Clock, KeyRound, Car } from 'lucide-react'
import CopyButton from './CopyButton'
import { markdownToHtml } from '@/lib/markdown'

interface CheckinContent {
  arrival_time?: string
  code?: string
  parking?: string
  instructions?: string
}

interface Props {
  content: CheckinContent
}

export default async function CheckinSection({ content }: Props) {
  const instructionsHtml = content.instructions
    ? await markdownToHtml(content.instructions)
    : null

  return (
    <div className="space-y-4">
      {(content.arrival_time || content.code) && (
        <div className="grid grid-cols-2 gap-3">
          {content.arrival_time && (
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                <Clock className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">Heure d&apos;arrivée</span>
              </div>
              <p className="text-sm font-semibold text-gray-800">{content.arrival_time}</p>
            </div>
          )}
          {content.code && (
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                <KeyRound className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">Code d&apos;accès</span>
              </div>
              <div className="flex items-center justify-between gap-1">
                <p className="font-mono text-sm font-bold text-gray-800">{content.code}</p>
                <CopyButton text={content.code} label="Copier" />
              </div>
            </div>
          )}
        </div>
      )}
      {content.parking && (
        <div className="flex items-start gap-2.5 text-sm text-gray-700">
          <Car className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
          <p>{content.parking}</p>
        </div>
      )}
      {instructionsHtml && (
        <div
          className="prose prose-sm max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: instructionsHtml }}
        />
      )}
    </div>
  )
}
