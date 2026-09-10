import { Link } from 'react-router-dom'
import { portfolioData } from '../data/content'
import { Reveal } from './Reveal'

export function ProjectShowcase() {
  const { featured } = portfolioData

  return (
    <section className="section featured" id="work" aria-labelledby="featured-title">
      <div className="section__inner">
        <Reveal>
          <p className="section__label">Featured work</p>
          <p className="featured__eyebrow">ONESAZ · Mar 2026 – Present</p>
          <h2 className="featured__title" id="featured-title">
            {featured.title}
          </h2>
          <p className="featured__subtitle">{featured.subtitle}</p>
          <p className="featured__body">{featured.description}</p>
        </Reveal>

        <Reveal delay={0.06}>
          <ul className="chip-row">
            {featured.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="featured__highlights">
            {featured.highlights.slice(0, 4).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <Link className="btn btn--primary" to={`/projects/${featured.id}`}>
            View case study
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
