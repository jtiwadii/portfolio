import { useEffect, useRef, useState, type MouseEvent } from "react";
import { certifications, contact, education, marqueeStack, projects, roles, skillGroups, stats, type Project } from "./data";

const RESUME_PDF = `${import.meta.env.BASE_URL}Juganu-Tiwadi-Resume.pdf`;

// Motion switch from the design's "tweaks". Accent hue lives in index.css.
const CARD_TILT = true;

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function useScrollEffects() {
  const progressRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal]");

    let io: IntersectionObserver | undefined;
    if (reduced) {
      revealTargets.forEach((el) => el.classList.add("is-in"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            el.style.transitionDelay = `${el.dataset.delay ?? 0}ms`;
            el.classList.add("is-in");
            io?.unobserve(el);
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
      );
      revealTargets.forEach((el) => io?.observe(el));
    }

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (progressRef.current) progressRef.current.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
        if (reduced) return;
        if (heroRef.current && y < window.innerHeight * 1.2) {
          heroRef.current.style.transform = `translate3d(0,${(y * 0.16).toFixed(2)}px,0)`;
          heroRef.current.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.82)));
        }
        if (gridRef.current) gridRef.current.style.backgroundPosition = `0 ${(y * 0.3).toFixed(1)}px`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const onMove = (e: PointerEvent) => {
      if (glowRef.current) glowRef.current.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`;
    };
    if (!reduced && window.matchMedia("(hover: hover)").matches) {
      window.addEventListener("pointermove", onMove, { passive: true });
    }

    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { progressRef, glowRef, gridRef, heroRef };
}

function onTilt(e: MouseEvent<HTMLElement>) {
  if (!CARD_TILT || prefersReducedMotion()) return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width - 0.5;
  const py = (e.clientY - r.top) / r.height - 0.5;
  el.style.transform = `perspective(1000px) rotateY(${(px * 7).toFixed(2)}deg) rotateX(${(-py * 6).toFixed(2)}deg) translateY(-6px)`;
}

function offTilt(e: MouseEvent<HTMLElement>) {
  e.currentTarget.style.transform = "none";
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [name, subtitle] = project.name.split(" — ", 2);
  const detailsId = `project-${project.num}-details`;

  return (
    // Open state goes in data-open rather than className: the reveal observer adds classes directly.
    <article className="card" data-reveal data-open={open} onMouseMove={onTilt} onMouseLeave={offTilt}>
      <div className="card-shot">
        <div className="card-sweep" aria-hidden="true" />
        <div className="card-caption">{project.org}</div>
        <div className="card-no">{project.num}</div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        {subtitle && <div className="card-subtitle">{subtitle}</div>}
        <p className="card-desc">{project.blurb}</p>
        <ul className="tags">
          {project.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="card-details" id={detailsId}>
          <ul className="card-points">
            {project.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="card-link"
          aria-expanded={open}
          aria-controls={detailsId}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Less" : "Details"} <span aria-hidden="true">{open ? "↑" : "→"}</span>
        </button>
      </div>
    </article>
  );
}

function App() {
  const { progressRef, glowRef, gridRef, heroRef } = useScrollEffects();

  return (
    <>
      <div className="vignette" aria-hidden="true" />
      <div className="progress" ref={progressRef} aria-hidden="true" />
      <div className="glow" ref={glowRef} aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-dot" aria-hidden="true" />
          juganu.tiwadi
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#path">Path</a>
          <a href={RESUME_PDF} target="_blank" rel="noreferrer">
            Résumé
          </a>
          <a className="nav-cta" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section id="top" className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-grid" ref={gridRef} aria-hidden="true" />
          <div className="hero-fade" aria-hidden="true" />

          <div className="hero-inner" ref={heroRef}>
            <div className="hero-kicker">Senior full-stack developer — Jaipur, India</div>

            <h1 className="hero-name">
              <span className="line">
                <span className="word">Juganu</span>
              </span>
              <span className="line">
                <span className="word gradient">Tiwadi</span>
              </span>
            </h1>

            <div className="hero-row">
              <div className="hero-copy">
                <p className="roles">
                  <span>Production web systems, end to end.</span>
                  <span aria-hidden="true">Multi-tenant SaaS, ERPs &amp; offline-first apps.</span>
                  <span aria-hidden="true">Five years shipping software that lasts.</span>
                </p>
                <p className="hero-lede">
                  I build production web systems end to end — data model and server through UI, testing and cloud
                  deploy. Five years of platforms shipped across construction, procurement, retail and marketing.
                </p>
                <div className="hero-ctas">
                  <a className="btn btn-solid" href="#work">
                    Selected work <span className="mono" aria-hidden="true">↓</span>
                  </a>
                  <a className="btn btn-ghost" href="#contact">
                    Get in touch
                  </a>
                </div>
              </div>

              <dl className="stats">
                {stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <dt className="stat-label">{s.label}</dt>
                    <dd className="stat-value">
                      {s.value}
                      {s.accent && <span>{s.accent}</span>}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="scroll-cue" aria-hidden="true">
            Scroll
            <span className="scroll-cue-track" />
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-head" data-reveal>
            <h2 className="h2">Selected work</h2>
            <span className="section-meta">{String(projects.length).padStart(2, "0")} projects — 2020 / 2026</span>
          </div>
          <div className="projects">
            {projects.map((p) => (
              <ProjectCard project={p} key={p.num} />
            ))}
          </div>
        </section>

        <section className="marquee" aria-label="Core stack">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <ul className="marquee-group" key={copy} aria-hidden={copy === 1 || undefined}>
                {marqueeStack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <section id="about" className="section about">
          <div data-reveal>
            <span className="eyebrow">About</span>
            <h2 className="about-title">I build the systems businesses run on — and make sure the numbers are right.</h2>
          </div>
          <div data-reveal data-delay="120">
            <p>
              Five years in, most of my work spans the data model, server and UI of business-critical platforms:
              multi-tenant SaaS, construction and retail ERPs, procurement and asset systems. I like problems with a
              hard constraint attached — financial data that can never be wrong, dashboards that have to load fast,
              shops that must keep working offline.
            </p>
            <p>
              Lately that includes AI features too — streaming assistants with tool use, document extraction, and the
              guardrails that keep them dependable in production.
            </p>
            <dl className="facts">
              {skillGroups.map((g) => (
                <div className="fact" key={g.label}>
                  <dt>{g.label}</dt>
                  <dd>{g.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="path" className="section path">
          <h2 className="h2" data-reveal>
            Path
          </h2>
          <ol className="timeline">
            {roles.map((r) => (
              <li className="role" data-reveal key={r.company}>
                <span className="role-years">{r.period}</span>
                <div>
                  <div className="role-title">{r.title}</div>
                  <div className="role-org">{r.company}</div>
                </div>
                <p className="role-note">{r.note}</p>
              </li>
            ))}
            {education.map((e) => (
              <li className="role" data-reveal key={e.degree}>
                <span className="role-years">{e.year}</span>
                <div>
                  <div className="role-title">{e.degree}</div>
                  <div className="role-org">{e.school}</div>
                </div>
              </li>
            ))}
            <li className="role" data-reveal>
              <span className="role-years">Certifications</span>
              <div>
                <div className="role-title">Continuing education</div>
                <div className="role-org">Udemy</div>
              </div>
              <p className="role-note">{certifications.map((c) => c.replace(/ — Udemy$/, "")).join(" · ")}</p>
            </li>
          </ol>
        </section>
      </main>

      <footer id="contact" className="contact">
        <div className="contact-bg" aria-hidden="true" />
        <div className="contact-inner wrap" data-reveal>
          <span className="eyebrow">Contact</span>
          <h2 className="contact-title">
            Let's build
            <br />
            something durable.
          </h2>
          <a className="contact-email" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <div className="socials">
            <a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`https://${contact.github}`} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
            <a href={RESUME_PDF} target="_blank" rel="noreferrer">
              Résumé
            </a>
          </div>
        </div>
        <div className="footer wrap">
          <span>© 2026 Juganu Tiwadi</span>
          <span>Jaipur — 26.91° N, 75.79° E</span>
        </div>
      </footer>
    </>
  );
}

export default App;
