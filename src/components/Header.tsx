"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/#apps", label: "Giáo án 3 cấp" },
  { href: "/blog", label: "Blog & Prompt miễn phí" },
  { href: "/danh-muc-sgk", label: "Danh mục SGK" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-pine focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
      >
        Bỏ qua để đến nội dung chính
      </a>
      <header className="border-b border-ink/10 bg-paper-card">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link href="/" className="font-display text-xl font-semibold text-pine">
            Giáo Án Pro
          </Link>
          <nav className="flex items-center gap-2 text-sm">
            {NAV_LINKS.map((link) => {
              const active = link.href !== "/#apps" && pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-3 py-2.5 ${
                    active ? "font-semibold text-pine-dark" : "text-ink-muted hover:text-pine-dark"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
