import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import GuideEditor from '@/components/editor/GuideEditor'
import type { Property, Section } from '@/lib/db-types'

interface Props {
  params: Promise<{ id: string }>
}

export default async function EditPropertyPage({ params }: Props) {
  const { id } = await params
  const supabase = await createClient()

  const { data: property } = await supabase
    .from('properties')
    .select('*')
    .eq('id', id)
    .single()

  if (!property) notFound()

  const { data: sections } = await supabase
    .from('sections')
    .select('*')
    .eq('property_id', id)
    .order('position', { ascending: true })

  return (
    <GuideEditor
      property={property as Property}
      initialSections={(sections ?? []) as Section[]}
    />
  )
}
