import { useEffect } from 'react'
import { useLocation } from 'react-router'

/**
 * Client-side navigation does not scroll by itself: jump to the `#hash` target
 * when there is one (e.g. "/#objectifs" from a legal page), otherwise to the top.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
