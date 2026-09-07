import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = { title: "Miễn phí: Tool, Prompt, Chatbot — Giáo Án Pro" };

export default function MienPhiListPage() {
  const posts = POSTS.filter((p) => p.category === "mien-phi");

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="font-display text-3xl font-bold text-ink">Miễn phí</h1>
          <p className="mt-2 text-ink-muted">
            Tool, prompt, chatbot dùng ngay cho giáo viên — hoàn toàn không thu phí.
          </p>

          {posts.length === 0 ? (
            <p className="mt-10 text-sm text-ink-muted">Chưa có nội dung, quay lại sau nhé.</p>
          ) : (
            <div className="mt-10 space-y-6">
              {posts.map((post) => (
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
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
