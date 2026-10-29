import { About } from './components/About'
import { Background, ScrollProgress } from './components/Background'
import { Contact, Footer } from './components/Contact'
import { Cursor } from './components/Cursor'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'

export default function App() {
  return (
    <>
      <Background />
      <ScrollProgress />
      <Cursor />
      <div className="shell">
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
