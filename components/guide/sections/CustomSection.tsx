import { markdownToHtml } from '@/lib/markdown'

interface CustomContent {
  body: string
}

interface Props {
  content: CustomContent
}

export default async function CustomSection({ content }: Props) {
  const html = content.body ? await markdownToHtml(content.body) : null
  if (!html) return null

  return (
    <div
      className="prose prose-sm max-w-none text-gray-700"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
