import Link from 'next/link';

export default function PavilionHouse() {
  return (
    <div className="page-shell">
      <h1 className="text-2xl font-semibold">THE PAVILION HOUSE</h1>
      <p className="muted mt-2">Residential project — placeholder page for The Pavilion House.</p>
      <div className="mt-6">
        <Link href="/projects" className="page-back">← Back to Projects</Link>
      </div>
    </div>
  );
}
