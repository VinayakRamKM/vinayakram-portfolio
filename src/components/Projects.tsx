import { useEffect, useState, type MouseEvent } from 'react'
import { projects, type Project } from '../data/site'

const filters = ['All', 'Web', 'AI', 'Systems', 'Data'] as const

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const [active, setActive] = useState<Project | null>(null)
  const shown = projects.filter((p) => filter === 'All' || p.tag === filter)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = active ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="projects">
      <div className="section-head">
        <h2>Projects</h2>
        <p>Selected builds spanning web apps, computer vision, data, and systems work.</p>
      </div>
      <div className="filters">
        {filters.map((item) => (
          <button
            type="button"
            className={`chip${filter === item ? ' on' : ''}`}
            key={item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {shown.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setActive} />
        ))}
      </div>
      {active && (
        <div className="modal" onClick={() => setActive(null)} role="presentation">
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="project-title"
          >
            <button className="close" type="button" onClick={() => setActive(null)} aria-label="Close">
              ×
            </button>
            <p className="tag">{active.tag}</p>
            <h3 id="project-title">{active.title}</h3>
            {active.details.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
            {active.github && (
              <a className="btn btn-primary" href={active.github} target="_blank" rel="noreferrer">
                Open GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (p: Project) => void
}) {
  const onMove = (e: MouseEvent<HTMLButtonElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--y', `${e.clientY - rect.top}px`)
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `rotateX(${-y * 8}deg) rotateY(${x * 10}deg)`
  }

  return (
    <button
      type="button"
      className="card"
      onClick={() => onOpen(project)}
      onMouseMove={onMove}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none'
      }}
    >
      <p className="tag">{project.tag}</p>
      <h3>{project.title}</h3>
      <p>{project.blurb}</p>
      <div className="meta">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </button>
  )
}
