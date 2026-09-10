import { portfolioData } from '../data/content'
import { Reveal } from './Reveal'

export function About() {
  const { about } = portfolioData

  return (
    <section className="section about" id="about">
      <div className="section__inner about__grid">
        <Reveal>
          <p className="section__label">{about.label}</p>
          <h2 className="about__title">{about.title}</h2>
          <p className="about__body">{about.body}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="about__facts">
            {about.facts.map((fact) => (
              <li key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
