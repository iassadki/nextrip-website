import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { HERO, NAV_LINKS } from '@/data/content'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a href="#top" aria-label="Nextrip — retour en haut de page">
          <Logo />
        </a>
        <nav aria-label="Navigation principale" className={styles.nav}>
          <ul className={styles.links}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink href={HERO.secondaryCta.href} size="sm" className={styles.cta}>
          {HERO.secondaryCta.label}
        </ButtonLink>
      </Container>
    </header>
  )
}
