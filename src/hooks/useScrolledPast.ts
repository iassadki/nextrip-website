import { useEffect, useState } from 'react'

/** True once the page is scrolled more than `offset` pixels. Only re-renders when the boolean flips. */
export function useScrolledPast(offset: number) {
  const [isPast, setIsPast] = useState(() => typeof window !== 'undefined' && window.scrollY > offset)

  useEffect(() => {
    const update = () => setIsPast(window.scrollY > offset)
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [offset])

  return isPast
}
