import { Hero } from '@/widgets/hero'
import { About } from '@/widgets/about'
import { Experience } from '@/widgets/experience'
import { Skills } from '@/widgets/skills'
import { Projects } from '@/widgets/projects'
import { Education } from '@/widgets/education'
import { Contact } from '@/widgets/contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  )
}
