import { useEffect, useState } from 'react'
import { site } from '../data/site'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.15, 0.4, 0.7] },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`nav${open ? ' open' : ''}`}>
      <a className="logo" href="#home">
        {site.logo}
      </a>
      <button className="menu-btn" type="button" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
        Menu
      </button>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <a
              className={active === link.href ? 'active' : ''}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a className="nav-cta" href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </header>
  )
}
