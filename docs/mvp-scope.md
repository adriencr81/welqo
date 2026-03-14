# mvp-scope.md — Scope MVP Strict

## Règle d'or
Si une feature n'est pas dans cette liste → elle n'existe pas pour le MVP.
Toute demande de feature hors scope → répondre "post-MVP" et l'ajouter à la liste d'attente.

---

## Features MVP (dans l'ordre de développement)

### Sprint 1 — Fondations (J1-J3)
- [ ] Setup projet Next.js 14 + TypeScript + Tailwind + shadcn/ui
- [ ] Setup Supabase (auth + DB avec le schéma complet)
- [ ] Variables d'environnement + deploy Vercel initial
- [ ] Page login / signup (email + password)
- [ ] Middleware auth (protection routes dashboard)
- [ ] Layout dashboard avec sidebar navigation

### Sprint 2 — Création de propriété (J4-J5)
- [ ] Page liste des propriétés (dashboard home)
- [ ] Formulaire création propriété (nom, description, photo de couverture)
- [ ] Upload photo via Supabase Storage
- [ ] Génération automatique du slug (nom → kebab-case + unicité)
- [ ] Page propriété avec sections vides

### Sprint 3 — Éditeur de sections (J6-J9)
- [ ] Interface ajout de section (choix du type avec icônes)
- [ ] Composant section type `wifi` (réseau + mot de passe)
- [ ] Composant section type `checkin` (heure, code porte, parking, instructions)
- [ ] Composant section type `checkout` (heure, instructions)
- [ ] Composant section type `rules` (liste de règles)
- [ ] Composant section type `places` (liste de lieux avec catégorie + distance)
- [ ] Composant section type `custom` (titre libre + texte Markdown)
- [ ] Composant section type `emergency` (numéros d'urgence)
- [ ] Drag & drop réordonnancement des sections (dnd-kit)
- [ ] Sauvegarde auto (debounce 1s après modification)

### Sprint 4 — Guide public + QR code (J10-J12)
- [ ] Page publique `/g/[slug]` — rendu Server Component
- [ ] Design mobile-first de la page guide (propre, lisible, rapide)
- [ ] Bouton copie sur les codes Wi-Fi (Web Clipboard API)
- [ ] Rendu de chaque type de section côté public
- [ ] Bouton "Publier / Dépublier" dans le dashboard
- [ ] Génération QR code (client-side, librairie `qrcode`)
- [ ] Page QR code dans le dashboard (avec bouton télécharger PNG)
- [ ] Service worker / mode offline (next-pwa)

### Sprint 5 — Paiement LTD (J13-J14)
- [ ] Intégration Lemon Squeezy (création du produit LTD)
- [ ] Page pricing sur la landing (bouton "Acheter à 59€")
- [ ] Webhook Lemon Squeezy → mise à jour plan dans Supabase
- [ ] Gating des features selon plan (limite 1 propriété en free, illimité en LTD)
- [ ] Email de confirmation d'achat (Resend)

---

## Hors scope MVP — liste d'attente post-lancement

Ces features sont CONFIRMÉES pour après AppSumo, selon le feedback utilisateurs :

- [ ] **Multilingue** — traduction automatique du guide (FR/EN/DE/ES/NL)
- [ ] **Analytics** — nombre de scans QR, pages vues par section
- [ ] **Domaine custom** — guide.mon-domaine.com au lieu de stayguide.io/g/slug
- [ ] **Marque blanche** — logo personnalisé pour agences
- [ ] **Templates** — démarrer avec un guide pré-rempli par type de logement
- [ ] **Intégration Airbnb** — importer les infos depuis l'annonce
- [ ] **App mobile** — PWA installable (simple, le service worker suffit en MVP)
- [ ] **Notifications** — alerter l'hôte quand un touriste consulte le guide
- [ ] **Import CSV** — pour les agences avec beaucoup de propriétés
- [ ] **Section météo** — widget météo local automatique
- [ ] **PDF export** — pour les hôtes qui veulent aussi une version imprimée

---

## Définition de "Done" pour chaque feature

Une feature est terminée quand :
1. Elle fonctionne sur mobile Chrome + Safari iOS
2. Elle fonctionne hors-ligne (si applicable)
3. Elle est typée TypeScript sans `any`
4. `npm run lint` passe sans erreur
5. Elle a été testée manuellement sur Vercel preview (pas juste en local)
