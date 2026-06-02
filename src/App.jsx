import { useState, useCallback, useEffect } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import ProjectModal from './components/ProjectModal'
import ProjectDetail from './components/ProjectDetail'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SigilDivider from './components/SigilDivider'
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

        <SigilDivider />

        <TechStack />

        <SigilDivider flip />

        <Projects onOpenProject={openProject} />

        <SigilDivider />

        <Experience />

        <SigilDivider flip />

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
