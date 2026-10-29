import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { highlights, site } from '../data/site'

export function Hero() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const photo = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const role = site.roles[roleIndex]
    let i = 0
    let mode: 'type' | 'hold' | 'delete' = 'type'
    let hold = 0
    const timer = window.setInterval(() => {
      if (mode === 'type') {
        i += 1
        setText(role.slice(0, i))
        if (i >= role.length) mode = 'hold'
      } else if (mode === 'hold') {
        hold += 1
        if (hold > 16) mode = 'delete'
      } else {
        i -= 1
        setText(role.slice(0, Math.max(i, 0)))
        if (i <= 0) setRoleIndex((n) => (n + 1) % site.roles.length)
      }
    }, 55)
    return () => window.clearInterval(timer)
  }, [roleIndex])

  const tilt = (e: MouseEvent<HTMLDivElement>) => {
    const el = photo.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `rotateX(${-y * 14}deg) rotateY(${x * 16}deg)`
  }

  return (
    <section className="hero" id="home">
      <div className="hero-copy-block">
        <p className="kicker">{site.availability}</p>
        <h1>
          Hello, I&apos;m
          <span>{site.shortName}</span>
        </h1>
        <p className="role-line">
          <b>{text}</b>
          <span className="caret" />
        </p>
        <p className="hero-copy">{site.summary}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View my work
          </a>
          <a className="btn btn-ghost" href="#contact">
            Hire me
          </a>
          <a className="btn btn-ghost" href="/Vinayak-Ram-RESUME.pdf" download>
            Download resume
          </a>
        </div>
      </div>
      <div className="photo-wrap">
        <div className="photo-orb" />
        <div
          className="photo-card"
          ref={photo}
          onMouseMove={tilt}
          onMouseLeave={() => {
            if (photo.current) photo.current.style.transform = 'rotateX(0) rotateY(0)'
          }}
        >
          <img src="./profile.jpg" alt={`${site.name} standing outdoors`} />
          <div className="photo-badge">
            {site.degree} · {site.location}
          </div>
        </div>
      </div>
      <div className="stats">
        {highlights.map((item) => (
          <div className="stat" key={item.label}>
            <small>{item.label}</small>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}
