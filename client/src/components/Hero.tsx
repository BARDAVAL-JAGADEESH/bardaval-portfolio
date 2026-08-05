import { motion, useReducedMotion } from 'framer-motion'
import { profile, typingLines } from '../data/content'
import { useTypewriter } from '../hooks/useTypewriter'

export function Hero() {
  const typed = useTypewriter(typingLines)
  const reduce = useReducedMotion()

  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero__atmosphere" aria-hidden="true">
        <div className="hero__mesh" />
        <div className="hero__orb hero__orb--a" />
        <div className="hero__orb hero__orb--b" />
        <div className="hero__grid" />
        <motion.div
          className="hero__device"
          initial={reduce ? false : { opacity: 0, y: 40, rotate: -6 }}
          animate={{ opacity: 1, y: 0, rotate: -8 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="hero__device-screen">
            <span />
            <span />
            <span />
            <span />
          </div>
        </motion.div>
      </div>

      <div className="hero__content">
        <motion.p
          className="hero__eyebrow"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {profile.location} · {profile.company}
        </motion.p>

        <motion.h1
          className="hero__brand"
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          {profile.firstName}
          <span className="hero__brand-last">{profile.lastName}</span>
        </motion.h1>

        <motion.p
          className="hero__type"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          aria-live="polite"
        >
          <span className="hero__type-text">{typed}</span>
          <span className="hero__caret" aria-hidden="true" />
        </motion.p>

        <motion.p
          className="hero__lede"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          {profile.summary}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <a className="btn btn--primary" href="#projects">
            View projects
          </a>
          <a className="btn btn--ghost" href="#contact">
            Contact me
          </a>
        </motion.div>
      </div>

      <motion.a
        className="hero__scroll"
        href="#about"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        Scroll
        <span className="hero__scroll-line" />
      </motion.a>
    </section>
  )
}
