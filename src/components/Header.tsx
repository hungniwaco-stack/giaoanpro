import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-ink/10 bg-paper-card">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-display text-xl font-semibold text-pine">
          ✎ Giáo Án Pro
        </Link>
        <nav className="flex items-center gap-6 text-sm text-ink-muted">
          <Link href="/#apps" className="hover:text-pine-dark">Giáo án 3 cấp</Link>
          <Link href="/blog" className="hover:text-pine-dark">Blog & Prompt miễn phí</Link>
        </nav>
      </div>
    </header>
  );
}
