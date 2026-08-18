import Preloader from './components/Preloader'
import GridBackground from './components/GridBackground'
import MouseGlow from './components/MouseGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Note: Services, ContentCreator, Internships, Leadership, Certificates, and
// SoftSkills components remain in src/components (nothing was deleted) but are
// not rendered here — they held placeholder content unrelated to this portfolio's
// scope (Home / About / Skills / Projects / Contact) and are left available in
// case they're wanted for a future section.

function App() {
  return (
    <>
      {/* z-0: fixed cyber background, sits behind all content */}
      <GridBackground />
      {/* z-1: cursor-following glow, disabled automatically on touch devices */}
      <MouseGlow />

      {/* z-50: loading screen, shown briefly on first paint */}
      <Preloader />

      {/* Main site content (each section uses relative z-10+) */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <TechnicalSkills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
