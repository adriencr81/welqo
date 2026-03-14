# ux-design.md — Guidelines UX & Design

## Philosophie design
**"Un hôte Airbnb doit pouvoir créer son premier guide sans lire un tutoriel."**

Pas de tooltips partout. Pas de wizards à 8 étapes. L'interface guide naturellement.

---

## Dashboard (côté propriétaire)

### Palette couleurs
- Background : `#FAFAF9` (blanc cassé, pas blanc pur)
- Sidebar : `#1C1917` (quasi-noir chaud)
- Accent principal : configurable par propriété (défaut `#3B82F6`)
- Texte principal : `#0C0A09`
- Texte secondaire : `#78716C`
- Border : `#E7E5E4`

### Typographie dashboard
- Font : Geist (déjà inclus dans Next.js 14)
- Titre de page : 24px / 600
- Labels : 13px / 500 / uppercase / letter-spacing 0.05em
- Texte corps : 14px / 400

### Éditeur de sections
- Chaque section = une carte avec header coloré selon le type
- Header : icône + titre de la section + bouton suppression (discret, rouge au hover)
- Corps : formulaire adapté au type
- Drag handle : visible uniquement au hover (icône ⋮⋮)
- Sauvegarde : indicateur discret "Sauvegardé il y a 3s" en bas de page

### États vides
- Propriété sans sections : illustration + CTA "Ajouter votre première section"
- Dashboard sans propriété : CTA "Créer votre première propriété"
- Toujours un CTA clair dans les états vides

---

## Page guide publique (côté touriste)

### Principes
1. **Zéro friction** — pas de login, pas de cookie banner intrusif, pas de popup
2. **Mobile first** — conçu pour un iPhone tenu d'une main
3. **Rapide** — LCP < 1.5s, First Contentful Paint < 0.8s
4. **Accessible** — contraste AA minimum, taille de texte >= 16px sur mobile

### Structure de la page guide
```
[Cover image de la propriété — full width]
[Nom de la propriété — grand titre]
[Grille de sections — cartes avec icône + titre]
   → Click sur une carte → scroll vers la section
[Sections détaillées — l'une après l'autre]
[Footer discret : "Propulsé par StayGuide"]
```

### Sections — rendu mobile
- Carte section : background blanc, border-radius 12px, shadow subtile
- Icône de section : 32px, colorée selon l'accent_color de la propriété
- Wi-Fi : afficher réseau + mot de passe + bouton "Copier" bien visible
- Places : liste avec catégorie badge + distance + lien Maps au tap
- Emergency : numéros cliquables (tel: links) — CRUCIAL sur mobile
- Custom : Markdown rendu proprement (pas de HTML brut)

### Mode hors-ligne
- Banner discret en haut si hors-ligne : "Mode hors-ligne — dernière mise à jour il y a 2 jours"
- Toutes les images mises en cache au premier chargement
- Fonctionnement identique avec ou sans connexion

---

## QR Code — spécifications

- Format : PNG 1000x1000px (haute résolution pour impression)
- Marge blanche : 40px minimum autour du QR
- Optionnel : logo de la propriété au centre (20% de la taille du QR)
- Couleur : QR noir sur fond blanc (meilleure lecture par les scanners)
- Tester avec : iPhone Camera, Google Lens, Samsung Camera

### Instructions à donner à l'hôte
"Imprimez ce QR code et collez-le :
- Sur le réfrigérateur
- Sur la table du salon  
- Sur la porte d'entrée
Vos touristes le scannent dès leur arrivée."

---

## Microcopy — exemples de textes d'interface

### Boutons
- Créer un guide : "Créer un guide" (pas "Nouveau" ou "+")
- Publier : "Publier le guide" → après publication : "Guide publié ✓"
- Dépublier : "Masquer aux voyageurs" (moins anxiogène que "Dépublier")
- Sauvegarder : jamais de bouton save → sauvegarde auto

### Messages d'état
- Sauvegarde : "Modifications sauvegardées" (3s puis disparaît)
- Erreur réseau : "Connexion perdue — vos modifications sont en attente"
- Guide non publié : "Votre guide est en brouillon — les voyageurs ne peuvent pas le voir"

### Placeholders
- Nom propriété : "Ex : Appartement Montmartre"
- Description : "Un court mot d'accueil pour vos voyageurs..."
- Nom section custom : "Ex : Mes conseils secrets"

### Onboarding (3 étapes max)
1. "Donnez un nom à votre propriété"
2. "Ajoutez vos premières informations"
3. "Publiez et récupérez votre QR code"
