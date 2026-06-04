import { useState, useCallback, useEffect } from 'react'
import './App.css'
import Sigil1Svg from './assets/sigil1.svg'
import Sigil2Svg from './assets/sigil2.svg'
import SigilDivider from './components/SigilDivider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import ProjectModal from './components/ProjectModal'
import ProjectDetail from './components/ProjectDetail'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

const SECTIONS = ['hero', 'tech-stack', 'projects', 'experience', 'contact']

function App() {
  const [activeProject, setActiveProject] = useState(null)
  const [activeSection, setActiveSection] = useState('hero')

  const openProject = useCallback((project) => setActiveProject(project), [])
  const closeProject = useCallback(() => setActiveProject(null), [])

  // Scroll spy — update active nav section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Phase 5 — scroll reveal for all .reveal elements
  useScrollReveal()

  // Determine which overlay to use:
  // - Has screenshots → full-screen ProjectDetail
  // - No screenshots  → compact ProjectModal
  const hasScreenshots = activeProject?.screenshots?.length > 0

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />

      <main>
        <Hero />

        <SigilDivider svg={Sigil1Svg} left="-28%" alt="Sigil Divider 1" maxWidth="480px" top="50px" />

        <TechStack />

        <SigilDivider svg={Sigil1Svg} right="-30%" alt="Sigil Divider 2" maxWidth="600px" top="220px" minWidth="250px" />

        <Projects onOpenProject={openProject} />

        <SigilDivider svg={Sigil2Svg} right="0%" alt="Sigil Divider 3" maxWidth="700px" top="70px" minWidth="380px" transform="translateY(-20%) translateX(160px)" />

        <Experience />

        <Contact />
      </main>

      <Footer />

      {activeProject && hasScreenshots && (
        <ProjectDetail project={activeProject} onClose={closeProject} />
      )}

      {activeProject && !hasScreenshots && (
        <ProjectModal project={activeProject} onClose={closeProject} />
      )}
    </div>
  )
}

export default App
