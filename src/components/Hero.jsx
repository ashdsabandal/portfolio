import { Globe, Users, AtSign, ArrowDown } from 'lucide-react'
import { owner } from '../data/portfolioData'
import './Hero.css'

export default function Hero() {
  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="hero section-wrapper">
      <div className="section-container hero__inner">

        <p className="section-label hero__label">
          Available for work · {owner.location}
        </p>

        <h1 className="hero__title">{owner.name}</h1>
        <p className="hero__role">{owner.title}</p>
        <p className="hero__tagline">{owner.tagline}</p>

        <div className="hero__actions">
          <button
            className="btn-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </button>
          <button
            className="btn-secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </button>
        </div>

        <div className="hero__socials">
          <a href={owner.github}   target="_blank" rel="noreferrer" aria-label="GitHub"   className="hero__social-link"><Globe  size={18} /></a>
          <a href={owner.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hero__social-link"><Users  size={18} /></a>
          <a href={owner.twitter}  target="_blank" rel="noreferrer" aria-label="Twitter"  className="hero__social-link"><AtSign size={18} /></a>
        </div>

        <button className="hero__scroll-cue" onClick={scrollToAbout} aria-label="Scroll down">
          <ArrowDown size={16} />
        </button>

      </div>

      <div className="hero__glow" aria-hidden="true" />
    </section>
  )
}
