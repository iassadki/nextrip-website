import { cx } from '@/lib/cx'
import { PhoneFrame } from '@/components/ui/PhoneFrame'
import type { Feature } from '@/data/content'
import { AppScreen } from './AppScreen'
import styles from './FeatureRow.module.css'

interface FeatureRowProps {
  feature: Feature
  /** Puts the phone on the right on wide screens to create a zig-zag layout. */
  reversed?: boolean
}

export function FeatureRow({ feature, reversed = false }: FeatureRowProps) {
  return (
    <article className={cx(styles.row, reversed && styles.reversed)}>
      <PhoneFrame className={styles.phone}>
        <AppScreen screen={feature.screen} />
      </PhoneFrame>
      <div className={styles.text}>
        <h3 className={styles.title}>{feature.title}</h3>
        <p className={styles.description}>{feature.description}</p>
      </div>
    </article>
  )
}
