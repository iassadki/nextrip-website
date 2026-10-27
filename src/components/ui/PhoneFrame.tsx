import { cx } from '@/lib/cx'
import styles from './PhoneFrame.module.css'

interface PhoneFrameProps {
  /** App screenshot, ideally in iPhone proportions (~9:19.5). */
  src: string
  alt: string
  className?: string
}

/** iPhone mockup (titanium frame, bezel, Dynamic Island, side buttons) around an app screenshot. */
export function PhoneFrame({ src, alt, className }: PhoneFrameProps) {
  return (
    <figure className={cx(styles.phone, className)}>
      <div className={styles.device}>
        <span className={cx(styles.button, styles.action)} aria-hidden="true" />
        <span className={cx(styles.button, styles.volumeUp)} aria-hidden="true" />
        <span className={cx(styles.button, styles.volumeDown)} aria-hidden="true" />
        <span className={cx(styles.button, styles.power)} aria-hidden="true" />

        <div className={styles.screen}>
          <img src={src} alt={alt} loading="lazy" decoding="async" className={styles.image} />
          <span className={styles.island} aria-hidden="true" />
        </div>
      </div>
    </figure>
  )
}
