import { Clock } from 'lucide-react'
import { markdownToHtml } from '@/lib/markdown'

interface CheckoutContent {
  departure_time?: string
  instructions?: string
}

interface Props {
  content: CheckoutContent
}

export default async function CheckoutSection({ content }: Props) {
  const instructionsHtml = content.instructions
    ? await markdownToHtml(content.instructions)
    : null

  return (
    <div className="space-y-4">
      {content.departure_time && (
        <div className="bg-gray-50 rounded-xl p-3 inline-flex items-center gap-2">
          <Clock className="h-4 w-4 text-gray-400" />
          <div>
            <p className="text-xs text-gray-500">Heure de départ</p>
            <p className="text-sm font-semibold text-gray-800">{content.departure_time}</p>
          </div>
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
