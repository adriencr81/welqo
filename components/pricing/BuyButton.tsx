'use client'

import { ShoppingCart } from 'lucide-react'
import { buildCheckoutUrl } from '@/lib/lemonsqueezy'

interface Props {
  userId: string
}

export default function BuyButton({ userId: _userId }: Props) {
  function handleClick() {
    try {
      const url = buildCheckoutUrl(_userId)
      window.location.href = url
    } catch {
      // NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL non encore configurée
      alert('La page de paiement n\'est pas encore configurée.')
    }
  }

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm"
    >
      <ShoppingCart className="h-4 w-4" />
      Obtenir l&apos;accès à vie — 59€
    </button>
  )
}
