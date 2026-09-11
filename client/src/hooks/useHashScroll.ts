import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToHash } from '../lib/scroll'

type LocationState = { scrollTo?: string } | null

/** Scroll to a section on in-app navigation. Refresh stays at top. */
export function useHashScroll() {
  const location = useLocation()
  const previousKey = useRef(location.key)

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior: ScrollBehavior = reduce ? 'auto' : 'smooth'
    const keyChanged = previousKey.current !== location.key
    previousKey.current = location.key

    const state = location.state as LocationState
    const target = state?.scrollTo || location.hash.replace('#', '')

    // Initial mount / refresh
    if (!keyChanged) {
      const nav = performance.getEntriesByType(
        'navigation',
      )[0] as PerformanceNavigationTiming | undefined
      const isReload = nav?.type === 'reload'

      if (isReload || !target) {
        window.scrollTo({ top: 0, behavior: 'auto' })
        return
      }

      // Shared / typed link like /#contact — jump once on first load
      const frame = window.requestAnimationFrame(() => {
        scrollToHash(target, 'auto')
      })
      return () => window.cancelAnimationFrame(frame)
    }

    if (target) {
      const frame = window.requestAnimationFrame(() => {
        scrollToHash(target, behavior)
      })
      return () => window.cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname, location.hash, location.key, location.state])
}
