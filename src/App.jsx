import { useState, useCallback, useEffect } from 'react'
import './App.css'

import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Projects     from './components/Projects'
import ProjectModal from './components/ProjectModal'
import Experience   from './components/Experience'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

const SECTIONS = ['hero', 'about', 'projects', 'experience', 'contact']

function App() {
  // Active project for the detail modal (null = closed)
  const [activeProject, setActiveProject]   = useState(null)
  // Active section highlighted in the navbar
  const [activeSection, setActiveSection]   = useState('hero')

  const openProject  = useCallback((project) => setActiveProject(project), [])
  const closeProject = useCallback(() => setActiveProject(null), [])

  // Scroll spy — update activeSection based on viewport position
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

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Projects onOpenProject={openProject} />
        <Experience />
        <Contact />
      </main>

      <Footer />

      {activeProject && (
        <ProjectModal project={activeProject} onClose={closeProject} />
      )}
    </div>
  )
}

export default App
