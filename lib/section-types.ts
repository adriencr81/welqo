export type SectionType =
  | 'wifi'
  | 'checkin'
  | 'checkout'
  | 'appliances'
  | 'rules'
  | 'places'
  | 'transport'
  | 'emergency'
  | 'custom'

export const SECTION_TYPES: {
  type: SectionType
  label: string
  icon: string
  description: string
  defaultTitle: string
  defaultContent: Record<string, unknown>
}[] = [
  {
    type: 'wifi',
    label: 'Wi-Fi',
    icon: '📶',
    description: 'Réseau et mot de passe Wi-Fi',
    defaultTitle: 'Wi-Fi',
    defaultContent: { network: '', password: '', notes: '' },
  },
  {
    type: 'checkin',
    label: 'Arrivée',
    icon: '🔑',
    description: "Code porte, parking, instructions d'arrivée",
    defaultTitle: 'Arrivée',
    defaultContent: { arrival_time: '', code: '', parking: '', instructions: '' },
  },
  {
    type: 'checkout',
    label: 'Départ',
    icon: '🧳',
    description: 'Heure et instructions de départ',
    defaultTitle: 'Départ',
    defaultContent: { departure_time: '', instructions: '' },
  },
  {
    type: 'rules',
    label: 'Règles',
    icon: '📋',
    description: 'Règles de la maison',
    defaultTitle: 'Règles de la maison',
    defaultContent: { items: [] },
  },
  {
    type: 'places',
    label: 'Bonnes adresses',
    icon: '📍',
    description: "Restaurants, commerces, points d'intérêt",
    defaultTitle: 'Bonnes adresses',
    defaultContent: { items: [] },
  },
  {
    type: 'appliances',
    label: 'Équipements',
    icon: '🏠',
    description: "Mode d'emploi des équipements",
    defaultTitle: 'Équipements',
    defaultContent: { items: [] },
  },
  {
    type: 'emergency',
    label: 'Urgences',
    icon: '🚨',
    description: "Numéros d'urgence et contacts importants",
    defaultTitle: 'Numéros utiles',
    defaultContent: { items: [] },
  },
  {
    type: 'custom',
    label: 'Section libre',
    icon: '✏️',
    description: 'Texte libre en Markdown',
    defaultTitle: 'Informations',
    defaultContent: { body: '' },
  },
]

export const SECTION_ICONS: Record<SectionType, string> = {
  wifi: '📶',
  checkin: '🔑',
  checkout: '🧳',
  rules: '📋',
  places: '📍',
  appliances: '🏠',
  transport: '🚌',
  emergency: '🚨',
  custom: '✏️',
}
