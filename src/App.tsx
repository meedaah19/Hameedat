import { useState } from 'react';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
} from 'lucide-react';
import { projects } from './projects';

const experience = [
  {
    role: 'Full-Stack Engineer, Contractor',
    company: 'AZM Nexus Limited',
    place: 'Lagos',
    period: 'Jul 2026 — Aug 2026',
    description: 'Built and maintained web applications, dashboards, APIs, and internal tools with a cross-functional team.',
  },
  {
    role: 'Frontend Developer, Intern',
    company: 'Depositoo',
    place: 'Remote',
    period: 'Nov 2025 — Mar 2026',
    description: 'Shipped responsive React and TypeScript features, integrated backend APIs, and improved product usability.',
  },
  {
    role: 'Frontend Developer, Intern',
    company: 'FlexiSAF Edusoft Limited',
    place: 'Nigeria',
    period: 'May 2025 — Aug 2025',
    description: 'Contributed React and Redux features through sprint planning, implementation, peer review, and testing.',
  },
  {
    role: 'Full-Stack Developer, Intern',
    company: 'Tarantulla.co',
    place: 'Remote',
    period: 'Jan 2025 — Jun 2025',
    description: 'Built a responsive React and Firebase application with real-time data and authentication.',
  },
  {
    role: 'Frontend Developer, Freelance',
    company: 'IneTech Morocco',
    place: 'Remote',
    period: 'Jan 2024 — Jun 2024',
    description: 'Delivered responsive client websites and translated design briefs into cross-device interfaces.',
  },
];

const skillGroups = [
  { name: 'Frontend', items: 'React · Next.js · TypeScript · Redux · Tailwind CSS' },
  { name: 'Backend', items: 'Node.js · Express · REST APIs · Authentication · Microservices' },
  { name: 'Data', items: 'PostgreSQL · MongoDB · Firebase · Supabase' },
  { name: 'Build & ship', items: 'Docker · Kubernetes · GitHub Actions · Vercel · Git' },
];

const processSteps = [
  {
    number: '01',
    title: 'Understand the need',
    description: 'I get clear on who the product is for, what is getting in their way, and what a useful outcome looks like.',
  },
  {
    number: '02',
    title: 'Plan the experience',
    description: 'I map the key flows, agree on the scope, and choose a practical approach for the design and technology.',
  },
  {
    number: '03',
    title: 'Build and test',
    description: 'I work in small steps, connect the interface to the underlying services, and test as the product takes shape.',
  },
  {
    number: '04',
    title: 'Launch and improve',
    description: 'I help get the work ready to ship, then use real feedback to guide what should get better next.',
  },
];

const collaborators = [
  {
    number: '01',
    title: 'Founders and small teams',
    description: 'Turn an early idea into a useful first product, from choosing the right scope to shipping the core experience.',
  },
  {
    number: '02',
    title: 'Designers and product people',
    description: 'Work together to make product flows and thoughtful designs feel clear, accessible, and natural to use.',
  },
  {
    number: '03',
    title: 'Developers and engineering teams',
    description: 'Contribute across frontend, backend, APIs, and integrations while keeping communication open and practical.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Hameedat Oyewopo, home">
          HAMEEDAT <span>OYEWOPO</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-resume" href="/hameedat-oyewopo-cv.pdf" target="_blank" rel="noreferrer">
            Resume <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="availability-dot" /> FULL-STACK DEVELOPER <span className="eyebrow-line" /></div>
            <h1>I don't just build what's visible.<br /><em>I build what makes it work.</em></h1>
            <p className="hero-intro">
              I’m Hameedat, a full-stack developer creating clear, responsive web experiences and the systems behind them.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="text-link" href="mailto:hameedattimileyinoyewopo@gmail.com">Say hello <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-location"><MapPin size={14} /> Lagos and Kwara, Nigeria <span className="location-divider" /> Working across the stack</div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img src="/hameedat-headshot.jpeg" alt="Hameedat Oyewopo" />
            </div>
            <div className="portrait-note"><span>HAMEEDAT OYEWOPO</span><span>DEVELOPER / BUILDER</span></div>
            <div className="hero-stamp" aria-hidden="true"><span>DESIGN</span><span>THINK</span><span>BUILD</span><ArrowDown size={15} /></div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="intro-band" id="about">
          <div className="section-wrap intro-grid">
            <p className="section-kicker">A LITTLE ABOUT ME <span>01</span></p>
            <div className="intro-content">
              <h2>I enjoy solving real-life problems <em>with technology.</em></h2>
              <div className="intro-detail">
                <p>
                  I work across the stack to build thoughtful products, from the interface to the underlying systems. I enjoy collaborating with designers, product people, and other developers to create clear, responsive experiences that are useful and accessible.
                </p>
                <a className="inline-link" href="/hameedat-oyewopo-cv.pdf" target="_blank" rel="noreferrer">More about my experience <ArrowUpRight size={15} /></a>
              </div>
            </div>
          </div>
          <div className="section-wrap toolkit-strip" aria-label="Core technologies">
            <span>React</span><span>TypeScript</span><span>Node.js</span><span>Next.js</span><span>Express</span><span>PostgreSQL</span><span>MongoDB</span>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div>
              <p className="section-kicker">PROJECTS <span>02</span></p>
              <h2>A few things I’ve <em>built.</em></h2>
            </div>
            <a className="text-link work-github" href="https://github.com/meedaah19" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={15} /></a>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <a className="project-visual" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`}>
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                  <span className="project-number">{project.number}</span>
                  <span className="project-open"><ArrowUpRight size={18} /></span>
                  <span className="project-kind">{project.kind}</span>
                </a>
                <div className="project-info">
                  <div className="project-title-line"><div><p>{project.type}</p><h3>{project.name}</h3></div><ArrowUpRight className="project-title-arrow" size={19} /></div>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-wrap experience-layout">
            <div className="experience-heading">
              <p className="section-kicker">MY EXPERIENCE <span>03</span></p>
              <h2>A little work,<br /><em>a lot of learning.</em></h2>
              <p>Each role has taught me something new, from shipping thoughtful interfaces to building the systems that power them.</p>
              <a className="inline-link" href="/hameedat-oyewopo-cv.pdf" target="_blank" rel="noreferrer">Full resume <ArrowUpRight size={15} /></a>
            </div>
            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-item" key={item.company}>
                  <div className="experience-period">{item.period}</div>
                  <div className="experience-detail">
                    <h3>{item.company}</h3>
                    <p className="experience-role">{item.role} <span>· {item.place}</span></p>
                    <p className="experience-description">{item.description}</p>
                  </div>
                  <ArrowUpRight className="experience-arrow" size={16} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach-section section-wrap" id="approach">
          <div className="approach-heading">
            <p className="section-kicker">HOW I BUILD <span>04</span></p>
            <h2>From the first question<br />to a product <em>people can use.</em></h2>
            <p>A good project needs more than code. This is how I take an idea from a real need to a thoughtful release.</p>
          </div>
          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="collaboration-section" id="collaboration">
          <div className="section-wrap collaboration-inner">
            <div className="collaboration-heading">
              <p className="section-kicker">GOOD WORK, TOGETHER <span>05</span></p>
              <h2>People I’d love<br />to <em>build with.</em></h2>
              <p>I enjoy working with people who care about solving a real problem and making the result genuinely useful.</p>
            </div>
            <div className="collaboration-list">
              {collaborators.map((person) => (
                <article className="collaboration-item" key={person.number}>
                  <span>{person.number}</span>
                  <div><h3>{person.title}</h3><p>{person.description}</p></div>
                  <ArrowUpRight size={17} />
                </article>
              ))}
              <a className="collaboration-link" href="mailto:hameedattimileyinoyewopo@gmail.com">Have a project in mind? Let’s talk <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="skills-topline">
            <p className="section-kicker">MY TOOLKIT <span>06</span></p>
            <p>Tools are only part of it. I care about how the pieces fit together.</p>
          </div>
          <div className="skills-grid">
            <h2>Good tools.<br /><em>Good thinking.</em></h2>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.name}>
                  <h3>{group.name}</h3>
                  <p>{group.items}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="education-note"><span>ALSO</span><p>B.Sc. Agriculture <i /> University of Ilorin <i /> 2021–2026</p></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="contact-kicker"><span className="availability-dot" /> LET’S CONNECT</div>
            <h2>Have something<br />good in <em>mind?</em></h2>
            <div className="contact-bottom">
              <p>For projects, collaboration, or a thoughtful conversation, reach out.</p>
              <a className="contact-email" href="mailto:hameedattimileyinoyewopo@gmail.com">Start a conversation <ArrowUpRight size={19} /></a>
            </div>
            <div className="contact-links">
              <a href="mailto:hameedattimileyinoyewopo@gmail.com"><Mail size={15} /> Email</a>
              <a href="https://github.com/meedaah19" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
              <a href="https://www.linkedin.com/in/hameedatoyewopo/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
              <a href="tel:+2348135027998">+234 813 502 7998 <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">HO<span>.</span></a>
        <span>Designed & built by Hameedat Oyewopo</span>
        <a href="#home">Back to top <ArrowDownRight size={14} /></a>
      </footer>
    </>
  );
}

export default App;