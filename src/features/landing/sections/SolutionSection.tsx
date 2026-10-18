import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { LogoMark } from '@/components/icons/LogoMark'
import { SOLUTION } from '@/data/content'
import styles from './SolutionSection.module.css'

export function SolutionSection() {
  return (
    <Section title={SOLUTION.title} id="solution">
      <div className={styles.layout}>
        <Card className={styles.visual}>
          <LogoMark className={styles.mark} />
        </Card>
        <Card className={styles.listCard}>
          <ul className={styles.list}>
            {SOLUTION.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.conclusion}>{SOLUTION.conclusion}</p>
        </Card>
      </div>
    </Section>
  )
}
