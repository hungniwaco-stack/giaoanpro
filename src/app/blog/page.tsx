import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = { title: "Blog & Prompt miễn phí — Giáo Án Pro" };

export default function BlogListPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="font-display text-3xl font-bold text-ink">Blog & Prompt miễn phí</h1>
          <p className="mt-2 text-ink-muted">
            Ứng dụng AI vào giáo dục, prompt và tool dùng ngay — không thu phí.
          </p>

          <div className="mt-10 space-y-6">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-2xl border border-ink/10 bg-paper-card p-6 shadow-sm hover:border-pine/40"
              >
                <p className="text-xs text-ink-muted">{post.date}</p>
                <h2 className="mt-1 font-display text-xl font-semibold text-ink">{post.title}</h2>
                <p className="mt-2 text-sm text-ink-muted">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
