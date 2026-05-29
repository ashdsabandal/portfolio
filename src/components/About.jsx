import { owner, skills } from '../data/portfolioData'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="section-container about__inner">

        {/* Left — bio */}
        <div className="about__bio">
          <p className="section-label">About Me</p>
          <h2>The Engineer Behind the Build</h2>
          <div className="about__bio-text">
            {owner.bio.split('\n').filter(Boolean).map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>

        {/* Right — skills matrix */}
        <div className="about__skills">
          <p className="section-label">Tech Stack</p>
          <div className="skills-grid">
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
