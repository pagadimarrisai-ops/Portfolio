export default function Footer() {
  return (
    <footer className="w-full border-t mt-12">
      <div className="site-container py-8 text-sm muted">
        © {new Date().getFullYear()} Architect — Contact: hello@example.com
      </div>
    </footer>
  );
}
