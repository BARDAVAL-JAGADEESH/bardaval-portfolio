import { useEffect, useRef, useState } from 'react'
import { portfolioData } from '../data/content'
import { Reveal } from './Reveal'

export function EnrollmentPipeline() {
  const { enrollmentPipeline } = portfolioData
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const view = window.innerHeight * 0.55
      const progress = (view - rect.top) / (rect.height + view)
      const clamped = Math.min(Math.max(progress, 0), 1)
      setActive(
        Math.min(
          enrollmentPipeline.length - 1,
          Math.floor(clamped * enrollmentPipeline.length),
        ),
      )
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [enrollmentPipeline.length])

  return (
    <section className="section pipeline" ref={ref} aria-label="Enrollment pipeline">
      <div className="section__inner">
        <Reveal>
          <p className="section__label">Enrollment</p>
          <h2 className="section__title">From QR to managed device</h2>
        </Reveal>

        <ol className="pipeline__list">
          {enrollmentPipeline.map((node, i) => {
            const state =
              i < active ? 'done' : i === active ? 'active' : 'pending'
            return (
              <li key={node.id} className={`pipeline__item is-${state}`}>
                <div className="pipeline__node">
                  <span className="pipeline__orb" />
                  <div>
                    <strong>{node.label}</strong>
                    <span>
                      {state === 'done'
                        ? `${node.done} ✓`
                        : state === 'active'
                          ? 'REGISTERING…'
                          : 'WAITING'}
                    </span>
                  </div>
                </div>
                {i < enrollmentPipeline.length - 1 && (
                  <div className="pipeline__line" aria-hidden="true" />
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
