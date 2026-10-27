import type { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router'
import { cx } from '@/lib/cx'
import styles from './ButtonLink.module.css'

type Variant = 'primary' | 'secondary'
type Size = 'sm' | 'md'

interface ButtonLinkProps extends ComponentPropsWithoutRef<'a'> {
  /** Internal route (e.g. "/#presentation"): rendered as a router link so in-app scrolling stays smooth. */
  to?: string
  variant?: Variant
  size?: Size
}

export function ButtonLink({ to, variant = 'primary', size = 'md', className, ...props }: ButtonLinkProps) {
  const classes = cx(styles.button, styles[variant], styles[size], className)

  return to ? <Link to={to} className={classes} {...props} /> : <a className={classes} {...props} />
}
