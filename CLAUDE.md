# Welqo — CLAUDE.md

## Produit
SaaS B2C pour propriétaires de locations saisonnières (Airbnb, Gîtes, Booking).
Permet de créer un guide numérique accessible via QR code, sans app, sans compte invité.
Modèle : LTD (Life Time Deal) → AppSumo → MRR mensuel.

## Stack technique
- **Framework** : Next.js 14 (App Router) + TypeScript strict
- **Auth** : Supabase Auth (email/password + magic link)
- **Base de données** : Supabase (PostgreSQL)
- **Stockage fichiers** : Supabase Storage (images sections)
- **Paiement** : Lemon Squeezy (gère TVA EU automatiquement)
- **Déploiement** : Vercel
- **Styling** : Tailwind CSS + shadcn/ui
- **QR Code** : librairie `qrcode` (npm)
- **Offline** : Next.js service worker via `next-pwa`
- **Email transactionnel** : Resend

## Conventions code
- TypeScript strict — zéro `any`
- 2 espaces d'indentation
- Composants : PascalCase (`GuideEditor.tsx`)
- Fichiers utilitaires : kebab-case (`generate-qr.ts`)
- Toujours `npm run lint && npm run typecheck` avant commit
- Variables d'env : toujours préfixées `NEXT_PUBLIC_` côté client

## Contexte métier
Voir @docs/product.md

## Architecture technique
Voir @docs/architecture.md

## Scope MVP
Voir @docs/mvp-scope.md

## Progression
Voir @docs/progress.md

## Marketing / Copywriting
Voir @docs/marketing.md

## Ne jamais faire
- Modifier le schéma Supabase sans créer une migration dans `supabase/migrations/`
- Appeler Lemon Squeezy côté client (webhooks = côté serveur uniquement)
- Stocker des données utilisateur en localStorage (RGPD)
- Générer le QR code côté serveur (trop lent) — toujours côté client
- Déployer sans avoir testé le mode hors-ligne sur mobile
