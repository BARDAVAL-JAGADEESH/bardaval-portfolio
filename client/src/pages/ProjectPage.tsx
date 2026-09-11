import { Link, Navigate, useParams } from 'react-router-dom'
import { getProjectById, portfolioData } from '../data/content'
import { Reveal } from '../components/Reveal'

export function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : null

  if (!project) {
    return <Navigate to={{ pathname: '/', hash: 'projects' }} replace />
  }

  const related = portfolioData.projects.filter((p) => p.id !== project.id)

  return (
    <article className="project-page">
      <section className="section project-page__hero">
        <div className="section__inner">
          <Reveal>
            <Link className="project-page__back" to={{ pathname: '/', hash: 'projects' }}>
              ← Back to projects
            </Link>
            <p className="section__label">{project.tag}</p>
            <h1 className="project-page__title">{project.title}</h1>
            <p className="project-page__lede">{project.longDescription}</p>
            <ul className="chip-row">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="project-page__actions">
              <a
                className="btn btn--ghost"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <Link
                className="btn btn--primary btn--glow"
                to={{ pathname: '/', hash: 'contact' }}
              >
                Contact
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <Reveal>
            <h2 className="section__title">Highlights</h2>
            <ul className="detail-list">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="section__inner">
            <Reveal>
              <h2 className="section__title">More projects</h2>
              <div className="projects__grid">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    className="project-card"
                    to={`/projects/${item.id}`}
                  >
                    <span className="project-card__tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </article>
  )
}
