import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { APPS } from "@/lib/apps";
import { POSTS } from "@/lib/posts";
import { PLANS } from "@/lib/pricing";

export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content" className="flex-1">
        <section className="bg-pine px-4 py-6 text-center sm:py-8">
          <p className="mx-auto max-w-3xl font-display text-xl font-extrabold uppercase leading-snug tracking-tight text-paper sm:text-3xl md:text-4xl">
            <span className="block">Soạn Giáo Án - Thiết Kế Đề Thi</span>
            <span className="block">Tạo Bài Tập - Trò Chuyện AI</span>
          </p>
          <p className="mt-2 text-base font-bold uppercase tracking-widest text-sand sm:text-lg">
            Tiểu học - THCS - THPT
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:py-24">
          <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Thức đến 12h đêm soạn giáo án — hay để AI làm xong trong 30 giây?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-muted">
            3 công cụ riêng cho Tiểu học (chuẩn Công văn 2345), THCS &amp; THPT (chuẩn Công văn 5512)
            — chọn lớp, chọn bài, bấm nút, nhận ngay file Word/PowerPoint.
          </p>
          <p className="mt-3 text-sm font-medium text-pine-dark">
            Dùng thử miễn phí — không cần thẻ tín dụng, không cần đăng ký.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-16">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-ink">
              <span aria-hidden="true">🎁</span> Quà tặng miễn phí
            </h2>
            <Link href="/blog" className="text-sm font-medium text-pine hover:text-pine-dark">
              Xem tất cả →
            </Link>
          </div>
          <p className="mt-1 text-sm text-ink-muted">
            Prompt và tài liệu soạn bài dùng ngay, không thu phí — tải về trước khi thử app bên dưới.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {POSTS.slice(0, 2).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border-2 border-seal/30 bg-gradient-to-b from-sand to-paper-card p-6 shadow-md ring-4 ring-seal/5 transition hover:border-seal/50 hover:shadow-lg"
              >
                <p className="text-xs text-ink-muted">{post.date}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">{post.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{post.excerpt}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-seal">Nhận miễn phí →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-16">
          <h2 className="sr-only">Vì sao giáo viên cần Giáo Án Pro</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-ink/10 bg-paper-card p-5 text-center">
              <span className="text-2xl" aria-hidden="true">😴</span>
              <p className="mt-2 text-sm text-ink-muted">Thức khuya soạn bài mỗi tối, hôm sau vẫn phải lên lớp sớm</p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-paper-card p-5 text-center">
              <span className="text-2xl" aria-hidden="true">📄</span>
              <p className="mt-2 text-sm text-ink-muted">Soạn sai khung Công văn, bị tổ chuyên môn nhắc chỉnh lại</p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-paper-card p-5 text-center">
              <span className="text-2xl" aria-hidden="true">⏰</span>
              <p className="mt-2 text-sm text-ink-muted">Deadline nộp giáo án gấp, không kịp trau chuốt nội dung</p>
            </div>
          </div>
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

        <section className="mx-auto max-w-5xl px-4 pb-16">
          <h2 className="font-display text-2xl font-semibold text-ink">Giá chỉ từ {PLANS[0].price}/tháng</h2>
          <p className="mt-1 text-sm text-ink-muted">
            Áp dụng chung cho cả 3 cấp — dùng thử miễn phí trước, chỉ trả phí khi cần dùng lâu dài.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.label}
                className={`rounded-2xl border p-6 text-center ${
                  plan.highlight ? "border-pine bg-pine/5 shadow-md" : "border-ink/10 bg-paper-card"
                }`}
              >
                {plan.highlight && (
                  <span className="mb-2 inline-block rounded-full bg-pine px-2.5 py-1 text-xs font-medium text-paper">
                    Bán chạy nhất
                  </span>
                )}
                <p className="font-display text-lg font-semibold text-ink">{plan.label}</p>
                <p className="mt-1 text-2xl font-bold text-pine-dark">{plan.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
