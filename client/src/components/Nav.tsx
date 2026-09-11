import { useEffect, useState, type MouseEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { portfolioData } from '../data/content'
import { parseHashPath, scrollToHash } from '../lib/scroll'
import { useSectionHash } from '../hooks/useSectionHash'
import { useTheme } from '../hooks/useTheme'

export function Nav() {
  const { nav, social } = portfolioData
  const location = useLocation()
  const activeId = useSectionHash()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, to: string) {
    setOpen(false)
    const { pathname, hash } = parseHashPath(to)
    if (pathname === location.pathname && (hash || to === '/')) {
      event.preventDefault()
      scrollToHash(hash || '#top')
      window.history.replaceState(null, '', hash ? `${pathname}${hash}` : pathname)
    }
  }

  function isActive(to: string) {
    const { hash } = parseHashPath(to)
    if (!hash) return location.pathname === '/' && !activeId
    return activeId === hash.slice(1)
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__pill">
        <nav className="nav__links" aria-label="Primary">
          {nav.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={isActive(link.to) ? 'is-active' : undefined}
              aria-current={isActive(link.to) ? 'page' : undefined}
              onClick={(e) => handleNavClick(e, link.to)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav__social">
          <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0z"
              />
            </svg>
          </a>
          <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.9 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"
              />
            </svg>
          </a>
        </div>

        <button
          className="nav__theme"
          type="button"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1zm0 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm7.5-2.5a1 1 0 1 1 0-2H21a1 1 0 1 1 0 2h-1.5zM4.5 12a1 1 0 0 1-1-1H2a1 1 0 1 1 0 2h1.5a1 1 0 0 1 1-1zm12.6 5.1a1 1 0 0 1 1.4 1.4l-1.06 1.06a1 1 0 1 1-1.42-1.42L17.1 17.1zM6.9 6.9a1 1 0 0 1-1.4-1.4L6.56 4.44A1 1 0 0 1 8 5.86L6.9 6.9zm10.2-2.46a1 1 0 0 1 1.42 1.42L17.46 6.9A1 1 0 1 1 16 5.5l1.1-1.06zM5.5 17.1l1.06 1.06a1 1 0 1 1-1.42 1.42L4.1 18.5A1 1 0 1 1 5.5 17.1zM12 17a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V18a1 1 0 0 1 1-1z"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M17.6 14.3A7.2 7.2 0 0 1 9.7 6.4a7.2 7.2 0 1 0 7.9 7.9z"
              />
            </svg>
          )}
        </button>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
          >
            {nav.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={isActive(link.to) ? 'is-active' : undefined}
                aria-current={isActive(link.to) ? 'page' : undefined}
                onClick={(e) => handleNavClick(e, link.to)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
