import Hero from '../components/Hero'
import Hardware from '../components/Hardware'
import Software from '../components/Software'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import SectionFade from '../components/SectionFade'

// Section background tokens (mirror tailwind.config.js: ink / bone)
const INK = '#0B0B0C'
const BONE = '#F5F3EF'

export default function Home() {
  return (
    <>
      <Hero />
      <SectionFade from={INK} to={BONE} />
      <Hardware />
      <SectionFade from={BONE} to={INK} />
      <Software />
      <SectionFade from={INK} to={BONE} />
      <Contact />
      <SectionFade from={BONE} to={INK} />
      <Footer />
    </>
  )
}
