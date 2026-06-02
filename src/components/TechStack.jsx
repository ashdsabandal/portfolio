import { owner, skills } from '../data/portfolioData'
import SigilWatermark from './SigilWatermark'
import {
  SiJavascript, SiTypescript, SiPython, SiC, SiDart,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiTailwindcss,
  SiPostgresql, SiMysql, SiMongodb, SiSupabase, SiFirebase,
  SiFlutter, SiAndroidstudio, SiGodotengine, SiUnity,
  SiGit, SiGithub, SiFigma, SiPostman, SiHtml5
} from 'react-icons/si'
import { FaJava, FaDatabase, FaGamepad } from 'react-icons/fa6'
import { VscVscode } from 'react-icons/vsc'
import './TechStack.css'

const iconMap = {
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'Python': SiPython,
  'Java': FaJava,
  'C': SiC,
  'Dart': SiDart,
  'SQL': FaDatabase,
  'HTML / CSS': SiHtml5,
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'TailwindCSS': SiTailwindcss,
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'MongoDB': SiMongodb,
  'Supabase': SiSupabase,
  'Firebase': SiFirebase,
  'Flutter': SiFlutter,
  'Android Studio': SiAndroidstudio,
  'Godot': SiGodotengine,
  'Unity': SiUnity,
  'libGDX': FaGamepad,
  'Git': SiGit,
  'GitHub': SiGithub,
  'VS Code': VscVscode,
  'Figma': SiFigma,
  'Postman': SiPostman
}

function SkillIcon({ name }) {
  const Icon = iconMap[name];
  if (Icon) {
    return <Icon className="skill-group__icon" />
  }
  return <span className="skill-group__dot" aria-hidden="true" />
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
      <SigilWatermark className="sigil-watermark--tech-stack" />
      <div className="section-container tech-stack__inner">

        <div className="tech-stack__skills" style={{ width: '100%' }}>
          <p className="section-label reveal">Tech Stack</p>
          <h2 className="heading-chrome reveal" style={{ marginBottom: '2.5rem' }}>Technologies & Tools</h2>

          <div className="skills-grid reveal-stagger reveal">
            {skills.map((group) => (
              <div key={group.category} className="glass-card skill-group">
                <h3 className="skill-group__title">{group.category}</h3>
                <ul className="skill-group__list">
                  {group.items.map((item) => (
                    <li key={item} className="skill-group__item">
                      <SkillIcon name={item} />
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
