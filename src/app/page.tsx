import { getCvData } from '@/shared/api/getCvData'
import { Hero } from '@/widgets/hero'
import { About } from '@/widgets/about'
import { Experience } from '@/widgets/experience'
import { Skills } from '@/widgets/skills'
import { Projects } from '@/widgets/projects'
import { Education } from '@/widgets/education'
import { Contact } from '@/widgets/contact'

export const revalidate = 3600

export default async function HomePage() {
  const cv = await getCvData()

  return (
    <>
      <Hero cv={cv} />
      <About cv={cv} />
      <Experience cv={cv} />
      <Skills cv={cv} />
      <Projects cv={cv} />
      <Education cv={cv} />
      <Contact cv={cv} />
    </>
  )
}
