import type { ComponentPropsWithoutRef } from 'react'
import { cx } from '@/lib/cx'
import styles from './ButtonLink.module.css'

type Variant = 'primary' | 'secondary'
type Size = 'sm' | 'md'

interface ButtonLinkProps extends ComponentPropsWithoutRef<'a'> {
  variant?: Variant
  size?: Size
}

export function ButtonLink({ variant = 'primary', size = 'md', className, ...props }: ButtonLinkProps) {
  return <a className={cx(styles.button, styles[variant], styles[size], className)} {...props} />
}
