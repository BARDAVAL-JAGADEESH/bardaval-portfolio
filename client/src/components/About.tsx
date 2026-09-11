import { portfolioData } from '../data/content'
import { Reveal } from './Reveal'

export function About() {
  const { about, personal } = portfolioData

  return (
    <section className="section about" id="about">
      <div className="section__inner about__grid">
        <Reveal>
          <p className="section__label">{about.title}</p>
          <h2 className="about__title">{about.heading}</h2>
          <p className="about__body">{personal.summary}</p>
        </Reveal>
        <Reveal delay={0.06}>
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
