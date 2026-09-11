import { portfolioData } from '../data/content'
import { Reveal } from './Reveal'

export function Skills() {
  const { skills } = portfolioData

  return (
    <section className="section skills" id="skills">
      <div className="section__inner">
        <Reveal>
          <p className="section__label">Capabilities</p>
          <h2 className="section__title">Skills</h2>
        </Reveal>

        <div className="skills-groups">
          {skills.groups.map((group, i) => (
            <Reveal key={group.title} delay={Math.min(i * 0.04, 0.16)}>
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
