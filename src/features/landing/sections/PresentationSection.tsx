import { Section } from '@/components/ui/Section'
import { PRESENTATION, SECTION_IDS } from '@/data/content'
import styles from './PresentationSection.module.css'

export function PresentationSection() {
  return (
    <Section id={SECTION_IDS.presentation} title={PRESENTATION.title} tone="warm">
      <div className={styles.body}>
        <p>{PRESENTATION.intro}</p>
        <p className={styles.observation}>
          {PRESENTATION.observationLead}
          <br />
          <em>{PRESENTATION.observation}</em>
        </p>
      </div>
    </Section>
  )
}
