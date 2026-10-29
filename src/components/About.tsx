import { useEffect, useRef, useState } from 'react'
import { skills } from '../data/site'

export function About() {
  const [openSkill, setOpenSkill] = useState<string | null>(skills[0]?.name ?? null)
  const [seen, setSeen] = useState(false)
  const box = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = box.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSeen(true)
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about">
      <div className="section-head">
        <h2>Tools I work with</h2>
        <p>
          A practical toolkit shaped by internships, product experiments, data projects, and
          computer-vision work.
        </p>
      </div>
      <div className="about-grid">
        <div className={`panel skills${seen ? ' seen' : ''}`} ref={box}>
          <p className="kicker">Software stack</p>
          {skills.map((skill) => (
            <div
              className={`skill${openSkill === skill.name ? ' open' : ''}`}
              key={skill.name}
              onClick={() => setOpenSkill(openSkill === skill.name ? null : skill.name)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setOpenSkill(openSkill === skill.name ? null : skill.name)
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="skill-top">
                <div className="skill-name">
                  <span className={`tool-icon ${skill.tone}`} aria-hidden="true">{skill.icon}</span>
                  <strong>{skill.name}</strong>
                </div>
              </div>
              {skill.note && <p className="skill-note">{skill.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
