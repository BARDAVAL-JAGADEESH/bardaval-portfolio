import { Link, Navigate, useParams } from 'react-router-dom'
import { getProjectById, portfolioData } from '../data/content'
import { Reveal } from '../components/Reveal'
import { EnrollmentStory } from '../components/EnrollmentStory'
import { EnrollmentPipeline } from '../components/EnrollmentPipeline'
import { PolicyEngine } from '../components/PolicyEngine'
import { KioskDemo } from '../components/KioskDemo'
import { ArchitectureDiagram } from '../components/ArchitectureDiagram'
import { AndroidDevice } from '../components/AndroidDevice'

export function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : null

  if (!project) {
    return <Navigate to={{ pathname: '/', hash: 'projects' }} replace />
  }

  const related = [
    ...portfolioData.projects.filter((p) => p.id !== project.id),
    {
      id: portfolioData.featured.id,
      title: portfolioData.featured.title,
      tag: 'Featured',
      description: portfolioData.featured.description,
    },
  ]
    .filter((p) => p.id !== project.id)
    .slice(0, 4)

  return (
    <article className="project-page">
      <div className="project-page__hero section">
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
                View on GitHub
              </a>
              <Link className="btn btn--primary" to={{ pathname: '/', hash: 'contact' }}>
                Discuss this work
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <section className="section project-page__overview">
        <div className="section__inner project-page__split">
          <Reveal>
            <h2 className="section__title">Overview</h2>
            <ul className="featured__highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.flow && (
              <ol className="project-page__flow">
                {project.flow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            )}
          </Reveal>
          <Reveal delay={0.08}>
            <div className="project-page__visual">
              <AndroidDevice
                interactive={false}
                variant={project.featured ? 'managed' : 'normal'}
                compact
              />
            </div>
          </Reveal>
        </div>
      </section>

      {project.featured && (
        <>
          <EnrollmentStory />
          <EnrollmentPipeline />
          <PolicyEngine />
          <KioskDemo />
          <ArchitectureDiagram />
        </>
      )}

      <section className="section">
        <div className="section__inner">
          <Reveal>
            <h2 className="section__title">More projects</h2>
            <div className="projects__grid projects__grid--compact">
              {related.map((item) => (
                <Link
                  key={item.id}
                  className="project-card"
                  to={`/projects/${item.id}`}
                >
                  <div className="project-card__meta">
                    <span className="project-card__tag">{item.tag}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  )
}
