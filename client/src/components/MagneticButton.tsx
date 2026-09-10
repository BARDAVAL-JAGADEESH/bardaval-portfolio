import { Link, type LinkProps } from 'react-router-dom'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import {
  useRef,
  type MouseEvent,
  type ReactNode,
  type RefObject,
} from 'react'
import { useIsTouch } from '../hooks/useMediaQuery'
import { parseHashPath, scrollToHash } from '../lib/scroll'

type MagneticButtonProps = {
  children: ReactNode
  className?: string
  to?: string
  href?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  magnetic?: boolean
  onClick?: () => void
}

export function MagneticButton({
  children,
  className = '',
  to,
  href,
  target,
  rel,
  type = 'button',
  disabled,
  magnetic = true,
  onClick,
}: MagneticButtonProps) {
  const isTouch = useIsTouch()
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.4 })
  const transform = useMotionTemplate`translate3d(${springX}px, ${springY}px, 0)`

  function onMove(e: MouseEvent<HTMLElement>) {
    if (!magnetic || isTouch || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * 0.22)
    y.set(dy * 0.22)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  const sharedClass = `btn ${className}`.trim()

  if (to) {
    const { pathname, hash } = parseHashPath(to)
    const handleClick: LinkProps['onClick'] = (event) => {
      onClick?.()
      if (pathname === window.location.pathname && hash) {
        event.preventDefault()
        scrollToHash(hash)
        window.history.replaceState(null, '', `${pathname}${hash}`)
      }
    }

    return (
      <motion.div style={{ transform }} className="btn-wrap">
        <Link
          ref={ref as RefObject<HTMLAnchorElement>}
          className={sharedClass}
          to={{ pathname, hash: hash ? hash.slice(1) : undefined }}
          onClick={handleClick}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a
        ref={ref as RefObject<HTMLAnchorElement>}
        className={sharedClass}
        href={href}
        target={target}
        rel={rel}
        style={{ transform }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onClick}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref as RefObject<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      className={sharedClass}
      style={{ transform }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
