import { motion } from 'framer-motion'
import { projects } from '../data/content'
import { Reveal } from './Reveal'

export function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section__inner">
        <Reveal>
          <p className="section__label">Projects</p>
          <h2 className="section__title">Selected work & experiments.</h2>
        </Reveal>

        <div className="projects__list">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <motion.a
                className="project"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 320, damping: 24 }}
              >
                <div className="project__index">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="project__main">
                  <div className="project__head">
                    <h3>{project.title}</h3>
                    <span className="project__tag">{project.tag}</span>
                  </div>
                  <p>{project.description}</p>
                  <ul className="project__stack">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <span className="project__arrow" aria-hidden="true">
                  →
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
