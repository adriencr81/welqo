# product.md — Contexte Produit Complet

## Nom du produit
**StayGuide** (nom de travail — peut changer)
- Domaine cible : stayguide.io ou stayguide.fr
- Tagline : "Le guide d'accueil que vos voyageurs adorent ouvrir"

---

## Le problème qu'on résout

Chaque propriétaire Airbnb reçoit les mêmes messages en boucle :
- "C'est quoi le code Wi-Fi ?"
- "Comment fonctionne le chauffage ?"
- "Y a-t-il un restaurant ouvert le dimanche ?"
- "Où je mets les poubelles ?"

Aujourd'hui les solutions sont :
1. **PDF statique** : moche, non modifiable facilement, ne s'ouvre pas sur tous les téléphones
2. **Google Docs partagé** : peu pratique, pas pensé pour les touristes
3. **TouchStay** : 99$/an, interface complexe, trop de features
4. **Hostfully** : 300$/an, orienté agences, over-kill pour un solo host
5. **Notion public** : bricolage, aucun mode offline, aucun branding

---

## La solution

Un outil web qui permet en 15 minutes de créer un guide numérique :
- Organisé en **sections** (Arrivée, Wi-Fi, Équipements, Bonnes adresses, Règles, Départ)
- Accessible via **QR code** imprimé ou partagé par message
- **Fonctionne hors-ligne** une fois chargé (service worker)
- Mise à jour en temps réel — le touriste recharge et voit les changements
- **Multi-propriétés** — un compte pour tous ses logements

---

## Personas

### Persona 1 — Sophie, 34 ans, hôte Airbnb urbaine
- Loue son appartement parisien pendant ses vacances (15-20 nuits/an)
- Passe 2h à répondre aux mêmes questions à chaque séjour
- Budget : paie déjà Airbnb, ne veut pas un abonnement de plus
- Déclencheur d'achat : "79€ une fois pour toujours ? Vendu."

### Persona 2 — Marc, 52 ans, propriétaire de 3 gîtes en Provence
- Loue à l'année, gère tout seul
- A essayé TouchStay mais trouve ça cher et compliqué
- A besoin du multilingue (clients FR, UK, NL, DE)
- Déclencheur : voit le QR code d'un concurrent sur TripAdvisor

### Persona 3 — Agence de conciergerie (B2B, 20-100 propriétés)
- Gère des logements pour des propriétaires absents
- A besoin de marque blanche (son logo, ses couleurs)
- Budget : 200-500€/an par agence — ticket moyen élevé
- Canal d'acquisition : LinkedIn + groupes Facebook conciergerie

---

## Positionnement concurrentiel

| Critère | TouchStay | Hostfully | StayGuide (nous) |
|---------|-----------|-----------|-----------------|
| Prix | 99$/an | 300$/an | 79€ à vie |
| Offline | Non | Non | **Oui** |
| Setup | 1-2h | Demi-journée | **15 min** |
| Multilingue | Payant | Oui | Oui (MVP v2) |
| Marque blanche | Non | Oui | Plan Pro |
| Cible | Tous | Agences | Solo hosts + agences |

---

## Modèle de revenus

### Phase 1 — LTD (Semaines 1-8)
- **Early Bird** : 59€ — 50 places — "Fondateurs"
- **Standard LTD** : 79€ — jusqu'au lancement AppSumo
- **AppSumo** : 69$ — objectif 300-500 ventes = 20 000-35 000$

### Phase 2 — MRR (Mois 3+)
| Plan | Prix | Inclus |
|------|------|--------|
| Solo | 7€/mois | 1-3 propriétés, toutes les features de base |
| Pro | 19€/mois | 10 propriétés, analytics, multilingue, domaine custom |
| Agence | 49€/mois | Illimité, marque blanche, support prioritaire |

### Phase 3 — B2B Conciergerie
- Deal annuel : 200-500€/an/agence
- Objectif : 20 agences en an 1 = 4 000-10 000€ MRR additionnel

---

## Métriques cibles (J30)
- 50 LTD vendus minimum (objectif : 100)
- 500 visiteurs sur la landing page
- 10 bêta-testeurs actifs avec feedback
- 1 agence de conciergerie signée
