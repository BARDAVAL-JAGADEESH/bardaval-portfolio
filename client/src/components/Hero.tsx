import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { portfolioData } from '../data/content'
import { MagneticButton } from './MagneticButton'
import { scrollToHash } from '../lib/scroll'

export function Hero() {
  const { hero, personal, social } = portfolioData
  const reduce = useReducedMotion()

  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero__atmosphere" aria-hidden="true">
        <div className="hero__glow" />
        <div className="hero__grid" />
      </div>

      <div className="hero__layout hero__layout--solo">
        <div className="hero__copy">
          <motion.p
            className="hero__eyebrow"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            {personal.location}
          </motion.p>

          <motion.h1
            className="hero__name"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {personal.name}
          </motion.h1>

          <motion.p
            className="hero__headline"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
          >
            {personal.headline}
          </motion.p>

          <motion.p
            className="hero__lede"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {personal.summary}
          </motion.p>

          <motion.ul
            className="hero__tags"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.4 }}
          >
            {hero.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </motion.ul>

          <motion.div
            className="hero__actions"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45 }}
          >
            <MagneticButton className="btn--primary" to={hero.primaryCta.to}>
              {hero.primaryCta.label}
            </MagneticButton>
            <MagneticButton className="btn--ghost" to={hero.secondaryCta.to}>
              {hero.secondaryCta.label}
            </MagneticButton>
            <a className="btn btn--ghost" href={social.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </motion.div>
        </div>
      </div>

      <Link
        className="hero__scroll"
        to="/#work"
        onClick={(e) => {
          e.preventDefault()
          scrollToHash('#work')
          window.history.replaceState(null, '', '/#work')
        }}
      >
        {hero.scrollLabel}
        <span className="hero__scroll-line" />
      </Link>
    </section>
  )
}
