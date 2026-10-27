import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import heroImage from '@/assets/images/hero-wing.webp'
import { HERO } from '@/data/content'
import styles from './HeroSection.module.css'

export function HeroSection() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      {/* Decorative: the heading carries the message. High priority as it is the LCP element. */}
      <img src={heroImage} alt="" className={styles.background} fetchPriority="high" decoding="async" />
      <Container className={styles.content}>
        <h1 id="hero-title" className={styles.title}>
          {HERO.titleStart} <span className={styles.highlight}>{HERO.titleHighlight}</span>
        </h1>
        <p className={styles.tagline}>{HERO.tagline}</p>
        <div className={styles.actions}>
          <ButtonLink to={HERO.primaryCta.to}>{HERO.primaryCta.label}</ButtonLink>
          <ButtonLink to={HERO.secondaryCta.to} variant="secondary">
            {HERO.secondaryCta.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
