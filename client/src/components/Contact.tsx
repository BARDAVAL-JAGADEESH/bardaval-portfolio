import { portfolioData } from '../data/content'
import { Reveal } from './Reveal'
import { MagneticButton } from './MagneticButton'

export function Contact() {
  const { contact, personal, social } = portfolioData

  return (
    <section className="section contact" id="contact">
      <div className="section__inner">
        <Reveal>
          <p className="section__label">Contact</p>
          <h2 className="contact__title">{contact.title}</h2>
          <p className="section__lede">{contact.lede}</p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="contact__details">
            <a href={`mailto:${personal.email}`}>{personal.email}</a>
            <a href={personal.phoneHref}>{personal.phone}</a>
            <span>{personal.location}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <MagneticButton
            className="btn--primary btn--glow btn--lg"
            href={`mailto:${personal.email}`}
          >
            {contact.cta}
            <span aria-hidden="true">›</span>
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.14}>
          <ul className="contact__links">
            <li>
              <a href={social.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={social.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
