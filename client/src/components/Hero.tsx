import { motion, useReducedMotion } from 'framer-motion'
import { portfolioData } from '../data/content'
import { MagneticButton } from './MagneticButton'
import profilePhoto from '../assets/profile.jpg'

const ease = [0.22, 1, 0.36, 1] as const
const bioColors = ['#a3a3a3', '#b6f04a', '#ffffff', '#8fd63a', '#c4c4c4']

export function Hero() {
  const { hero, personal } = portfolioData
  const reduce = useReducedMotion()
  const nameLines = [personal.firstName, personal.lastName]
  const bioWords = hero.bio.split(' ')

  const stagger = 0.18
  const hold = 2.2
  const fadeOut = 0.55
  const cycle = bioWords.length * stagger + hold + fadeOut

  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero__shell">
        <div className="hero__main">
          <div className="hero__copy">
            <motion.p
              className="hero__headline"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              {personal.headline}
            </motion.p>

            <h1 className="hero__name" aria-label={personal.name}>
              {nameLines.map((line, i) => (
                <span className="hero__name-line" key={line}>
                  <motion.span
                    className="hero__name-text"
                    initial={reduce ? false : { y: '110%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      duration: 0.85,
                      ease,
                      delay: 0.12 + i * 0.12,
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <p className="hero__bio" aria-label={hero.bio}>
              {bioWords.map((word, i) => {
                const appear = (i * stagger) / cycle
                const shown = (bioWords.length * stagger + hold) / cycle
                const palette = [
                  bioColors[i % bioColors.length],
                  bioColors[(i + 1) % bioColors.length],
                  bioColors[(i + 2) % bioColors.length],
                  bioColors[(i + 3) % bioColors.length],
                  bioColors[i % bioColors.length],
                ]

                if (reduce) {
                  return (
                    <span className="hero__bio-word" key={`${word}-${i}`}>
                      {word}
                    </span>
                  )
                }

                return (
                  <motion.span
                    className="hero__bio-word"
                    key={`${word}-${i}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{
                      opacity: [0, 0, 1, 1, 0],
                      y: [12, 12, 0, 0, 8],
                      color: palette,
                    }}
                    transition={{
                      opacity: {
                        duration: cycle,
                        times: [0, Math.max(appear - 0.001, 0), appear + 0.04, shown, 1],
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                      y: {
                        duration: cycle,
                        times: [0, Math.max(appear - 0.001, 0), appear + 0.04, shown, 1],
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                      color: {
                        duration: 4.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  >
                    {word}
                  </motion.span>
                )
              })}
            </p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.55, ease }}
            >
              <MagneticButton className="btn--primary btn--glow" to={hero.cta.to}>
                {hero.cta.label}
                <span aria-hidden="true">›</span>
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            className="hero__photo-wrap"
            initial={reduce ? false : { opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.8, ease }}
          >
            <img
              className="hero__photo"
              src={profilePhoto}
              alt={personal.name}
              width={400}
              height={400}
              decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
