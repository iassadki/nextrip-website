import type { CSSProperties } from 'react'
import styles from './ScatteredApps.module.css'

interface ScatteredAppsProps {
  apps: readonly string[]
}

/**
 * Illustration of the "too many apps" problem: app tiles orbiting a single phone.
 * Purely decorative — the problem is already stated in the surrounding text.
 */
export function ScatteredApps({ apps }: ScatteredAppsProps) {
  return (
    <div className={styles.board} aria-hidden="true">
      <div className={styles.phone}>
        <span>Une application pour tout organiser</span>
      </div>
      <ul className={styles.apps}>
        {apps.map((app, index) => (
          <li
            key={app}
            className={styles.app}
            style={{ '--angle': `${(360 / apps.length) * index}deg` } as CSSProperties}
          >
            <span className={styles.tile}>{app.slice(0, 1)}</span>
            <span className={styles.name}>{app}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
