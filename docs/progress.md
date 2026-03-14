# progress.md — Suivi de progression

_Claude Code met à jour ce fichier automatiquement après chaque session._
_Dernière mise à jour : J6 — Landing page terminée_

---

## Statut global
🔴 Non démarré | 🟡 En cours | 🟢 Terminé

| Sprint | Statut | Notes |
|--------|--------|-------|
| Sprint 1 — Fondations | 🟢 | Terminé — pushé sur GitHub |
| Sprint 2 — Propriétés | 🟢 | Terminé |
| Sprint 3 — Éditeur | 🟢 | Terminé |
| Sprint 4 — Guide public + QR | 🟢 | Terminé |
| Sprint 5 — Paiement LTD | 🟢 | Terminé |
| Landing page | 🟢 | Terminée |
| Déploiement production | 🔴 | |

---

## Sprint 1 — Fondations

- [x] Setup projet Next.js 14 + TypeScript + Tailwind + shadcn/ui
- [x] Setup Supabase (auth + DB)
- [x] Migrations SQL schéma complet
- [x] Variables d'env configurées
- [x] Deploy Vercel initial (même vide)
- [x] Page login fonctionnelle
- [x] Page signup fonctionnelle
- [x] Middleware auth
- [x] Layout dashboard avec sidebar

---

## Sprint 2 — Propriétés

- [x] Page liste des propriétés
- [x] Formulaire création propriété
- [x] Upload photo Supabase Storage
- [x] Génération slug automatique
- [x] Page propriété individuelle

---

## Sprint 3 — Éditeur de sections

- [x] Interface ajout de section (modal avec choix type)
- [x] Section `wifi`
- [x] Section `checkin`
- [x] Section `checkout`
- [x] Section `rules`
- [x] Section `places`
- [x] Section `custom`
- [x] Section `emergency`
- [x] Section `appliances`
- [x] Drag & drop (dnd-kit)
- [x] Sauvegarde auto (debounce)

---

## Sprint 4 — Guide public + QR

- [x] Page publique `/g/[slug]`
- [x] Design mobile-first
- [x] Bouton copie Wi-Fi (+ code porte checkin)
- [x] Tous les rendus de sections côté public
- [x] Bouton Publier/Dépublier (déjà dans GuideEditor Sprint 3)
- [x] Génération QR code
- [x] Page QR dans dashboard
- [x] Téléchargement QR en PNG
- [x] Service worker offline (@ducanh2912/next-pwa)

---

## Sprint 5 — Paiement LTD

- [ ] Produit créé dans Lemon Squeezy (action manuelle dans le dashboard LS)
- [x] Page pricing `/pricing` dans le dashboard
- [x] Bouton de paiement → checkout LS avec user_id en custom data
- [x] Webhook `/api/webhooks/lemonsqueezy` avec vérification HMAC-SHA256
- [x] Mise à jour plan dans Supabase (plan = 'ltd')
- [x] Gating features (free = 1 propriété max, LTD = illimité)
- [x] Email confirmation (Resend — `ltdConfirmationEmail`)

---

## Landing page

- [x] Hero section (headline + CTA + social proof early bird)
- [x] Section problème ("Vous connaissez ça ?")
- [x] Démo produit (mockup éditeur + phone, pas de GIF pour MVP)
- [x] Features 3 colonnes (Ultra-simple / Hors-ligne / À vie)
- [x] Tableau comparaison (Welqo vs TouchStay vs Hostfully)
- [x] Témoignages (3 placeholders)
- [x] FAQ (6 questions, details/summary HTML natif)
- [x] CTA final avec mention early bird
- [x] Meta tags SEO (title, description, OG)
- [ ] Page /alternatives/touchstay (post-MVP ou prochaine session)

---

## Bugs connus
_(à remplir au fur et à mesure)_

---

## Décisions techniques prises
_(Claude documente ici les choix importants pour les sessions suivantes)_

- **Slug** : généré depuis le nom de la propriété, suffixe aléatoire si collision
- **Offline** : @ducanh2912/next-pwa (workbox) — fork maintenu de next-pwa, désactivé en dev, cache la page guide au premier chargement
- **Page publique** : Server Components + details/summary HTML natif pour l'accordéon (fonctionne sans JS)
- **Markdown** : remark + remark-html, rendu côté serveur pour les sections checkin/checkout/appliances/custom
- **QR Code** : qrcode npm, génération côté client, export PNG via canvas.toDataURL
- **Paiement** : Lemon Squeezy — checkout URL avec `checkout[custom][user_id]` pour identifier l'acheteur côté webhook
- **Webhook LS** : vérification signature HMAC-SHA256 via Web Crypto API (Edge compatible)
- **Gating** : plan free = 1 propriété max, vérification dans Server Action `createProperty` + banner dans la liste
- **Drag & drop** : dnd-kit (plus léger que react-beautiful-dnd, maintenu activement)
- **Éditeur texte** : pas de rich text editor en MVP — textarea simple + rendu Markdown avec `remark`
