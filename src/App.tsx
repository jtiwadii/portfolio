import { certifications, contact, education, projects, roles, skillGroups, stats } from "./data";

const RESUME_PDF = `${import.meta.env.BASE_URL}Juganu-Tiwadi-Resume.pdf`;

function App() {
  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <nav className="nav">
            <a href="#stack">stack</a>
            <a href="#work">work</a>
            <a href="#projects">projects</a>
            <a href="#contact">contact</a>
            <a href={RESUME_PDF} target="_blank" rel="noreferrer" className="resume-link">
              resume.pdf
            </a>
          </nav>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="wrap">
          <div className="eyebrow">SENIOR FULL-STACK DEVELOPER &nbsp;·&nbsp; JAIPUR, INDIA</div>
          <h1>
            Juganu Tiwadi<span className="cursor">_</span>
          </h1>
          <p className="lede">
            I build production web systems end to end — data model and server through UI, testing and cloud deploy.
            Five years, four production platforms shipped across construction, procurement, retail and marketing.
          </p>
          <div className="actions">
            <a href="#projects" className="btn btn-primary">
              VIEW PROJECTS →
            </a>
            <a href="mailto:tiwadijuganu@gmail.com" className="btn">
              GET IN TOUCH
            </a>
            <a href={RESUME_PDF} target="_blank" rel="noreferrer" className="btn">
              DOWNLOAD CV
            </a>
          </div>
          <dl className="stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="stack" className="stack-section">
        <div className="wrap">
          <div className="section-label">01 — TECHNICAL STACK</div>
          <div className="stack-grid">
            {skillGroups.map((g) => (
              <div className="stack-card" key={g.label}>
                <div className="label">{g.label}</div>
                <div className="chips">
                  {g.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="wrap">
          <div className="section-label">02 — EXPERIENCE</div>
          <div className="roles">
            {roles.map((r) => (
              <div className="role" key={r.company}>
                <div>
                  <div className="company">{r.company}</div>
                  <div className="title">{r.title}</div>
                </div>
                <div className="period">{r.period}</div>
              </div>
            ))}
          </div>
          <div className="edu-cert-grid">
            <div>
              <div className="label">EDUCATION</div>
              <div className="education">
                {education.map((e) => (
                  <div className="item" key={e.degree}>
                    {e.degree}
                    <br />
                    <span className="school">{e.school}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="label">CERTIFICATIONS</div>
              <div className="certifications">
                {certifications.map((c) => (
                  <div key={c}>{c}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="wrap">
          <div className="projects-header">
            <div className="section-label">03 — SELECTED PROJECTS</div>
            <div className="count">{projects.length} systems</div>
          </div>
          <div className="projects">
            {projects.map((p) => (
              <article className="project-card" key={p.name}>
                <div className="project-meta">
                  <div>{p.org}</div>
                  <div>{p.num}</div>
                </div>
                <h3>{p.name}</h3>
                <p className="blurb">{p.blurb}</p>
                <div className="stack">
                  {p.stack.map((t) => (
                    <span className="stack-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="points">
                  {p.points.map((pt) => (
                    <li key={pt}>
                      <span className="bullet">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="wrap">
          <div className="section-label">04 — CONTACT</div>
          <h2>Open to senior full-stack roles.</h2>
          <div className="contact-grid">
            <a href={`mailto:${contact.email}`} className="contact-card">
              <div className="label">EMAIL</div>
              <div className="value">{contact.email}</div>
            </a>
            <a href={`tel:${contact.phoneHref}`} className="contact-card">
              <div className="label">PHONE</div>
              <div className="value">{contact.phone}</div>
            </a>
            <a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer" className="contact-card">
              <div className="label">LINKEDIN</div>
              <div className="value">{contact.linkedinHandle}</div>
            </a>
            <div className="contact-card">
              <div className="label">LOCATION</div>
              <div className="value">{contact.location}</div>
            </div>
          </div>
          <div className="footer-row">
            <div>© 2026 Juganu Tiwadi</div>
            <a href={RESUME_PDF} target="_blank" rel="noreferrer">
              resume.pdf ↓
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
