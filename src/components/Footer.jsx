import { ArrowUp } from 'lucide-react'
import { owner } from '../data/portfolioData'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="section-container footer__inner">

        <div className="footer__left">
          <span className="footer__logo">
            <span className="navbar__logo-bracket">&lt;</span>
            <span className="chrome-text">AR</span>
            <span className="navbar__logo-bracket">/&gt;</span>
          </span>
          <p className="footer__copy">
            © {year} {owner.name}. Designed &amp; built with obsession.
          </p>
        </div>

        <button
          className="footer__top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
          Back to top
        </button>

      </div>

      {/* Bottom chrome accent line */}
      <div className="footer__chrome-line" aria-hidden="true" />
    </footer>
  )
}
