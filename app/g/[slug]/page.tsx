import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import type { Property, Section } from '@/lib/db-types'
import GuideViewer from '@/components/guide/GuideViewer'

interface Props {
  params: Promise<{ slug: string }>
}

async function getGuideData(slug: string): Promise<{ property: Property; sections: Section[] } | null> {
  const supabase = await createClient()

  const { data: property } = await supabase
    .from('properties')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!property) return null

  const { data: sections } = await supabase
    .from('sections')
    .select('*')
    .eq('property_id', property.id)
    .order('position', { ascending: true })

  return { property, sections: sections ?? [] }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = await getGuideData(slug)
  if (!data) return { title: 'Guide introuvable' }

  const { property } = data
  return {
    title: property.name,
    description: property.description ?? `Guide d'accueil — ${property.name}`,
    openGraph: {
      title: property.name,
      description: property.description ?? `Guide d'accueil — ${property.name}`,
      images: property.cover_image_url ? [property.cover_image_url] : [],
    },
  }
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const data = await getGuideData(slug)

  if (!data) notFound()

  return <GuideViewer property={data.property} sections={data.sections} />
}
