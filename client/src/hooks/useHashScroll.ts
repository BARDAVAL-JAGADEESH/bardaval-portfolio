import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToHash } from '../lib/scroll'

/** Scroll to hash targets after route changes (e.g. /#projects). */
export function useHashScroll() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      requestAnimationFrame(() => {
        scrollToHash(location.hash, reduce ? 'auto' : 'smooth')
      })
      return
    }

    if (location.pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [location.pathname, location.hash, location.key])
}
