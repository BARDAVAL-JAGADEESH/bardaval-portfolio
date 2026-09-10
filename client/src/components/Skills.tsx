import { portfolioData } from '../data/content'
import { Reveal } from './Reveal'

export function Skills() {
  const { skills } = portfolioData

  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="section__inner">
        <Reveal>
          <p className="section__label">Technical skills</p>
          <h2 className="section__title" id="skills-title">
            Skills
          </h2>
        </Reveal>

        <div className="skills-groups">
          {skills.groups.map((group, i) => (
            <Reveal key={group.title} delay={Math.min(i * 0.05, 0.2)}>
              <article className="skills-group">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
