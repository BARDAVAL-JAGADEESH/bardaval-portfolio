import { useEffect, useState } from 'react'
import { useIsTouch } from '../hooks/useMediaQuery'

export function Cursor() {
  const isTouch = useIsTouch()
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hover, setHover] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isTouch) return

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const interactive = target?.closest(
        'a, button, input, textarea, [data-cursor="hover"]',
      )
      setHover(Boolean(interactive))
    }

    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.documentElement.classList.add('has-custom-cursor')

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [isTouch])

  if (isTouch) return null

  return (
    <div
      className={`cursor ${hover ? 'cursor--hover' : ''} ${visible ? 'cursor--visible' : ''}`}
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      aria-hidden="true"
    />
  )
}
