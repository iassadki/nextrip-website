import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { DOWNLOAD, SECTION_IDS } from '@/data/content'
import { QrCodePlaceholder } from '../components/QrCodePlaceholder'
import styles from './DownloadSection.module.css'

export function DownloadSection() {
  return (
    <Section id={SECTION_IDS.download} title={DOWNLOAD.title} titleStyle="caps" tone="warm">
      <Card tone="outline" className={styles.card}>
        <div className={styles.text}>
          <h3 className={styles.heading}>{DOWNLOAD.heading}</h3>
          <p className={styles.description}>{DOWNLOAD.description}</p>
          <ul className={styles.platforms} aria-label="Plateformes">
            {DOWNLOAD.platforms.map((platform) => (
              <li key={platform}>{platform}</li>
            ))}
          </ul>
        </div>
        <QrCodePlaceholder label={DOWNLOAD.badge} />
      </Card>
    </Section>
  )
}
