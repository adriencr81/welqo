import type { Section } from '@/lib/db-types'
import WifiSection from './sections/WifiSection'
import CheckinSection from './sections/CheckinSection'
import CheckoutSection from './sections/CheckoutSection'
import RulesSection from './sections/RulesSection'
import PlacesSection from './sections/PlacesSection'
import AppliancesSection from './sections/AppliancesSection'
import EmergencySection from './sections/EmergencySection'
import CustomSection from './sections/CustomSection'

interface Props {
  section: Section
}

function cast<T>(c: Record<string, unknown>): T {
  return c as unknown as T
}

export default async function SectionRenderer({ section }: Props) {
  const c = section.content

  switch (section.type) {
    case 'wifi':
      return <WifiSection content={cast<Parameters<typeof WifiSection>[0]['content']>(c)} />
    case 'checkin':
      return <CheckinSection content={cast<Parameters<typeof CheckinSection>[0]['content']>(c)} />
    case 'checkout':
      return <CheckoutSection content={cast<Parameters<typeof CheckoutSection>[0]['content']>(c)} />
    case 'rules':
      return <RulesSection content={cast<Parameters<typeof RulesSection>[0]['content']>(c)} />
    case 'places':
      return <PlacesSection content={cast<Parameters<typeof PlacesSection>[0]['content']>(c)} />
    case 'appliances':
      return <AppliancesSection content={cast<Parameters<typeof AppliancesSection>[0]['content']>(c)} />
    case 'emergency':
      return <EmergencySection content={cast<Parameters<typeof EmergencySection>[0]['content']>(c)} />
    case 'custom':
      return <CustomSection content={cast<Parameters<typeof CustomSection>[0]['content']>(c)} />
    default:
      return null
  }
}
