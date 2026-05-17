import Link from 'next/link';

export default function Home() {
  return (
    <div className="page-shell">
      <section className="hero">
        <div className="hero-figure" style={{ backgroundImage: "url('/projects/mixed-use/hero.jpg')" }} />
        <div className="mt-8">
          <div className="hero-eyebrow muted">Architectural Design</div>
          <h1 className="text-5xl font-extrabold">Mixed-Use Development</h1>
          <p className="muted mt-2">A high-density urban ecosystem</p>
          <div className="mt-4 flex gap-2">
            <span className="chip">Office</span>
            <span className="chip">Retail</span>
            <span className="chip">Residential</span>
            <span className="chip">Hospitality</span>
          </div>
          <div className="mt-6">
            <Link href="/projects/mixed-use" className="underline">View Project →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
