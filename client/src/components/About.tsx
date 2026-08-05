import { profile } from '../data/content'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section className="section about" id="about">
      <div className="section__inner">
        <Reveal>
          <p className="section__label">About</p>
          <h2 className="section__title">Mobile products with school-scale impact.</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal delay={0.08}>
            <p className="about__copy">
              I’m {profile.name}, an Android developer based in {profile.location}.
              At {profile.company} I focus on education-tech surfaces — especially
              device management that keeps student fleets secure, manageable, and
              classroom-ready.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="about__copy">
              Outside shipping features I grind DSA on LeetCode, CodeChef, and
              HackerRank, and keep leveling Kotlin, Compose, and multiplatform
              skills. Ask me about Android architecture, Kotlin, Java, or
              competitive programming.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <ul className="about__meta">
            <li>
              <span>Focus</span>
              <strong>Android · MDM · Compose</strong>
            </li>
            <li>
              <span>Based</span>
              <strong>{profile.location}</strong>
            </li>
            <li>
              <span>Open to</span>
              <strong>Collaborations & opportunities</strong>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
