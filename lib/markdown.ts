import { remark } from 'remark'
import remarkHtml from 'remark-html'

export async function markdownToHtml(markdown: string): Promise<string> {
  if (!markdown) return ''
  const result = await remark()
    .use(remarkHtml, { sanitize: true })
    .process(markdown)
  return result.toString()
}
