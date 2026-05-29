import { useState, useCallback } from 'react'
import './App.css'

// Components (to be built in Phase 3)
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import About from './components/About'
// import Projects from './components/Projects'
// import Experience from './components/Experience'
// import Contact from './components/Contact'
// import Footer from './components/Footer'

function App() {
  // --- Global State ---

  // Active project for the detail modal (null = closed)
  const [activeProject, setActiveProject] = useState(null)

  // Active section highlighted in the navbar
  const [activeSection, setActiveSection] = useState('hero')

  // Open / close project modal
  const openProject  = useCallback((project) => setActiveProject(project), [])
  const closeProject = useCallback(() => setActiveProject(null), [])

  return (
    <div className="app">
      {/* Navbar */}
      {/* <Navbar activeSection={activeSection} /> */}

      <main>
        {/* Hero */}
        {/* <Hero /> */}

        {/* About & Skills */}
        {/* <About /> */}

        {/* Projects Grid */}
        {/* <Projects onOpenProject={openProject} /> */}

        {/* Experience Timeline */}
        {/* <Experience /> */}

        {/* Contact */}
        {/* <Contact /> */}
      </main>

      {/* Footer */}
      {/* <Footer /> */}

      {/* Project Detail Modal */}
      {/* {activeProject && (
        <ProjectModal project={activeProject} onClose={closeProject} />
      )} */}

      {/* Temp placeholder */}
      <p style={{ color: 'var(--purple)', fontFamily: 'var(--font-mono)', padding: '2rem' }}>
        ⚡ Phase 2 complete — data schema + global state wired.
      </p>
    </div>
  )
}

export default App
