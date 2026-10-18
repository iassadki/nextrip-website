import { Section } from '@/components/ui/Section'
import { PROBLEM } from '@/data/content'
import { ScatteredApps } from '../components/ScatteredApps'
import styles from './ProblemSection.module.css'

export function ProblemSection() {
  return (
    <Section title={PROBLEM.title} titleAlign="start" id="probleme">
      <div className={styles.layout}>
        <div className={styles.text}>
          {PROBLEM.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ScatteredApps apps={PROBLEM.scatteredApps} />
      </div>
    </Section>
  )
}
