import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { getScrollTargetY, smoothScrollTo } from '@/lib/smoothScroll'

/**
 * Client-side navigation does not scroll by itself. Within the same page (navbar, table of
 * contents, logo), glide to the `#hash` target or to the top; when arriving on another page,
 * jump there instantly. Depending on `key` makes a second click on the same link scroll again.
 */
export function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const previousPathname = useRef<string | null>(null)

  useEffect(() => {
    const isSamePage = previousPathname.current === pathname
    previousPathname.current = pathname

    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    const targetY = target ? getScrollTargetY(target) : 0

    if (!isSamePage) {
      window.scrollTo(0, targetY)
      return
    }
    return smoothScrollTo(targetY)
  }, [pathname, hash, key])

  return null
}
