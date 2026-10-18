import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { InstagramIcon, TikTokIcon } from '@/components/icons/SocialIcons'
import { CONTACT, FOOTER } from '@/data/content'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.grid}>
        <Card tone="outline" className={styles.brand}>
          <div className={styles.brandRow}>
            <Logo withWordmark={false} size="lg" />
            <p className={styles.slogan}>
              {FOOTER.slogan[0]}
              <br />
              {FOOTER.slogan[1]}
            </p>
          </div>
          <p className={styles.copyright}>{FOOTER.copyright}</p>
        </Card>

        <Card tone="outline" className={styles.contact}>
          <h2 className={styles.heading}>Contact</h2>
          <a href={`mailto:${CONTACT.email}`} className={styles.email}>
            {CONTACT.email}
          </a>
          <div className={styles.socials}>
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram de Nextrip" className={styles.instagram}>
              <InstagramIcon />
            </a>
            <a href={CONTACT.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok de Nextrip" className={styles.tiktok}>
              <TikTokIcon />
            </a>
          </div>
          <p className={styles.handle}>{CONTACT.handle}</p>
        </Card>

        <Card tone="outline" className={styles.legal}>
          <nav aria-label="Informations légales">
            <ul>
              {FOOTER.legalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </Card>

        <p className={styles.mobileCopyright}>{FOOTER.copyright}</p>
      </Container>
    </footer>
  )
}
