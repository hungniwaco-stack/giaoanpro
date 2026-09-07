import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { POSTS } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — Giáo Án Pro` : "Bài viết — Giáo Án Pro" };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: "Nguyễn Hữu Hùng" },
    publisher: { "@type": "Organization", name: "Giáo Án Pro" },
    mainEntityOfPage: `https://giaoanpro.com/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <main id="main-content" className="flex-1">
        <article className="mx-auto max-w-2xl px-4 py-16">
          <Link href="/blog" className="text-sm text-pine hover:text-pine-dark">
            ← Tất cả bài viết
          </Link>
          <p className="mt-4 text-xs text-ink-muted">
            {post.date} · Tác giả: Nguyễn Hữu Hùng
          </p>
          <h1 className="mt-1 font-display text-3xl font-bold text-ink">{post.title}</h1>
          <div className="mt-6 space-y-4 text-ink-muted leading-relaxed">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
