import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SGK_CATALOG } from "@/lib/sgk";

export const metadata: Metadata = {
  title: "Danh mục SGK miễn phí — Giáo Án Pro",
  description:
    "Kho sách giáo khoa Tiểu học, THCS, THPT miễn phí — tải về hoặc xem online, hỗ trợ giáo viên và học sinh học tập.",
};

export default function SgkCatalogPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="font-display text-3xl font-bold text-ink">Danh mục SGK</h1>
          <p className="mt-2 text-ink-muted">
            Sách giáo khoa Tiểu học, THCS, THPT — cung cấp hoàn toàn miễn phí để tạo điều kiện cho
            giáo viên và học sinh có tài liệu học tập online.
          </p>

          <div className="mt-10 space-y-10">
            {SGK_CATALOG.map((cap) => (
              <div key={cap.capLabel}>
                <h2 className="font-display text-xl font-semibold text-ink">{cap.capLabel}</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {cap.grades.map((grade) =>
                    grade.driveUrl ? (
                      <a
                        key={grade.label}
                        href={grade.driveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl border border-ink/10 bg-paper-card px-4 py-3 text-sm font-medium text-ink shadow-sm transition hover:border-pine/40 hover:text-pine-dark"
                      >
                        {grade.label}
                        <span aria-hidden="true" className="text-pine">→</span>
                      </a>
                    ) : (
                      <div
                        key={grade.label}
                        className="flex items-center justify-between rounded-xl border border-dashed border-ink/10 px-4 py-3 text-sm font-medium text-ink-muted"
                      >
                        {grade.label}
                        <span className="text-xs">Sắp cập nhật</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs text-ink-muted">
            Tài liệu được tổng hợp và chia sẻ phi thương mại, phục vụ mục đích học tập và giảng dạy.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
