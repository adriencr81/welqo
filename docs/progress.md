# progress.md — Suivi de progression

_Claude Code met à jour ce fichier automatiquement après chaque session._
_Dernière mise à jour : J2 — Sprint 2 terminé_

---

## Statut global
🔴 Non démarré | 🟡 En cours | 🟢 Terminé

| Sprint | Statut | Notes |
|--------|--------|-------|
| Sprint 1 — Fondations | 🟢 | Terminé — pushé sur GitHub |
| Sprint 2 — Propriétés | 🟢 | Terminé |
| Sprint 3 — Éditeur | 🔴 | |
| Sprint 4 — Guide public + QR | 🔴 | |
| Sprint 5 — Paiement LTD | 🔴 | |
| Landing page | 🔴 | |
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

- [ ] Interface ajout de section (modal avec choix type)
- [ ] Section `wifi`
- [ ] Section `checkin`
- [ ] Section `checkout`
- [ ] Section `rules`
- [ ] Section `places`
- [ ] Section `custom`
- [ ] Section `emergency`
- [ ] Section `appliances`
- [ ] Drag & drop (dnd-kit)
- [ ] Sauvegarde auto (debounce)

---

## Sprint 4 — Guide public + QR

- [ ] Page publique `/g/[slug]`
- [ ] Design mobile-first
- [ ] Bouton copie Wi-Fi
- [ ] Tous les rendus de sections côté public
- [ ] Bouton Publier/Dépublier
- [ ] Génération QR code
- [ ] Page QR dans dashboard
- [ ] Téléchargement QR en PNG
- [ ] Service worker offline

---

## Sprint 5 — Paiement LTD

- [ ] Produit créé dans Lemon Squeezy
- [ ] Page pricing landing
- [ ] Intégration bouton de paiement
- [ ] Webhook Lemon Squeezy
- [ ] Mise à jour plan dans Supabase
- [ ] Gating features (free vs LTD)
- [ ] Email confirmation (Resend)

---

## Landing page

- [ ] Hero section
- [ ] Section problème
- [ ] Démo produit (GIF ou vidéo)
- [ ] Features 3 colonnes
- [ ] Tableau comparaison
- [ ] FAQ
- [ ] CTA final avec compteur de places
- [ ] Page /alternatives/touchstay
- [ ] Meta tags SEO

---

## Bugs connus
_(à remplir au fur et à mesure)_

---

## Décisions techniques prises
_(Claude documente ici les choix importants pour les sessions suivantes)_

- **Slug** : généré depuis le nom de la propriété, suffixe aléatoire si collision
- **Offline** : next-pwa (workbox) — cache la page guide complète au premier chargement
- **Drag & drop** : dnd-kit (plus léger que react-beautiful-dnd, maintenu activement)
- **Éditeur texte** : pas de rich text editor en MVP — textarea simple + rendu Markdown avec `remark`
