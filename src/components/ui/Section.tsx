import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cx } from '@/lib/cx'
import { Container } from './Container'
import styles from './Section.module.css'

type Tone = 'default' | 'warm'

interface SectionProps extends Omit<ComponentPropsWithoutRef<'section'>, 'title'> {
  title?: ReactNode
  /** Visual treatment of the heading: `default` sentence case, `caps` uppercase. */
  titleStyle?: 'default' | 'caps'
  titleAlign?: 'center' | 'start'
  tone?: Tone
}

/** Page section with consistent vertical rhythm, background tone and heading. */
export function Section({
  title,
  titleStyle = 'default',
  titleAlign = 'center',
  tone = 'default',
  className,
  children,
  ...props
}: SectionProps) {
  const headingId = props.id ? `${props.id}-title` : undefined

  return (
    <section
      aria-labelledby={title ? headingId : undefined}
      className={cx(styles.section, tone === 'warm' && styles.warm, className)}
      {...props}
    >
      <Container>
        {title ? (
          <h2 id={headingId} className={cx(styles.title, titleStyle === 'caps' && styles.caps, titleAlign === 'start' && styles.start)}>
            {title}
          </h2>
        ) : null}
        {children}
      </Container>
    </section>
  )
}
