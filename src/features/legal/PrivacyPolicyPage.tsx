import { PRIVACY_POLICY } from '@/data/legal/privacyPolicy'
import { LegalDocument } from './components/LegalDocument'

export function PrivacyPolicyPage() {
  return (
    <>
      <title>Politique de confidentialité — Nextrip</title>
      <LegalDocument content={PRIVACY_POLICY} />
    </>
  )
}
