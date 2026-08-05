import { experience } from '../data/content'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section__inner">
        <Reveal>
          <p className="section__label">Experience</p>
          <h2 className="section__title">Where I’ve been building.</h2>
        </Reveal>

        <ol className="timeline">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 0.08}>
              <li className="timeline__item">
                <div className="timeline__meta">
                  <span className="timeline__period">{job.period}</span>
                  <span className="timeline__location">{job.location}</span>
                </div>
                <div className="timeline__body">
                  <h3>{job.role}</h3>
                  <p className="timeline__company">{job.company}</p>
                  <ul>
                    {job.points.map((point) => (
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
