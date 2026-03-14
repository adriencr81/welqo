'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { ImagePlus, Loader2 } from 'lucide-react'

interface PropertyFormProps {
  action: (formData: FormData) => Promise<void>
}

export default function PropertyForm({ action }: PropertyFormProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const [pending, setPending] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setPreview(url)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    const formData = new FormData(e.currentTarget)
    await action(formData)
    setPending(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nom */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nom de la propriété <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Mon Appart Paris 11e"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <p className="text-xs text-gray-400 mt-1">
          Sera utilisé pour générer l&apos;URL publique du guide.
        </p>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description <span className="text-gray-400 font-normal">(optionnel)</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          placeholder="Appartement lumineux au cœur du 11e, idéal pour 2 personnes..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      {/* Photo de couverture */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Photo de couverture <span className="text-gray-400 font-normal">(optionnel)</span>
        </label>

        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="w-full"
        >
          {preview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={preview}
              alt="Aperçu"
              className="w-full h-48 object-cover rounded-lg border border-gray-200"
            />
          ) : (
            <div className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 text-gray-400 hover:border-blue-400 hover:text-blue-400 transition-colors">
              <ImagePlus className="h-8 w-8" />
              <span className="text-sm">Cliquez pour ajouter une photo</span>
              <span className="text-xs">JPG, PNG, WEBP — max 5 Mo</span>
            </div>
          )}
        </button>

        <input
          ref={fileRef}
          name="cover_image"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={handleImageChange}
        />

        {preview && (
          <button
            type="button"
            onClick={() => {
              setPreview(null)
              if (fileRef.current) fileRef.current.value = ''
            }}
            className="mt-2 text-xs text-gray-400 hover:text-red-500 transition-colors"
          >
            Supprimer la photo
          </button>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          {pending && <Loader2 className="h-4 w-4 animate-spin" />}
          {pending ? 'Création...' : 'Créer la propriété'}
        </button>
        <Link
          href="/properties"
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          Annuler
        </Link>
      </div>
    </form>
  )
}
