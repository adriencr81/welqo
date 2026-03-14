import { Phone } from 'lucide-react'

interface EmergencyItem {
  label: string
  number: string
  notes?: string
}

interface EmergencyContent {
  items: EmergencyItem[]
}

interface Props {
  content: EmergencyContent
}

export default function EmergencySection({ content }: Props) {
  if (!content.items?.length) return null

  return (
    <div className="space-y-2">
      {content.items.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between gap-3 border border-gray-100 rounded-xl p-3.5"
        >
          <div className="min-w-0">
            <p className="font-medium text-sm text-gray-800">{item.label}</p>
            {item.notes && <p className="text-xs text-gray-500">{item.notes}</p>}
          </div>
          <a
            href={`tel:${item.number}`}
            className="flex items-center gap-1.5 bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-sm font-semibold px-3 py-1.5 rounded-lg shrink-0"
          >
            <Phone className="h-3.5 w-3.5" />
            {item.number}
          </a>
        </div>
      ))}
    </div>
  )
}
