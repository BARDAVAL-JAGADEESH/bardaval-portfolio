import { portfolioData } from '../data/content'
import { Reveal } from './Reveal'

export function Experience() {
  const { experience } = portfolioData

  return (
    <section
      className="section experience"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section__inner">
        <Reveal>
          <p className="section__label">Professional experience</p>
          <h2 className="section__title" id="experience-title">
            Experience
          </h2>
        </Reveal>

        <ol className="timeline">
          {experience.map((item, i) => (
            <Reveal key={`${item.company}-${item.period}`} delay={i * 0.06}>
              <li className="timeline__item">
                <div className="timeline__year">
                  <span>{item.year}</span>
                  <span className="timeline__rail" aria-hidden="true" />
                </div>
                <div className="timeline__body">
                  <p className="timeline__role">{item.role}</p>
                  <p className="timeline__focus">{item.focus}</p>
                  <h3>{item.company}</h3>
                  <p className="timeline__meta">
                    {item.location} · {item.period}
                  </p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
