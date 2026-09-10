import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { portfolioData } from '../data/content'
import { AndroidDevice } from './AndroidDevice'
import { Reveal } from './Reveal'

type Phase = 'normal' | 'locking' | 'kiosk'

export function KioskDemo() {
  const { kiosk } = portfolioData
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.45, once: false })
  const [phase, setPhase] = useState<Phase>('normal')

  useEffect(() => {
    if (reduce) {
      setPhase('kiosk')
      return
    }
    if (!inView) {
      setPhase('normal')
      return
    }

    setPhase('normal')
    const t1 = window.setTimeout(() => setPhase('locking'), 900)
    const t2 = window.setTimeout(() => setPhase('kiosk'), 2200)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [inView, reduce])

  return (
    <section className="section kiosk" ref={ref} aria-labelledby="kiosk-title">
      <div className="section__inner kiosk__layout">
        <Reveal>
          <p className="section__label">Managed experience</p>
          <h2 className="section__title" id="kiosk-title">
            {kiosk.title}
          </h2>
          <p className="section__lede">{kiosk.description}</p>
        </Reveal>

        <div className="kiosk__stage">
          <AndroidDevice variant={phase} interactive={false} />
          <AnimatePresence mode="wait">
            <motion.p
              key={phase}
              className="kiosk__caption"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {phase === 'normal' && 'Normal Android interface'}
              {phase === 'locking' && kiosk.lockingLabel}
              {phase === 'kiosk' && `${kiosk.activeLabel} · ${kiosk.managedBy}`}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
