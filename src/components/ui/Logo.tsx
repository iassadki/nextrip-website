import { cx } from '@/lib/cx'
import { LogoMark } from '@/components/icons/LogoMark'
import styles from './Logo.module.css'

interface LogoProps {
  withWordmark?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Logo({ withWordmark = true, size = 'md', className }: LogoProps) {
  return (
    <span className={cx(styles.logo, styles[size], className)}>
      <LogoMark className={styles.mark} />
      {withWordmark ? <span className={styles.wordmark}>Nextrip</span> : null}
    </span>
  )
}
