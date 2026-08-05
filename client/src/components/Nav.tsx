import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, profile } from '../data/content'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
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

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <a className="nav__brand" href="#top" aria-label="Home">
        <span className="nav__mark">BJ</span>
        <span className="nav__name">{profile.firstName}</span>
      </a>

      <nav className="nav__links" aria-label="Primary">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="nav__cta" href="#contact">
        Let’s talk
      </a>

      <button
        className="nav__burger"
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
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              Let’s talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
