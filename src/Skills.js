import { Link } from 'react-router-dom';

export default function Skills() {
  return (
    <div className="page-shell">
      <section className="section-card page-note">
        <h2>Skills</h2>
        <div className="page-body">
          <p>
            This is a starter page for design capabilities, software expertise,
            creative process, and studio strengths.
          </p>
          <p>
            Replace this section with a polished skills overview and distinct
            service areas like concept development, urban strategy, and
            sustainable design.
          </p>
          <Link to="/" className="page-back">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
