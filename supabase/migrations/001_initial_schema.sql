-- Migration 001 — Schéma initial Welqo
-- À exécuter dans Supabase SQL Editor

-- Table profiles (liée à auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  plan TEXT DEFAULT 'free' CHECK (plan IN ('free', 'ltd', 'solo', 'pro', 'agency')),
  ltd_activated_at TIMESTAMPTZ,
  lemonsqueezy_customer_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table properties (logements)
CREATE TABLE properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  cover_image_url TEXT,
  accent_color TEXT DEFAULT '#3B82F6',
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table sections du guide
CREATE TABLE sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN (
    'wifi', 'checkin', 'checkout', 'appliances',
    'rules', 'places', 'transport', 'emergency', 'custom'
  )),
  title TEXT NOT NULL,
  content JSONB NOT NULL DEFAULT '{}',
  position INTEGER NOT NULL DEFAULT 0,
  icon TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index
CREATE INDEX idx_properties_user_id ON properties(user_id);
CREATE INDEX idx_properties_slug ON properties(slug);
CREATE INDEX idx_sections_property_id ON sections(property_id);
CREATE INDEX idx_sections_position ON sections(property_id, position);

-- Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE sections ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users see own profile" ON profiles FOR ALL USING (auth.uid() = id);
CREATE POLICY "Users manage own properties" ON properties FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own sections" ON sections FOR ALL
  USING (property_id IN (SELECT id FROM properties WHERE user_id = auth.uid()));

-- Lecture publique des guides publiés
CREATE POLICY "Public read published properties" ON properties
  FOR SELECT USING (published = true);
CREATE POLICY "Public read sections of published" ON sections
  FOR SELECT USING (
    property_id IN (SELECT id FROM properties WHERE published = true)
  );

-- Trigger pour créer un profil automatiquement à l'inscription
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
