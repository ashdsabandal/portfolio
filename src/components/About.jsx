import { owner, skills } from '../data/portfolioData'
import SigilWatermark from './SigilWatermark'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
      <SigilWatermark className="sigil-watermark--about" />
      <div className="section-container about__inner">

        <div className="about__skills" style={{ width: '100%' }}>
          <p className="section-label reveal">Tech Stack</p>
          <h2 className="heading-chrome reveal" style={{ marginBottom: '2.5rem' }}>Technologies & Tools</h2>
          
          <div className="skills-grid reveal-stagger reveal">
            {skills.map((group) => (
              <div key={group.category} className="glass-card skill-group">
                <h3 className="skill-group__title">{group.category}</h3>
                <ul className="skill-group__list">
                  {group.items.map((item) => (
                    <li key={item} className="skill-group__item">
                      <span className="skill-group__dot" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
