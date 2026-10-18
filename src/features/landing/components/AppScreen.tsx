import { cx } from '@/lib/cx'
import { LogoMark } from '@/components/icons/LogoMark'
import type { FeatureScreen } from '@/data/content'
import styles from './AppScreen.module.css'

/**
 * Lightweight, illustrative recreations of the Nextrip app screens.
 * Swap them for real screenshots via <PhoneFrame src="…" /> whenever they are exported.
 */
export function AppScreen({ screen }: { screen: FeatureScreen }) {
  return (
    <div className={styles.screen} aria-hidden="true">
      <StatusBar />
      {screen === 'trips' ? <TripsScreen /> : <TripDetailScreen activeTab={screen === 'organize' ? 'trip' : 'activities'} />}
    </div>
  )
}

function StatusBar() {
  return (
    <div className={styles.statusBar}>
      <span>09:41</span>
      <span className={styles.notch} />
      <span className={styles.battery} />
    </div>
  )
}

function CityPhoto({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cx(styles.photo, compact && styles.photoCompact)}>
      <svg className={styles.tower} viewBox="0 0 40 100">
        <path d="M20 0 L23 30 L30 70 L38 100 H28 Q20 84 12 100 H2 L10 70 L17 30 Z" />
      </svg>
      <div className={styles.photoLabel}>
        <strong>Paris</strong>
        <span>21 juillet – 6 août</span>
      </div>
    </div>
  )
}

function TripsScreen() {
  return (
    <>
      <div className={styles.body}>
        <LogoMark className={styles.miniLogo} />
        <p className={styles.heading}>Mes Voyages</p>
        <CityPhoto />
      </div>
      <nav className={styles.tabBar}>
        {['Trips', 'Explorer', 'Favoris', 'Profil'].map((label, index) => (
          <span key={label} className={cx(styles.tab, index === 0 && styles.tabActive)}>
            <i />
            {label}
          </span>
        ))}
      </nav>
    </>
  )
}

const TRIP_SECTIONS = ['Notes', 'Itinéraire', 'Lieux enregistrés']
const ACTIVITIES = ['Louvre Museum', 'Tuileries Garden', 'Saint-Germain']
const FILTERS = ['Tous', 'Musées', 'Parcs', 'Food']

function TripDetailScreen({ activeTab }: { activeTab: 'trip' | 'activities' }) {
  return (
    <div className={styles.body}>
      <p className={styles.search}>Voyage en cours</p>
      <CityPhoto compact />
      <div className={styles.segmented}>
        <span className={cx(activeTab === 'trip' && styles.segmentActive)}>Voyage</span>
        <span className={cx(activeTab === 'activities' && styles.segmentActive)}>Activités</span>
      </div>

      {activeTab === 'trip' ? (
        <ul className={styles.stack}>
          {TRIP_SECTIONS.map((label) => (
            <li key={label} className={styles.primaryRow}>
              <strong>{label}</strong>
              <span>Accéder à la section</span>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <div className={styles.chips}>
            {FILTERS.map((label, index) => (
              <span key={label} className={cx(index === 0 && styles.chipActive)}>
                {label}
              </span>
            ))}
          </div>
          <ul className={styles.stack}>
            {ACTIVITIES.map((label) => (
              <li key={label} className={styles.activityRow}>
                <span className={styles.thumb} />
                <span className={styles.activityText}>
                  <strong>{label}</strong>
                  <span>Paris · 1,2 km</span>
                </span>
                <span className={styles.add}>+</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
