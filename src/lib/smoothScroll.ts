const MIN_DURATION = 500
const MAX_DURATION = 1100

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2)

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Animates the window scroll to `targetY` with an ease-in-out curve whose duration grows with
 * the distance. Any wheel, touch or key input from the user cancels it. Returns a cancel function.
 */
export function smoothScrollTo(targetY: number) {
  const startY = window.scrollY
  const maxY = document.documentElement.scrollHeight - window.innerHeight
  const distance = Math.min(Math.max(targetY, 0), maxY) - startY

  if (distance === 0 || prefersReducedMotion()) {
    window.scrollTo(0, startY + distance)
    return () => {}
  }

  const duration = Math.min(MAX_DURATION, Math.max(MIN_DURATION, Math.abs(distance) * 0.45))
  let frame = 0
  let startTime: number | null = null

  const cancel = () => {
    cancelAnimationFrame(frame)
    window.removeEventListener('wheel', cancel)
    window.removeEventListener('touchstart', cancel)
    window.removeEventListener('keydown', cancel)
  }

  const step = (now: number) => {
    startTime ??= now
    const progress = Math.min((now - startTime) / duration, 1)
    window.scrollTo(0, startY + distance * easeInOutCubic(progress))
    if (progress < 1) frame = requestAnimationFrame(step)
    else cancel()
  }

  window.addEventListener('wheel', cancel, { passive: true })
  window.addEventListener('touchstart', cancel, { passive: true })
  window.addEventListener('keydown', cancel)
  frame = requestAnimationFrame(step)
  return cancel
}

/** Document Y position of an element, minus the fixed header (the html `scroll-padding-top`). */
export function getScrollTargetY(element: HTMLElement) {
  const headerOffset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0
  return element.getBoundingClientRect().top + window.scrollY - headerOffset
}
