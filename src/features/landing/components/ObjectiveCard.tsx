import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/icons/Icon'
import type { Objective } from '@/data/content'
import styles from './ObjectiveCard.module.css'

export function ObjectiveCard({ objective }: { objective: Objective }) {
  return (
    <Card tone="soft" className={styles.card}>
      <Icon name={objective.icon} size={28} className={styles.icon} />
      <h3 className={styles.title}>{objective.title}</h3>
      <p className={styles.description}>{objective.description}</p>
    </Card>
  )
}
