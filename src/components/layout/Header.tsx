import { useEffect, useId, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { ROUTES } from '@/app/routes'
import { cx } from '@/lib/cx'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrolledPast } from '@/hooks/useScrolledPast'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Logo } from '@/components/ui/Logo'
import { HERO, NAV_LINKS } from '@/data/content'
import styles from './Header.module.css'

const NAV_SECTION_IDS = NAV_LINKS.map((link) => link.sectionId)

/**
 * Floating pill navbar, with a dropdown menu below 768px.
 * It turns solid once the page scrolls and highlights the link of the section in view.
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()
  const { pathname } = useLocation()
  const activeSectionId = useActiveSection(NAV_SECTION_IDS, pathname)
  const isScrolled = useScrolledPast(24)

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
      <div className={cx(styles.bar, isScrolled && styles.barScrolled)}>
        <Link to={ROUTES.home} className={styles.brand} aria-label="Nextrip — accueil" onClick={closeMenu}>
          <Logo />
        </Link>

        <nav aria-label="Navigation principale" className={styles.nav}>
          <NavLinks activeSectionId={activeSectionId} />
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
          <NavLinks activeSectionId={activeSectionId} onNavigate={closeMenu} />
        </nav>
        <ButtonLink href={HERO.secondaryCta.href} onClick={closeMenu}>
          {HERO.secondaryCta.label}
        </ButtonLink>
      </div>
    </header>
  )
}

interface NavLinksProps {
  activeSectionId: string | null
  onNavigate?: () => void
}

function NavLinks({ activeSectionId, onNavigate }: NavLinksProps) {
  return (
    <ul className={styles.links}>
      {NAV_LINKS.map((link) => (
        <li key={link.to}>
          <Link
            to={link.to}
            className={cx(styles.link, link.sectionId === activeSectionId && styles.linkActive)}
            aria-current={link.sectionId === activeSectionId ? 'location' : undefined}
            onClick={onNavigate}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
