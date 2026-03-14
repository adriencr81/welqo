interface RulesContent {
  items: string[]
}

interface Props {
  content: RulesContent
}

export default function RulesSection({ content }: Props) {
  if (!content.items?.length) return null

  return (
    <ul className="space-y-2">
      {content.items.map((rule, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
          <span className="text-gray-300 mt-0.5">•</span>
          <span>{rule}</span>
        </li>
      ))}
    </ul>
  )
}
