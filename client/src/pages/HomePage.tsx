import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { ProjectShowcase } from '../components/ProjectShowcase'
import { Projects } from '../components/Projects'
import { Experience } from '../components/Experience'
import { Skills } from '../components/Skills'
import { Credentials } from '../components/Credentials'
import { CurrentlyBuilding } from '../components/CurrentlyBuilding'
import { Contact } from '../components/Contact'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProjectShowcase />
      <Projects />
      <Experience />
      <Skills />
      <CurrentlyBuilding />
      <Credentials />
      <Contact />
    </>
  )
}
