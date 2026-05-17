import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="page-shell">
      <section className="section-card page-note">
        <h2>Projects</h2>
        <div className="page-body">
          <p>
            This is a starter projects page. Use it to showcase architectural
            cases, project narratives, and key visuals for your portfolio.
          </p>
          <p>
            Add your first project entry or a project gallery here when you are
            ready to replace the placeholder content.
          </p>
          <Link to="/" className="page-back">
            ← Back to Home
          </Link>
          hiiiiii for testing purposes only, please ignore this text and the next line
        </div>
      </section>
    </div>
  );
}
