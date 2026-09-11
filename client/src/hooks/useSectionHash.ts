import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const SECTION_IDS = ['about', 'experience', 'projects', 'skills', 'contact'] as const

/** Keep the URL hash in sync with the section in view. */
export function useSectionHash() {
  const location = useLocation()
  const [activeId, setActiveId] = useState(() =>
    location.hash ? location.hash.slice(1) : '',
  )

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveId('')
      return
    }

    let ticking = false

    const sync = () => {
      ticking = false
      const offset = window.scrollY + 140

      let current = ''
      if (window.scrollY >= 100) {
        for (const id of SECTION_IDS) {
          const el = document.getElementById(id)
          if (!el) continue
          if (el.offsetTop <= offset) current = id
        }
      }

      setActiveId((prev) => (prev === current ? prev : current))

      const nextHash = current ? `#${current}` : ''
      if (window.location.hash !== nextHash) {
        window.history.replaceState(
          null,
          '',
          nextHash ? `${location.pathname}${nextHash}` : location.pathname,
        )
      }
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(sync)
    }

    sync()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  return activeId
}
