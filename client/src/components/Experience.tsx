import { portfolioData } from '../data/content'
import { Reveal } from './Reveal'

export function Experience() {
  const { experience } = portfolioData

  return (
    <section className="section experience" id="experience">
      <div className="section__inner">
        <Reveal>
          <p className="section__label">Career</p>
          <h2 className="section__title">Experience</h2>
        </Reveal>

        <div className="experience__list">
          {experience.map((item, i) => (
            <Reveal key={`${item.company}-${item.period}`} delay={i * 0.05}>
              <article className="experience__item">
                <div className="experience__meta">
                  <p className="experience__period">{item.period}</p>
                  <p className="experience__place">{item.location}</p>
                </div>
                <div className="experience__body">
                  <h3>{item.role}</h3>
                  <p className="experience__company">{item.company}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
