import { useState } from 'react'
import { ExternalLink, Code2, Image } from 'lucide-react'
import { projects } from '../data/portfolioData'
import './Projects.css'

const ALL_TAGS = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))]

/** Returns initials for the placeholder (up to 2 chars) */
function getInitials(title) {
  return title
    .split(/\s+/)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase()
}

/** Thumbnail strip — image if available, else styled placeholder */
function CardThumbnail({ project }) {
  const hasShots = project.screenshots && project.screenshots.length > 0

  if (hasShots) {
    return (
      <div className="project-card__thumb">
        <img
          src={project.screenshots[0]}
          alt={`${project.title} screenshot`}
          className="project-card__thumb-img"
          draggable={false}
        />
        <div className="project-card__thumb-overlay" />
        <span className="project-card__photo-badge">
          <Image size={11} />
          {project.screenshots.length}
        </span>
      </div>
    )
  }

  return (
    <div className="project-card__thumb project-card__thumb--placeholder">
      <span className="project-card__thumb-initials">{getInitials(project.title)}</span>
    </div>
  )
}

export default function Projects({ onOpenProject }) {
  const [activeTag, setActiveTag] = useState('All')

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeTag))

  return (
    <section id="projects" className="section-wrapper">
      <div className="section-container">

        <p className="section-label reveal">Projects</p>
        <h2 className="projects__heading heading-chrome reveal">Work Showcase</h2>

        {/* Tag filters */}
        <div className="projects__filters reveal" role="group" aria-label="Filter projects by category">
          {ALL_TAGS.map(tag => (
            <button
              key={tag}
              className={`projects__filter-btn ${activeTag === tag ? 'projects__filter-btn--active' : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="projects__grid reveal-stagger reveal">
          {filtered.map(project => (
            <article
              key={project.id}
              className="glass-card project-card"
              onClick={() => onOpenProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && onOpenProject(project)}
              aria-label={`View details for ${project.title}`}
            >
              {/* Thumbnail / placeholder */}
              <CardThumbnail project={project} />

              {/* Card body */}
              <div className="project-card__body">
                {/* Tags */}
                <div className="project-card__tags">
                  {project.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                {/* Title + summary */}
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__summary">{project.summary}</p>

                {/* Tech pills */}
                <div className="project-card__tech">
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="project-card__tech-pill">{t}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="project-card__tech-pill">+{project.tech.length - 4}</span>
                  )}
                </div>

                {/* Link row */}
                <div className="project-card__links" onClick={e => e.stopPropagation()}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <Code2 size={16} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live demo">
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
