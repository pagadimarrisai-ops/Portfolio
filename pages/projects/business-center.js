import Link from 'next/link';

export default function BusinessCenter() {
  return (
    <div className="page-shell">
      <h1 className="text-2xl font-semibold">BUSINESS CENTER</h1>
      <p className="muted mt-2">Commercial project — placeholder page for the Business Center.</p>
      <div className="mt-6">
        <Link href="/projects" className="page-back">← Back to Projects</Link>
      </div>
    </div>
  );
}
