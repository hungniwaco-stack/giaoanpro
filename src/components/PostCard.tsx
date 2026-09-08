import Link from "next/link";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block rounded-2xl border border-ink/10 bg-paper-card p-6 shadow-sm hover:border-pine/40"
    >
      <p className="text-xs text-ink-muted">{post.date}</p>
      <h2 className="mt-1 font-display text-xl font-semibold text-ink">{post.title}</h2>
      <p className="mt-2 text-sm text-ink-muted">{post.excerpt}</p>
    </Link>
  );
}
