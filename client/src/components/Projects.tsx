import { Link } from 'react-router-dom'
import { portfolioData } from '../data/content'
import { Reveal } from './Reveal'

export function Projects() {
  const { projects } = portfolioData

  return (
    <section className="section projects" id="projects">
      <div className="section__inner">
        <Reveal>
          <p className="section__label">Work</p>
          <h2 className="section__title">Projects</h2>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <Link className="project-card" to={`/projects/${project.id}`}>
                <span className="project-card__tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="chip-row chip-row--sm">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <span className="project-card__cta">
                  View details →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
