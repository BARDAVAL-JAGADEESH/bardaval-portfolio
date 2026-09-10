import { Link } from 'react-router-dom'
import { portfolioData } from '../data/content'
import { Reveal } from './Reveal'

export function Projects() {
  const { projects } = portfolioData

  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="section__inner">
        <Reveal>
          <p className="section__label">Selected work</p>
          <h2 className="section__title" id="projects-title">
            Projects
          </h2>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={Math.min(index * 0.04, 0.16)}>
              <Link
                className="project-card"
                to={`/projects/${project.id}`}
              >
                <div className="project-card__meta">
                  <span className="project-card__tag">{project.tag}</span>
                  <span className="project-card__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="chip-row chip-row--sm">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <span className="project-card__cta">
                  View project <span aria-hidden="true">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
