import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import { HERO } from '@/data/content'
import styles from './HeroSection.module.css'

export function HeroSection() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <WingIllustration />
      <Container className={styles.content}>
        <h1 id="hero-title" className={styles.title}>
          {HERO.titleStart} <span className={styles.highlight}>{HERO.titleHighlight}</span>
        </h1>
        <p className={styles.tagline}>{HERO.tagline}</p>
        <div className={styles.actions}>
          <ButtonLink href={HERO.primaryCta.href}>{HERO.primaryCta.label}</ButtonLink>
          <ButtonLink href={HERO.secondaryCta.href} variant="secondary">
            {HERO.secondaryCta.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}

/** Airplane wing silhouette over a sunset sky — stands in for the hero photo. */
function WingIllustration() {
  return (
    <svg className={styles.wing} viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="hero-wing" x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0" stopColor="#b98a8f" stopOpacity="0.55" />
          <stop offset="1" stopColor="#6e5059" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <circle cx="300" cy="470" r="160" fill="#fff1d6" opacity="0.45" />
      <path d="M520 0 C680 80 900 180 1200 260 V0 Z" fill="url(#hero-wing)" />
      <path d="M520 0 C680 80 900 180 1200 260 V284 C900 205 660 100 480 0 Z" fill="#6e5059" opacity="0.35" />
    </svg>
  )
}
