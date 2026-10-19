import type { ComponentPropsWithoutRef } from 'react'
import { cx } from '@/lib/cx'
import styles from './Card.module.css'

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  tone?: 'soft' | 'outline'
}

export function Card({ tone = 'soft', className, ...props }: CardProps) {
  return <div className={cx(styles.card, styles[tone], className)} {...props} />
}
