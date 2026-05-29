import { X, ExternalLink, Code2, CheckCircle } from 'lucide-react'
import { useEffect } from 'react'
import './ProjectModal.css'

export default function ProjectModal({ project, onClose }) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="modal-panel glass-card" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="modal-panel__header">
          <div>
            <div className="project-card__tags" style={{ marginBottom: '0.5rem' }}>
              {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <h2 className="modal-panel__title">{project.title}</h2>
          </div>
          <button className="modal-panel__close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Description */}
        <p className="modal-panel__desc">{project.description}</p>

        {/* Highlights */}
        <div className="modal-panel__section">
          <h3 className="modal-panel__section-title">Key Highlights</h3>
          <ul className="modal-panel__highlights">
            {project.highlights.map((h, i) => (
              <li key={i} className="modal-panel__highlight-item">
                <CheckCircle size={15} className="modal-panel__check" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="modal-panel__section">
          <h3 className="modal-panel__section-title">Tech Stack</h3>
          <div className="modal-panel__tech">
            {project.tech.map(t => (
              <span key={t} className="project-card__tech-pill">{t}</span>
            ))}
          </div>
        </div>

        {/* Action links */}
        <div className="modal-panel__actions">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
            <Code2 size={16} /> View Code
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
