import { portfolioData } from '../data/content'
import { Reveal } from './Reveal'

export function Credentials() {
  const { education, certifications, achievements } = portfolioData

  return (
    <section className="section credentials" id="credentials" aria-labelledby="credentials-title">
      <div className="section__inner">
        <Reveal>
          <p className="section__label">Background</p>
          <h2 className="section__title" id="credentials-title">
            Education & more
          </h2>
        </Reveal>

        <div className="credentials__grid">
          <Reveal delay={0.04}>
            <article className="credentials__card">
              <h3>Education</h3>
              <ul className="credentials__list">
                {education.map((item) => (
                  <li key={item.school}>
                    <strong>{item.school}</strong>
                    <span>{item.degree}</span>
                    <span>{item.detail}</span>
                    <span className="credentials__meta">
                      {item.place} · {item.period}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="credentials__card">
              <h3>Certifications</h3>
              <ul className="credentials__list">
                {certifications.map((item) => (
                  <li key={item}>
                    <strong>{item}</strong>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="credentials__card credentials__card--wide">
              <h3>Research & achievements</h3>
              <ul className="credentials__list">
                {achievements.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
