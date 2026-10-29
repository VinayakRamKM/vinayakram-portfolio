import { useState } from 'react'
import { site } from '../data/site'

export function Contact() {
  const [status, setStatus] = useState('')

  return (
    <section id="contact">
      <div className="section-head">
        <h2>Contact me</h2>
        <p>Have an idea, internship, or collaboration? Draft a note and I will pick it up from GitHub.</p>
      </div>
      <div className="contact-grid">
        <div className="panel">
          <p className="kicker">Let&apos;s talk</p>
          <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', margin: '8px 0 12px' }}>
            {site.availability}
          </h3>
          <p className="hero-copy">
            I am based in {site.location} and studying at {site.university}. Reach me directly by email,
            phone, or GitHub.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={site.github} target="_blank" rel="noreferrer">
              @{site.githubLabel}
            </a>
            <a className="btn btn-ghost" href={`mailto:${site.email}`}>
              Email me
            </a>
          </div>
          <div className="contact-details">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
          </div>
        </div>
        <form
          className="panel"
          onSubmit={(e) => {
            e.preventDefault()
            const data = new FormData(e.currentTarget)
            const name = String(data.get('name') || '')
            const email = String(data.get('email') || '')
            const message = String(data.get('message') || '')
            const draft = `Hi Vinayak, I am ${name} (${email}).\n\n${message}`
            void navigator.clipboard.writeText(draft).then(
              () => setStatus('Message copied. Paste it into a GitHub issue or email when you are ready.'),
              () => setStatus('Draft ready. Copy it manually if clipboard access is blocked.'),
            )
            e.currentTarget.reset()
          }}
        >
          <label>
            Name
            <input name="name" required placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required placeholder="Your email" />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required placeholder="Your message" />
          </label>
          <button className="btn btn-primary" type="submit">
            Send message
          </button>
          {status && <p className="toast">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {site.name}. Built with passion.</span>
      <a href={site.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
      <a href="/Vinayak-Ram-RESUME.pdf" download>
        Resume
      </a>
    </footer>
  )
}
