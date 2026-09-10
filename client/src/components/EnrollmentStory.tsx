import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { portfolioData } from '../data/content'
import { AndroidDevice } from './AndroidDevice'
import { useIsMobile } from '../hooks/useMediaQuery'

export function EnrollmentStory() {
  const { enrollmentSteps } = portfolioData
  const reduce = useReducedMotion()
  const isMobile = useIsMobile()
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const total = Math.max(rect.height - window.innerHeight, 1)
      const progress = Math.min(Math.max(-rect.top / total, 0), 1)
      const index = Math.min(
        enrollmentSteps.length - 1,
        Math.floor(progress * enrollmentSteps.length),
      )
      setActive(index)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [enrollmentSteps.length])

  const step = enrollmentSteps[active]

  return (
    <section
      className="enrollment"
      id="lifecycle"
      ref={ref}
      aria-label="Device enrollment story"
    >
      <div className="enrollment__sticky">
        <div className="enrollment__layout">
          <div className="enrollment__copy">
            <p className="section__label">Device lifecycle</p>
            <ol className="enrollment__steps">
              {enrollmentSteps.map((item, i) => (
                <li
                  key={item.id}
                  className={i === active ? 'is-active' : i < active ? 'is-done' : ''}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={i === active ? 'step' : undefined}
                  >
                    <span className="enrollment__index">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="enrollment__step-title">{item.title}</span>
                  </button>
                </li>
              ))}
            </ol>

            <motion.div
              key={step.id}
              className="enrollment__detail"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <p className="enrollment__status">{step.status}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          </div>

          <div className="enrollment__device">
            <AndroidDevice
              interactive={!isMobile}
              variant={active >= 4 ? 'kiosk' : 'managed'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
