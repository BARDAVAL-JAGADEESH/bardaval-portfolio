import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { portfolioData } from '../data/content'
import { Reveal } from './Reveal'

export function ArchitectureDiagram() {
  const { architecture } = portfolioData
  const reduce = useReducedMotion()
  const [packet, setPacket] = useState(0)
  const [hovered, setHovered] = useState<string | null>(null)
  const tooltip = architecture.nodes.find((n) => n.id === hovered)

  useEffect(() => {
    if (reduce) return
    const id = window.setInterval(() => {
      setPacket((p) => (p + 1) % architecture.packetSteps.length)
    }, 1400)
    return () => window.clearInterval(id)
  }, [architecture.packetSteps.length, reduce])

  return (
    <section className="section architecture" aria-labelledby="arch-title">
      <div className="section__inner">
        <Reveal>
          <p className="section__label">System design</p>
          <h2 className="section__title" id="arch-title">
            {architecture.title}
          </h2>
          <p className="section__lede">{architecture.subtitle}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <div
            className="arch arch--flow"
            role="list"
            aria-label="Architecture from admin actions to managed device"
          >
            {architecture.nodes.map((node) => (
              <button
                key={node.id}
                type="button"
                role="listitem"
                className={`arch__node ${hovered === node.id ? 'is-hot' : ''}`}
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(node.id)}
                onBlur={() => setHovered(null)}
              >
                {node.label}
              </button>
            ))}
          </div>
          {tooltip && (
            <div className="arch__tooltip" role="status">
              <strong>{tooltip.label}</strong>
              <span>{tooltip.detail}</span>
            </div>
          )}
        </Reveal>

        <Reveal delay={0.12}>
          <div className="arch__packet" aria-live="polite">
            <span className="arch__packet-label">Command path</span>
            <motion.p
              key={architecture.packetSteps[packet]}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {architecture.packetSteps[packet]}
            </motion.p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
