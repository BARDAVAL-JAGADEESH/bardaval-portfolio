import { useEffect, useState, type MouseEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { portfolioData } from '../data/content'
import { parseHashPath, scrollToHash } from '../lib/scroll'

export function Nav() {
  const { personal, nav, social } = portfolioData
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!onHome) {
      setActive('')
      return
    }

    const ids = nav
      .map((l) => parseHashPath(l.to).hash.replace('#', ''))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.35, 0.6] },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [nav, onHome, location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, to: string) {
    setOpen(false)
    const { pathname, hash } = parseHashPath(to)
    if (pathname === location.pathname && hash) {
      event.preventDefault()
      scrollToHash(hash)
      window.history.replaceState(null, '', `${pathname}${hash}`)
    }
  }

  return (
    <header className={`nav ${scrolled || !onHome ? 'nav--solid' : ''}`}>
      <Link className="nav__brand" to="/" aria-label="Home">
        <span className="nav__mark">{personal.initials}</span>
        <span className="nav__name">{personal.firstName}</span>
      </Link>

      <nav className="nav__links" aria-label="Primary">
        {nav.map((link) => {
          const { hash } = parseHashPath(link.to)
          const isActive = onHome && active === hash
          return (
            <Link
              key={link.to}
              to={link.to}
              className={isActive ? 'is-active' : undefined}
              onClick={(e) => handleNavClick(e, link.to)}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>

      <a
        className="nav__cta"
        href={social.github}
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

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

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            {nav.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
              >
                {link.label}
              </Link>
            ))}
            <a href={social.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
