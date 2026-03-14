'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { SECTION_ICONS } from '@/lib/section-types'
import type { SectionType } from '@/lib/section-types'
import type { Section } from '@/lib/db-types'

export async function createSection(
  propertyId: string,
  type: SectionType,
  title: string,
  content: Record<string, unknown>,
  position: number
): Promise<Section> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('sections')
    .insert({
      property_id: propertyId,
      type,
      title,
      content,
      position,
      icon: SECTION_ICONS[type],
    })
    .select()
    .single()

  if (error) throw new Error(error.message)
  revalidatePath(`/properties/${propertyId}`)
  return data as Section
}

export async function updateSection(
  sectionId: string,
  propertyId: string,
  updates: { title?: string; content?: Record<string, unknown> }
): Promise<void> {
  const supabase = await createClient()
  const { error } = await supabase
    .from('sections')
    .update(updates)
    .eq('id', sectionId)

  if (error) throw new Error(error.message)
  revalidatePath(`/properties/${propertyId}`)
}

export async function deleteSection(
  sectionId: string,
  propertyId: string
): Promise<void> {
  const supabase = await createClient()
  const { error } = await supabase.from('sections').delete().eq('id', sectionId)
  if (error) throw new Error(error.message)
  revalidatePath(`/properties/${propertyId}`)
}

export async function reorderSections(
  propertyId: string,
  orderedIds: string[]
): Promise<void> {
  const supabase = await createClient()
  await Promise.all(
    orderedIds.map((id, index) =>
      supabase.from('sections').update({ position: index }).eq('id', id)
    )
  )
  revalidatePath(`/properties/${propertyId}`)
}

export async function togglePublish(
  propertyId: string,
  published: boolean
): Promise<void> {
  const supabase = await createClient()
  const { error } = await supabase
    .from('properties')
    .update({ published })
    .eq('id', propertyId)

  if (error) throw new Error(error.message)
  revalidatePath(`/properties/${propertyId}`)
  revalidatePath(`/properties/${propertyId}/edit`)
}
