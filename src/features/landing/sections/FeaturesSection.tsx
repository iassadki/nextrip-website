import { Section } from '@/components/ui/Section'
import { FEATURES, SECTION_IDS } from '@/data/content'
import { FeatureRow } from '../components/FeatureRow'
import styles from './FeaturesSection.module.css'

export function FeaturesSection() {
  return (
    <Section id={SECTION_IDS.features} title={FEATURES.title} titleStyle="caps">
      <div className={styles.list}>
        {FEATURES.items.map((feature, index) => (
          <FeatureRow key={feature.id} feature={feature} reversed={index % 2 === 1} />
        ))}
      </div>
    </Section>
  )
}
