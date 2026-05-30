import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const NAV_LINKS = [
  { id: 'about',      label: 'Tech Stack' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact' },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo / wordmark */}
        <button className="navbar__logo" onClick={() => scrollTo('hero')} aria-label="Back to top">
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name chrome-text">ash</span>
          <span className="navbar__logo-bracket">/&gt;</span>
        </button>

        {/* Desktop nav links */}
        <nav className="navbar__links" aria-label="Primary navigation">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              className={`navbar__link ${activeSection === id ? 'navbar__link--active' : ''}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(v => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="navbar__drawer" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              className={`navbar__drawer-link ${activeSection === id ? 'navbar__drawer-link--active' : ''}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
