import { Globe, Users, AtSign, ArrowDown } from 'lucide-react'
import { owner } from '../data/portfolioData'
import SigilWatermark from './SigilWatermark'
import './Hero.css'

export default function Hero() {
  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="hero section-wrapper">
      <div className="section-container hero__inner">

        <p className="section-label hero__label reveal">
          Available for work · {owner.location}
        </p>

        <h1 className="hero__title reveal">{owner.name}</h1>
        <p className="hero__role reveal">{owner.title}</p>
        <div className="hero__bio reveal">
          {owner.bio.split('\n').filter(Boolean).map((line, i) => (
            <p key={i} className="hero__bio-paragraph">{line}</p>
          ))}
        </div>

        <div className="hero__actions reveal">
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

        <div className="hero__socials reveal">
          <a href={owner.github}   target="_blank" rel="noreferrer" aria-label="GitHub"   className="hero__social-link"><Globe  size={18} /></a>
          <a href={owner.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hero__social-link"><Users  size={18} /></a>
        </div>

        <button className="hero__scroll-cue reveal" onClick={scrollToAbout} aria-label="Scroll down">
          <ArrowDown size={16} />
        </button>

      </div>

      {/* Decorative elements */}
      <SigilWatermark className="sigil-watermark--hero" />
      <div className="hero__glow" aria-hidden="true" />
    </section>
  )
}
