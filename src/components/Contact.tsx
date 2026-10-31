import { site } from '../data/site'

export function Contact() {
  return (
    <section id="contact">
      <div className="section-head">
        <h2>Contact me</h2>
        <p>Have an idea, internship, or collaboration? Reach out through LinkedIn or email.</p>
      </div>
      <div className="panel">
        <p className="kicker">Let&apos;s talk</p>
        <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', margin: '8px 0 12px' }}>
          {site.availability}
        </h3>
        <p className="hero-copy">
          I am based in {site.location} and studying at {site.university}. Reach me directly by email or
          LinkedIn.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn btn-ghost" href={`mailto:${site.email}`}>
            Email me
          </a>
        </div>
        <div className="contact-details">
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
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
