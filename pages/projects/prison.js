import Link from 'next/link';

export default function PrisonProject() {
  return (
    <div className="page-shell">
      <h1 className="text-2xl font-semibold">PRISON</h1>
      <p className="muted mt-2">Academic project — placeholder page for PRISON.</p>
      <div className="mt-6">
        <Link href="/projects" className="page-back">← Back to Projects</Link>
      </div>
    </div>
  );
}
