import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TRO_LY_CATALOG } from "@/lib/tro-ly-hoc-tap";

export const metadata: Metadata = {
  title: "Trợ lý Học tập AI — Giáo Án Pro",
  description:
    "Kho trợ lý học tập AI (Gemini Gem) theo từng lớp, từng môn — hỗ trợ học sinh tự học, miễn phí.",
};

export default function TroLyHocTapPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="font-display text-3xl font-bold text-ink">Trợ lý Học tập</h1>
          <p className="mt-2 text-ink-muted">
            Trợ lý AI (Gemini Gem) theo từng lớp, từng môn — hỗ trợ học sinh tự học, hoàn toàn miễn phí.
          </p>

          <div className="mt-10 space-y-10">
            {TRO_LY_CATALOG.map((cap) => (
              <div key={cap.capLabel}>
                <h2 className="font-display text-xl font-semibold text-ink">{cap.capLabel}</h2>
                {cap.subjects.map((subject) => (
                  <div key={subject.subjectLabel} className="mt-4">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-ink-muted">
                      {subject.subjectLabel}
                    </h3>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {subject.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.geminiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-3 rounded-xl border border-ink/10 bg-paper-card px-4 py-3 text-sm font-medium text-ink shadow-sm transition hover:border-pine/40 hover:text-pine-dark"
                        >
                          {item.label}
                          <span aria-hidden="true" className="shrink-0 text-pine">→</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs text-ink-muted">
            Trợ lý học tập chạy trên Gemini Gem của Google — cần đăng nhập tài khoản Google để sử dụng.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
