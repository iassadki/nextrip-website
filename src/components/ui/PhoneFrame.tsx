import type { ReactNode } from 'react'
import { cx } from '@/lib/cx'
import styles from './PhoneFrame.module.css'

interface PhoneFrameProps {
  /** Screenshot of the app. When omitted, `children` is rendered as the screen. */
  src?: string
  alt?: string
  children?: ReactNode
  className?: string
}

/** Smartphone frame used to showcase app screens or screenshots. */
export function PhoneFrame({ src, alt = '', children, className }: PhoneFrameProps) {
  return (
    <figure className={cx(styles.phone, className)}>
      <div className={styles.screen}>
        {src ? <img src={src} alt={alt} loading="lazy" decoding="async" className={styles.image} /> : children}
      </div>
    </figure>
  )
}
