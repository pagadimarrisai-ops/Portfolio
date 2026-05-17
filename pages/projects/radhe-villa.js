import Link from 'next/link';

export default function RadheVilla() {
  return (
    <div className="page-shell">
      <h1 className="text-2xl font-semibold">RADHE VILLA</h1>
      <p className="muted mt-2">Residential project — placeholder page for Radhe Villa.</p>
      <div className="mt-6">
        <Link href="/projects" className="page-back">← Back to Projects</Link>
      </div>
    </div>
  );
}
