import { LEGAL_NOTICE } from '@/data/legal/legalNotice'
import { LegalDocument } from './components/LegalDocument'

export function LegalNoticePage() {
  return (
    <>
      <title>Mentions légales et CGU — Nextrip</title>
      <LegalDocument content={LEGAL_NOTICE} />
    </>
  )
}
