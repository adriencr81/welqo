'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Home, Settings, LogOut, QrCode, Zap } from 'lucide-react'

const navItems = [
  { href: '/properties', label: 'Mes propriétés', icon: Home },
  { href: '/settings', label: 'Paramètres', icon: Settings },
]

interface Props {
  plan: string
}

export default function Sidebar({ plan }: Props) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()
  const isLtd = plan === 'ltd'

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <aside className="w-60 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <QrCode className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">Welqo</span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname.startsWith(href)
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>

      {/* Plan badge / CTA upgrade */}
      <div className="px-4 pb-2">
        {isLtd ? (
          <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg">
            <Zap className="h-3.5 w-3.5 text-blue-500 shrink-0" />
            <span className="text-xs font-semibold text-blue-700">Accès à vie</span>
          </div>
        ) : (
          <Link
            href="/pricing"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname === '/pricing'
                ? 'bg-amber-50 text-amber-700'
                : 'text-amber-600 hover:bg-amber-50'
            }`}
          >
            <Zap className="h-4 w-4" />
            Passer en LTD — 59€
          </Link>
        )}
      </div>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 w-full transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Se déconnecter
        </button>
      </div>
    </aside>
  )
}
