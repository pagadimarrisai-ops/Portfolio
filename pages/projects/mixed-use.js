import Image from 'next/image';
import FormEvolution from '../../components/FormEvolution';
import FloorPlanTabs from '../../components/FloorPlanTabs';
import ProgramDiagram from '../../components/ProgramDiagram';

export default function MixedUse() {
  return (
    <article className="page-shell space-y-12">
      <section className="hero-section">
        <div className="hero-copy">
          <div className="hero-eyebrow muted">Project</div>
          <h1 className="hero-title">Mixed-Use Development</h1>
          <p className="hero-subtitle">A high-density urban ecosystem</p>
          <div className="tag-list mt-4">
            <span className="chip">Office</span>
            <span className="chip">Retail</span>
            <span className="chip">Residential</span>
            <span className="chip">Hospitality</span>
          </div>
        </div>
        <div className="mt-6 hero-figure" style={{ backgroundImage: "url('/projects/mixed-use/hero.jpg')" }} />
      </section>

      <section className="page-note section-card">
        <h2>Project Overview</h2>
        <p className="muted">A vertical city designed for continuous activity. Public life at the base. Private living above.</p>
      </section>

      <section className="grid md:grid-cols-4 gap-4">
        <div className="section-card p-6">
          <h3>Connected</h3>
          <p className="muted">Integrated with city movement</p>
        </div>
        <div className="section-card p-6">
          <h3>Layered</h3>
          <p className="muted">Public to private zoning</p>
        </div>
        <div className="section-card p-6">
          <h3>Flexible</h3>
          <p className="muted">Adaptable floor systems</p>
        </div>
        <div className="section-card p-6">
          <h3>Open</h3>
          <p className="muted">Light, air, and visual continuity</p>
        </div>
      </section>

      <section className="section-card">
        <h2>Site Response</h2>
        <p className="muted">Oriented for light, wind, and movement. Pedestrian-first planning with edge vehicular access.</p>
        <div className="mt-4">
          <img src="/projects/mixed-use/site-analysis.jpg" alt="site analysis" />
        </div>
      </section>

      <section className="section-card">
        <h2>Form Evolution</h2>
        <FormEvolution />
      </section>

      <section className="section-card md:flex md:items-start md:justify-between">
        <div>
          <h2>Program Stacking</h2>
          <p className="muted">Retail activates the ground. Offices and hospitality form the transition. Residential towers rise above.</p>
        </div>
        <div className="mt-6 md:mt-0">
          <ProgramDiagram />
        </div>
      </section>

      <section className="section-card">
        <h2>Master Plan</h2>
        <p className="muted">A pedestrian-oriented urban landscape.</p>
        <div className="mt-4">
          <img src="/projects/mixed-use/master-plan.jpg" alt="master plan" />
        </div>
      </section>

      <section className="section-card">
        <h2>Floor Plans</h2>
        <FloorPlanTabs />
      </section>

      <section className="section-card">
        <h2>Experience / Renders</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <figure className="bg-white border rounded overflow-hidden">
            <img src="/projects/mixed-use/render-1.jpg" alt="active public realm" />
            <figcaption className="p-3 muted">Active public realm</figcaption>
          </figure>
          <figure className="bg-white border rounded overflow-hidden">
            <img src="/projects/mixed-use/render-2.jpg" alt="human-scale retail" />
            <figcaption className="p-3 muted">Human-scale retail edge</figcaption>
          </figure>
          <figure className="bg-white border rounded overflow-hidden">
            <img src="/projects/mixed-use/render-3.jpg" alt="integrated urban life" />
            <figcaption className="p-3 muted">Integrated urban life</figcaption>
          </figure>
        </div>
      </section>

      <section className="section-card">
        <h2>Elevations</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <img src="/projects/mixed-use/elevation-1.jpg" alt="elevation 1" />
        </div>
        <p className="muted mt-3">Vertical hierarchy expressed through massing and facade rhythm.</p>
      </section>

      <section className="section-card">
        <h2>Closing Statement</h2>
        <p className="muted">A compact, high-density environment where living, working, and leisure coexist seamlessly.</p>
      </section>
    </article>
  );
}
