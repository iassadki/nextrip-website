import { Section } from '@/components/ui/Section'
import { OBJECTIVES, SECTION_IDS } from '@/data/content'
import { ObjectiveCard } from '../components/ObjectiveCard'
import styles from './ObjectivesSection.module.css'

export function ObjectivesSection() {
  return (
    <Section id={SECTION_IDS.objectives} title={OBJECTIVES.title} titleStyle="caps">
      <ul className={styles.grid}>
        {OBJECTIVES.items.map((objective) => (
          <li key={objective.title}>
            <ObjectiveCard objective={objective} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
