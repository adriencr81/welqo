import { markdownToHtml } from '@/lib/markdown'

interface ApplianceItem {
  name: string
  instructions: string
}

interface AppliancesContent {
  items: ApplianceItem[]
}

interface Props {
  content: AppliancesContent
}

async function ApplianceItem({ item }: { item: ApplianceItem }) {
  const instructionsHtml = item.instructions
    ? await markdownToHtml(item.instructions)
    : null

  return (
    <details className="border border-gray-100 rounded-xl overflow-hidden group">
      <summary className="flex items-center justify-between px-4 py-3 cursor-pointer select-none hover:bg-gray-50 transition-colors list-none">
        <span className="font-medium text-sm text-gray-800">{item.name}</span>
        <svg
          className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      {instructionsHtml && (
        <div className="px-4 pb-4 pt-2 border-t border-gray-100">
          <div
            className="prose prose-sm max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: instructionsHtml }}
          />
        </div>
      )}
    </details>
  )
}

export default async function AppliancesSection({ content }: Props) {
  if (!content.items?.length) return null

  return (
    <div className="space-y-2">
      {content.items.map((item, i) => (
        <ApplianceItem key={i} item={item} />
      ))}
    </div>
  )
}
