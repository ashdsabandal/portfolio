import { experience } from '../data/portfolioData'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <div className="section-container">

        <p className="section-label reveal">Experience</p>
        <h2 className="experience__heading heading-chrome reveal">Career Timeline</h2>

        <div className="timeline reveal-stagger reveal">
          {experience.map((job, index) => (
            <div key={job.id} className="timeline__item">
              {/* Connector line & dot */}
              <div className="timeline__track" aria-hidden="true">
                <div className="timeline__dot" />
                {index < experience.length - 1 && <div className="timeline__line" />}
              </div>

              {/* Card */}
              <article className="glass-card timeline__card">
                <div className="timeline__card-header">
                  <div>
                    <h3 className="timeline__role">{job.role}</h3>
                    <p className="timeline__company">{job.company}</p>
                  </div>
                  <span className="tag timeline__period">{job.period}</span>
                </div>
                <p className="timeline__desc">{job.description}</p>
                <div className="timeline__tags">
                  {job.tags.map(t => (
                    <span key={t} className="project-card__tech-pill">{t}</span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
