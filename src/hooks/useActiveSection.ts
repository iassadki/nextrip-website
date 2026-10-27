import { useEffect, useState } from 'react'

/**
 * Returns the id of the section crossing the middle of the viewport, or null when none is.
 * Pass the route as `resetKey` so a result from the previous page is never reused.
 */
export function useActiveSection(sectionIds: readonly string[], resetKey?: unknown) {
  const [active, setActive] = useState<{ key: unknown; id: string | null }>({ key: resetKey, id: null })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const { id } = entry.target
          setActive((current) => {
            if (entry.isIntersecting) return { key: resetKey, id }
            return current.id === id ? { key: resetKey, id: null } : current
          })
        }
      },
      // A thin band around the vertical center of the viewport.
      { rootMargin: '-45% 0px -50% 0px' },
    )

    for (const id of sectionIds) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }
    return () => observer.disconnect()
  }, [sectionIds, resetKey])

  return active.key === resetKey ? active.id : null
}
