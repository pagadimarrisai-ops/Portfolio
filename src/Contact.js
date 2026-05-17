import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="page-shell">
      <section className="section-card page-note">
        <h2>Contact</h2>
        <div className="page-body">
          <p>Email: hello@example.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>LinkedIn: linkedin.com/in/your-profile</p>
          <p>
            Replace these placeholders with your real contact details and a
            short note about availability or project inquiries.
          </p>
          <Link to="/" className="page-back">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
