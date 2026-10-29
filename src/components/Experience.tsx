import { certifications, coursework, experience } from '../data/site'

export function Experience() {
  return (
    <section id="experience">
      <div className="section-head">
        <h2>Experience</h2>
        <p>Internships where I have shipped interfaces, data workflows, and computer-vision experiments.</p>
      </div>
      <div className="experience-list">
        {experience.map((item, index) => (
          <article className="experience-item" key={item.company}>
            <div className="experience-marker">
              <span>0{index + 1}</span>
            </div>
            <div className="experience-body">
              <div className="experience-top">
                <div>
                  <p className="tag">{item.period}</p>
                  <h3>{item.role}</h3>
                  <strong>{item.company}</strong>
                </div>
                <div className="meta">
                  {item.tools.map((tool) => <span key={tool}>{tool}</span>)}
                </div>
              </div>
              <p className="experience-summary">{item.summary}</p>
              <ul>
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <div className="learning-grid">
        <div className="panel">
          <p className="kicker">Academic foundation</p>
          <h3>Coursework</h3>
          <div className="coursework">
            {coursework.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="panel">
          <p className="kicker">Credentials</p>
          <h3>Certifications</h3>
          <div className="cert-list">
            {certifications.map((cert) => (
              <div className="cert" key={cert.title}>
                <strong>{cert.title}</strong>
                <small>{cert.issuer}</small>
                <p>{cert.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
