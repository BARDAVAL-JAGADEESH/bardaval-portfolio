import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { useIsMobile } from '../hooks/useMediaQuery'
import { portfolioData } from '../data/content'

type AndroidDeviceProps = {
  className?: string
  interactive?: boolean
  variant?: 'managed' | 'normal' | 'kiosk' | 'locking'
  compact?: boolean
}

export function AndroidDevice({
  className = '',
  interactive = true,
  variant = 'managed',
  compact = false,
}: AndroidDeviceProps) {
  const frameRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const isMobile = useIsMobile()
  const { device } = portfolioData
  const track = interactive && !reduce && !isMobile

  useEffect(() => {
    if (!track || !frameRef.current) return
    const el = frameRef.current

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      el.style.transform = `perspective(900px) rotateY(${px * 10}deg) rotateX(${-py * 8}deg)`
    }

    const onLeave = () => {
      el.style.transform = 'perspective(900px) rotateY(-8deg) rotateX(4deg)'
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    onLeave()

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [track])

  return (
    <div
      ref={frameRef}
      className={`device ${compact ? 'device--compact' : ''} ${className}`.trim()}
      data-variant={variant}
      data-cursor="hover"
      aria-hidden="true"
    >
      <div className="device__bezel">
        <div className="device__speaker" />
        <div className="device__screen">
          <div className="device__glare" />
          {variant === 'normal' && (
            <div className="device__os">
              <div className="device__status-bar">
                <span>9:41</span>
                <span>●●●</span>
              </div>
              <div className="device__apps">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} className="device__app-icon" />
                ))}
              </div>
            </div>
          )}

          {variant === 'locking' && (
            <div className="device__locking">
              <span className="device__pulse" />
              <p>LOCKING DEVICE…</p>
            </div>
          )}

          {(variant === 'managed' || variant === 'kiosk') && (
            <div className="device__managed">
              <p className="device__brand">{device.brand}</p>
              <p className="device__subtitle">{device.subtitle}</p>
              <ul className="device__statuses">
                {device.statuses.map((s) => (
                  <li key={s.label}>
                    <span className="device__dot" />
                    {s.label}
                  </li>
                ))}
              </ul>
              {variant === 'kiosk' && (
                <div className="device__kiosk-badge">
                  <span>🔒</span>
                  <strong>KIOSK ACTIVE</strong>
                  <small>{portfolioData.kiosk.managedBy}</small>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
