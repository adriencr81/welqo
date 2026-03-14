'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { slugify } from '@/lib/slugify'
import PropertyForm from '@/components/properties/PropertyForm'
import type { SupabaseClient } from '@supabase/supabase-js'

async function ensureUniqueSlug(
  supabase: SupabaseClient,
  base: string
): Promise<string> {
  const { data } = await supabase
    .from('properties')
    .select('slug')
    .eq('slug', base)
    .maybeSingle()

  if (!data) return base

  const suffix = Math.random().toString(36).slice(2, 6)
  return `${base}-${suffix}`
}

async function createProperty(formData: FormData) {
  'use server'

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const name = (formData.get('name') as string).trim()
  const description = (formData.get('description') as string | null)?.trim() || null
  const imageFile = formData.get('cover_image') as File | null

  const baseSlug = slugify(name) || 'propriete'
  const slug = await ensureUniqueSlug(supabase, baseSlug)

  let coverImageUrl: string | null = null

  if (imageFile && imageFile.size > 0) {
    const ext = imageFile.name.split('.').pop() ?? 'jpg'
    const path = `${user.id}/${slug}.${ext}`

    const { error: uploadError } = await supabase.storage
      .from('property-covers')
      .upload(path, imageFile, { upsert: true })

    if (!uploadError) {
      const {
        data: { publicUrl },
      } = supabase.storage.from('property-covers').getPublicUrl(path)
      coverImageUrl = publicUrl
    }
  }

  const { data: property, error } = await supabase
    .from('properties')
    .insert({
      user_id: user.id,
      name,
      description,
      slug,
      cover_image_url: coverImageUrl,
    })
    .select()
    .single()

  if (error || !property) {
    throw new Error('Erreur lors de la création de la propriété')
  }

  redirect(`/properties/${property.id}`)
}

export default function NewPropertyPage() {
  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Nouvelle propriété</h1>
        <p className="text-gray-500 mt-1">
          Créez un guide d&apos;accueil pour votre logement.
        </p>
      </div>
      <PropertyForm action={createProperty} />
    </div>
  )
}
