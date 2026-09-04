import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { APPS } from "@/lib/apps";
import { POSTS } from "@/lib/posts";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:py-24">
          <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            AI soạn giáo án, đúng chuẩn, xong trong vài giây
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-muted">
            3 công cụ riêng cho Tiểu học, THCS, THPT — chọn lớp, chọn bài, bấm nút, nhận ngay
            file Word/PowerPoint đúng khung Công văn 5512.
          </p>
        </section>

        <section id="apps" className="mx-auto max-w-5xl px-4 pb-16">
          <h2 className="font-display text-2xl font-semibold text-ink">Giáo án 3 cấp</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {APPS.map((app) => (
              <div
                key={app.slug}
                className="flex flex-col rounded-2xl border border-ink/10 bg-paper-card p-6 shadow-sm"
              >
                <span
                  className={`w-fit rounded-full px-2.5 py-1 text-xs font-medium ${
                    app.status === "live" ? "bg-pine/10 text-pine-dark" : "bg-sand text-ink-muted"
                  }`}
                >
                  {app.status === "live" ? "Đang hoạt động" : "Sắp ra mắt"}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{app.name}</h3>
                <p className="text-sm text-ink-muted">{app.grades}</p>
                <p className="mt-2 flex-1 text-sm text-ink-muted">{app.description}</p>

                {app.status === "live" ? (
                  <a
                    href={app.href}
                    className="mt-5 rounded-xl bg-pine py-2.5 text-center text-sm font-semibold text-paper hover:bg-pine-dark"
                  >
                    Dùng thử ngay →
                  </a>
                ) : (
                  <span className="mt-5 rounded-xl border border-ink/10 py-2.5 text-center text-sm font-medium text-ink-muted/60">
                    Đang phát triển
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-20">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-semibold text-ink">Blog & Prompt miễn phí</h2>
            <Link href="/blog" className="text-sm font-medium text-pine hover:text-pine-dark">
              Xem tất cả →
            </Link>
          </div>
          <p className="mt-1 text-sm text-ink-muted">
            Chia sẻ prompt, tool và ứng dụng AI vào giáo dục — hoàn toàn miễn phí.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {POSTS.slice(0, 2).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-ink/10 bg-paper-card p-6 shadow-sm hover:border-pine/40"
              >
                <p className="text-xs text-ink-muted/70">{post.date}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">{post.title}</h3>
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
