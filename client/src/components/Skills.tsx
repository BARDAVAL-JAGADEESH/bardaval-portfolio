import { skillGroups } from '../data/content'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section__inner">
        <Reveal>
          <p className="section__label">Skills</p>
          <h2 className="section__title">Toolkit I ship with.</h2>
        </Reveal>

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.08}>
              <div className="skills__group">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
