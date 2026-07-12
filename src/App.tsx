import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Achievements } from './components/Achievements'
import { BeyondCoding } from './components/BeyondCoding'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ScrollProgress'
import { BackToTop } from './components/BackToTop'

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <BeyondCoding />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
