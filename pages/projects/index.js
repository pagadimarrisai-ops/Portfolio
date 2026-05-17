import Link from 'next/link';

export default function Projects() {
  const items = [
    { href: '/projects/mixed-use', title: 'Mixed-Use Development', note: 'High-density urban ecosystem — Office, Retail, Residential.' },
    { href: '/projects/business-center', title: 'BUSINESS CENTER', note: 'Commercial project' },
    { href: '/projects/the-pavilion-house', title: 'THE PAVILION HOUSE', note: 'Residential project' },
    { href: '/projects/prison', title: 'PRISON', note: 'Academic project' },
    { href: '/projects/radhe-villa', title: 'RADHE VILLA', note: '' },
    { href: '/projects/atkins-library-uncc', title: 'Atkins Library UNCC', note: 'Academic project' },
  ];

  return (
    <div className="page-shell">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="muted mt-2">Portfolio of selected architectural work.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((it) => (
          <Link key={it.href} href={it.href} className="page-card">
            <h3>{it.title}</h3>
            <p className="muted">{it.note}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
