# architecture.md — Architecture Technique

## Structure des dossiers

```
stayguide/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx              # Layout dashboard avec sidebar
│   │   ├── properties/
│   │   │   ├── page.tsx            # Liste des propriétés
│   │   │   └── [id]/
│   │   │       ├── page.tsx        # Vue propriété
│   │   │       └── edit/page.tsx   # Éditeur de guide
│   │   └── settings/page.tsx
│   ├── g/
│   │   └── [slug]/page.tsx         # Page publique du guide (touriste)
│   └── api/
│       ├── webhooks/
│       │   └── lemonsqueezy/route.ts
│       └── qr/
│           └── [propertyId]/route.ts
├── components/
│   ├── editor/
│   │   ├── GuideEditor.tsx         # Éditeur principal
│   │   ├── SectionCard.tsx         # Carte section draggable
│   │   └── SectionTypes/           # Composants par type de section
│   ├── guide/
│   │   ├── GuideViewer.tsx         # Rendu côté touriste
│   │   └── SectionRenderer.tsx
│   └── ui/                         # shadcn/ui components
├── lib/
│   ├── supabase/
│   │   ├── client.ts               # Client côté navigateur
│   │   └── server.ts               # Client côté serveur (Server Components)
│   ├── lemonsqueezy.ts
│   └── qrcode.ts
├── supabase/
│   └── migrations/                 # Toutes les migrations SQL ici
└── public/
    └── sw.js                       # Service worker (généré par next-pwa)
```

---

## Schéma base de données

```sql
-- Utilisateurs (géré par Supabase Auth)
-- Table profiles liée à auth.users

CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  plan TEXT DEFAULT 'free' CHECK (plan IN ('free', 'ltd', 'solo', 'pro', 'agency')),
  ltd_activated_at TIMESTAMPTZ,
  stripe_customer_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Propriétés (logements)
CREATE TABLE properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,                    -- "Mon Appart Paris 11e"
  slug TEXT UNIQUE NOT NULL,             -- URL publique : /g/mon-appart-paris
  description TEXT,
  cover_image_url TEXT,
  accent_color TEXT DEFAULT '#3B82F6',   -- Couleur de personnalisation
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sections du guide
CREATE TABLE sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN (
    'wifi',           -- Code Wi-Fi avec bouton copie
    'checkin',        -- Instructions arrivée (code porte, parking)
    'checkout',       -- Instructions départ (heure, clés)
    'appliances',     -- Mode d'emploi équipements
    'rules',          -- Règles de la maison
    'places',         -- Bonnes adresses (restaurants, supermarchés)
    'transport',      -- Comment se déplacer
    'emergency',      -- Numéros d'urgence
    'custom'          -- Section libre (titre + texte)
  )),
  title TEXT NOT NULL,
  content JSONB NOT NULL DEFAULT '{}',   -- Données structurées par type
  position INTEGER NOT NULL DEFAULT 0,   -- Ordre d'affichage (drag & drop)
  icon TEXT,                             -- Emoji ou nom d'icône Lucide
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour les performances
CREATE INDEX idx_properties_user_id ON properties(user_id);
CREATE INDEX idx_properties_slug ON properties(slug);
CREATE INDEX idx_sections_property_id ON sections(property_id);
CREATE INDEX idx_sections_position ON sections(property_id, position);

-- Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE sections ENABLE ROW LEVEL SECURITY;

-- Policies : un user ne voit que ses données
CREATE POLICY "Users see own profile" ON profiles FOR ALL USING (auth.uid() = id);
CREATE POLICY "Users manage own properties" ON properties FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own sections" ON sections FOR ALL
  USING (property_id IN (SELECT id FROM properties WHERE user_id = auth.uid()));

-- Lecture publique des guides publiés (pour les touristes, sans auth)
CREATE POLICY "Public can read published properties" ON properties
  FOR SELECT USING (published = true);
CREATE POLICY "Public can read sections of published properties" ON sections
  FOR SELECT USING (
    property_id IN (SELECT id FROM properties WHERE published = true)
  );
```

---

## Structure JSON du champ `content` par type de section

```typescript
// type: 'wifi'
interface WifiContent {
  network: string      // "Mon_Wifi_5G"
  password: string     // "password123"
  notes?: string       // "Box dans l'entrée"
}

// type: 'checkin'
interface CheckinContent {
  arrival_time?: string  // "À partir de 15h"
  code?: string          // "1234#"
  parking?: string       // "Parking gratuit rue de la Paix"
  instructions: string   // Texte libre Markdown
}

// type: 'places'
interface PlacesContent {
  items: {
    name: string         // "Boulangerie Paul"
    category: string     // "boulangerie" | "restaurant" | "supermarché" | "bar"
    address?: string
    distance?: string    // "200m à pied"
    tip?: string         // "Essayez le croissant du dimanche"
    maps_url?: string
  }[]
}

// type: 'custom'
interface CustomContent {
  body: string           // Markdown
}

// type: 'appliances'
interface AppliancesContent {
  items: {
    name: string         // "Lave-linge"
    instructions: string // Markdown ou texte
    image_url?: string
  }[]
}

// type: 'emergency'
interface EmergencyContent {
  items: {
    label: string        // "SAMU"
    number: string       // "15"
    notes?: string
  }[]
}
```

---

## Flux utilisateur principal

```
[Inscription] → [Dashboard] → [Créer propriété] → [Éditeur]
                                                        ↓
                                              [Ajouter sections]
                                                        ↓
                                              [Publier le guide]
                                                        ↓
                                              [Page QR code] → [Imprimer / Partager]
                                                        ↓
                              [Touriste scanne] → [Page publique /g/slug]
                                                        ↓
                                              [Chargement offline (SW)]
```

---

## Page publique /g/[slug] — détails importants

- Rendu **Server Component** pour le SEO et la vitesse initiale
- Après chargement : le service worker met en cache toute la page
- **Pas d'auth requise** — accès totalement public
- URL courte et mémorisable : `/g/mon-appart-paris`
- Meta tags OG pour partage WhatsApp/iMessage (image de la propriété)
- Design mobile-first — 90% des accès se font sur téléphone

---

## Variables d'environnement requises

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=      # Serveur uniquement

# Lemon Squeezy
LEMONSQUEEZY_API_KEY=           # Serveur uniquement
LEMONSQUEEZY_WEBHOOK_SECRET=    # Vérification webhooks
NEXT_PUBLIC_LEMONSQUEEZY_STORE_ID=

# Resend (emails)
RESEND_API_KEY=                 # Serveur uniquement

# App
NEXT_PUBLIC_APP_URL=https://stayguide.io
```
