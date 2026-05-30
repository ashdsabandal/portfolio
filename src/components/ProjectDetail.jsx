import { useState, useEffect, useCallback, useRef } from 'react'
import {
  X, ChevronLeft, ChevronRight,
  ExternalLink, Code2, CheckCircle,
  ArrowLeft, ZoomIn
} from 'lucide-react'
import './ProjectDetail.css'

/* ──────────────────────────────────────────────────
   Lightbox — full-black overlay showing one image
   ────────────────────────────────────────────────── */
function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label="Image fullscreen">
      <button className="lightbox__close" onClick={onClose} aria-label="Close lightbox">
        <X size={20} />
      </button>
      <img
        src={src}
        alt={alt}
        className="lightbox__img"
        onClick={e => e.stopPropagation()}
        draggable={false}
      />
    </div>
  )
}

/* ──────────────────────────────────────────────────
   Carousel — image slider with dots + arrow nav
   ────────────────────────────────────────────────── */
function Carousel({ screenshots, title }) {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const startX = useRef(null)

  const prev = useCallback(() =>
    setIndex(i => (i - 1 + screenshots.length) % screenshots.length), [screenshots.length])
  const next = useCallback(() =>
    setIndex(i => (i + 1) % screenshots.length), [screenshots.length])

  // Keyboard navigation
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  // Mouse drag / swipe
  const onPointerDown = e => { startX.current = e.clientX }
  const onPointerUp   = e => {
    if (startX.current === null) return
    const delta = e.clientX - startX.current
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev()
    startX.current = null
  }

  if (!screenshots.length) return null

  return (
    <>
      <div
        className="carousel"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        style={{ touchAction: 'pan-y' }}
      >
        {/* Main image */}
        <div className="carousel__track">
          {screenshots.map((src, i) => (
            <div
              key={src}
              className={`carousel__slide ${i === index ? 'carousel__slide--active' : ''}`}
              aria-hidden={i !== index}
            >
              <img
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                className="carousel__img"
                draggable={false}
                onClick={() => setLightbox(src)}
              />
              <div className="carousel__zoom-hint">
                <ZoomIn size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Arrow buttons */}
        {screenshots.length > 1 && (
          <>
            <button className="carousel__btn carousel__btn--prev" onClick={prev} aria-label="Previous image">
              <ChevronLeft size={22} />
            </button>
            <button className="carousel__btn carousel__btn--next" onClick={next} aria-label="Next image">
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {screenshots.length > 1 && (
        <div className="carousel__dots" role="tablist" aria-label="Carousel slides">
          {screenshots.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              className={`carousel__dot ${i === index ? 'carousel__dot--active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox}
          alt={`${title} fullscreen`}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}

/* ──────────────────────────────────────────────────
   ProjectDetail — full-screen page
   ────────────────────────────────────────────────── */
export default function ProjectDetail({ project, onClose }) {
  const hasShots = project.screenshots && project.screenshots.length > 0

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Close on Escape (only when lightbox isn't open)
  useEffect(() => {
    const onKey = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="pd-overlay" role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="pd-page">

        {/* ── Sticky top bar ── */}
        <header className="pd-topbar">
          <button className="pd-back" onClick={onClose} aria-label="Back to projects">
            <ArrowLeft size={18} />
            Back
          </button>

          <div className="pd-topbar__actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary pd-action-btn">
                <Code2 size={15} /> Code
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary pd-action-btn">
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        </header>

        {/* ── Scrollable content ── */}
        <div className="pd-body">

          {/* Carousel (only when screenshots exist) */}
          {hasShots && (
            <section className="pd-carousel-section">
              <Carousel screenshots={project.screenshots} title={project.title} />
            </section>
          )}

          {/* Meta */}
          <div className="pd-content">
            <div className="pd-meta">
              <div className="project-card__tags">
                {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <h1 className="pd-title">{project.title}</h1>
              <p className="pd-desc">{project.description}</p>
            </div>

            {/* Key Highlights */}
            <section className="pd-section">
              <h2 className="pd-section-title">Key Highlights</h2>
              <ul className="pd-highlights">
                {project.highlights.map((h, i) => (
                  <li key={i} className="pd-highlight-item">
                    <CheckCircle size={15} className="pd-check" />
                    {h}
                  </li>
                ))}
              </ul>
            </section>

            {/* Tech Stack */}
            <section className="pd-section">
              <h2 className="pd-section-title">Tech Stack</h2>
              <div className="pd-tech">
                {project.tech.map(t => (
                  <span key={t} className="project-card__tech-pill">{t}</span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
