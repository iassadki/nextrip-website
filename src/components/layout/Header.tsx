import { useEffect, useId, useState } from 'react'
import { cx } from '@/lib/cx'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Logo } from '@/components/ui/Logo'
import { HERO, NAV_LINKS } from '@/data/content'
import styles from './Header.module.css'

/** Floating pill navbar, with a dropdown menu below 768px. */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <a href="#top" className={styles.brand} aria-label="Nextrip — retour en haut de page" onClick={closeMenu}>
          <Logo />
        </a>

        <nav aria-label="Navigation principale" className={styles.nav}>
          <NavLinks />
        </nav>

        <ButtonLink href={HERO.secondaryCta.href} className={styles.cta}>
          {HERO.secondaryCta.label}
        </ButtonLink>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={cx(styles.burger, isMenuOpen && styles.burgerOpen)} aria-hidden="true" />
        </button>
      </div>

      <div id={menuId} className={cx(styles.menu, isMenuOpen && styles.menuOpen)} hidden={!isMenuOpen}>
        <nav aria-label="Navigation mobile">
          <NavLinks onNavigate={closeMenu} />
        </nav>
        <ButtonLink href={HERO.secondaryCta.href} onClick={closeMenu}>
          {HERO.secondaryCta.label}
        </ButtonLink>
      </div>
    </header>
  )
}

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <ul className={styles.links}>
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <a href={link.href} className={styles.link} onClick={onNavigate}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
