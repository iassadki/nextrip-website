import styles from './QrCodePlaceholder.module.css'

const SIZE = 25
const FINDER = 7

const CORNERS = [
  [0, 0],
  [SIZE - FINDER, 0],
  [0, SIZE - FINDER],
] as const

/** Position inside a corner's finder area (including its 1-module white separator), or null. */
function finderOffset(x: number, y: number) {
  for (const [cx, cy] of CORNERS) {
    const dx = x - cx
    const dy = y - cy
    if (dx >= -1 && dy >= -1 && dx <= FINDER && dy <= FINDER) return { dx, dy }
  }
  return null
}

/** Finder squares: a dark 7×7 ring with a 3×3 center. */
function isFinderModule(dx: number, dy: number) {
  const inSquare = dx >= 0 && dy >= 0 && dx < FINDER && dy < FINDER
  const ring = dx === 0 || dy === 0 || dx === FINDER - 1 || dy === FINDER - 1
  const center = dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4
  return inSquare && (ring || center)
}

/** Deterministic pseudo-random module pattern — built once, it never changes. */
function buildQrPath() {
  let seed = 7
  const random = () => {
    seed = (seed * 16807) % 2147483647
    return seed / 2147483647
  }

  let path = ''
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const finder = finderOffset(x, y)
      const filled = finder ? isFinderModule(finder.dx, finder.dy) : random() > 0.52
      if (filled) path += `M${x} ${y}h1v1h-1z`
    }
  }
  return path
}

const QR_PATH = buildQrPath()

/** Decorative, blurred stand-in for the store QR code until the app is published. */
export function QrCodePlaceholder({ label }: { label: string }) {
  return (
    <div className={styles.wrapper}>
      <svg className={styles.code} viewBox={`-2 -2 ${SIZE + 4} ${SIZE + 4}`} aria-hidden="true">
        <rect x="-2" y="-2" width={SIZE + 4} height={SIZE + 4} fill="#fff" />
        <path d={QR_PATH} fill="currentColor" shapeRendering="crispEdges" />
      </svg>
      <span className={styles.badge}>{label}</span>
    </div>
  )
}
