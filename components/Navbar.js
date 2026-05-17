import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-30 border-b">
      <div className="site-container flex items-center justify-between py-4">
        <Link href="/" className="font-semibold tracking-wider">
          ARCHITECTURE
        </Link>
        <nav className="flex gap-6 items-center text-sm">
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
