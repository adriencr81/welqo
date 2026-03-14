export type Plan = 'free' | 'ltd' | 'solo' | 'pro' | 'agency'

export interface Profile {
  id: string
  email: string
  plan: Plan
  ltd_activated_at: string | null
  lemonsqueezy_customer_id: string | null
  lemonsqueezy_order_id: string | null
  created_at: string
}

export interface Section {
  id: string
  property_id: string
  type: string
  title: string
  content: Record<string, unknown>
  position: number
  icon: string | null
  created_at: string
}

export interface Property {
  id: string
  user_id: string
  name: string
  slug: string
  description: string | null
  cover_image_url: string | null
  accent_color: string
  published: boolean
  created_at: string
  updated_at: string
}
