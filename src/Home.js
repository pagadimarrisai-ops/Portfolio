import { Link } from "react-router-dom";

export default function Home() {
  const projects = [
    "Mixed-Use Development",
    "Business Center",
    "Mid-Century Modern Farmhouse",
    "Pavilion House",
    "Radhe Villa",
    "Atkins Library",
  ];

  return (
    <div className="page-shell">
         <div className="interactive-bg">
    <div className="bg-orb orb-one" />
    <div className="bg-orb orb-two" />
    <div className="bg-orb orb-three" />
    <div className="bg-grid" />
  </div>
      <nav className="portfolio-nav">
        <Link to="/" className="nav-logo">
          Sai Preetham
        </Link>

        <div className="nav-links">
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <section className="home-hero">
        <div className="hero-glow" />

        <div className="hero-copy">
          <div className="hero-eyebrow">Architectural Designer</div>

          <h1 className="hero-title">
            Designing spaces
            <br />
            that shape experience.
          </h1>

          <p className="hero-subtitle">
            Portfolio of mixed-use, workplace, residential, hospitality, and
            space planning projects.
          </p>

          <div className="tag-list">
            <span className="tag-pill">Revit</span>
            <span className="tag-pill">AutoCAD</span>
            <span className="tag-pill">BIM</span>
            <span className="tag-pill">Design</span>
          </div>

          <div className="hero-actions">
            <Link to="/projects" className="primary-btn">
              View Projects
            </Link>
            <Link to="/contact" className="secondary-btn">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-one">
            <span>01</span>
            <strong>Mixed-Use</strong>
          </div>

          <div className="floating-card card-two">
            <span>02</span>
            <strong>Workplace</strong>
          </div>

          <div className="model-frame">
            <div className="model-grid" />
            <div className="tower tower-a" />
            <div className="tower tower-b" />
            <div className="tower tower-c" />
          </div>
        </div>
      </section>

      <section className="section-card intro-section">
        <p className="section-label">Selected Work</p>
        <h2>
          Architecture developed through planning, documentation, and visual
          storytelling.
        </h2>
      </section>

      <section className="interactive-project-grid">
        {projects.map((project, index) => (
          <Link to="/projects" className="interactive-card" key={project}>
            <span>0{index + 1}</span>
            <h3>{project}</h3>
            <p>Explore project strategy, drawings, details, and visuals.</p>
          </Link>
        ))}
      </section>

      <section className="section-card dark-feature">
        <div>
          <p className="section-label">Profile</p>
          <h2>Design focused. Technically grounded. Detail oriented.</h2>
        </div>

        <p>
          I bring experience in architectural design, BIM coordination,
          construction documentation, consultant coordination, and presentation
          visuals across commercial, residential, and mixed-use projects.
        </p>
      </section>
    </div>
  );
}