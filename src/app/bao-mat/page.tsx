import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chính sách bảo mật — Giáo Án Pro",
  description:
    "Trang giaoanpro.com dùng Google Analytics và pixel đo lường quảng cáo của OpenAI như thế nào, cookie nào được đặt và cách kiểm soát.",
  alternates: { canonical: "/bao-mat" },
};

const APP_POLICIES = [
  { label: "Cấp 1 (Tiểu học)", href: "https://cap1.giaoanpro.com/bao-mat" },
  { label: "Cấp 2 (THCS)", href: "https://cap2.giaoanpro.com/bao-mat" },
  { label: "Cấp 3 (THPT)", href: "https://cap3.giaoanpro.com/bao-mat" },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <article className="mx-auto max-w-2xl px-4 py-16">
          <h1 className="font-display text-3xl font-bold text-ink">Chính sách bảo mật</h1>
          <p className="mt-2 text-sm text-ink-muted">Cập nhật lần cuối: 24/10/2026</p>

          <div className="mt-8 space-y-8 text-ink-muted leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">1. Phạm vi</h2>
              <p className="mt-2">
                Chính sách này áp dụng cho trang <strong className="text-ink">www.giaoanpro.com</strong> (giới thiệu, blog,
                tài liệu miễn phí, danh mục SGK, trợ lý học tập). Ba công cụ soạn giáo án có chính sách bảo mật riêng, vì
                chúng xử lý nội dung bạn nhập và thông tin thanh toán:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {APP_POLICIES.map((p) => (
                  <li key={p.href}>
                    <a href={p.href} className="text-pine hover:text-pine-dark">
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">2. Trang này không thu thập thông tin cá nhân của bạn</h2>
              <p className="mt-2">
                Trang chủ không yêu cầu đăng ký, không có biểu mẫu hay ô nhập thông tin. Chúng tôi không nhận họ tên, email
                hay số điện thoại của bạn qua trang này.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">3. Công cụ đo lường chúng tôi dùng</h2>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-ink">Google Analytics 4</strong> (nạp qua Google Tag Manager): ghi nhận số lượt
                  truy cập, trang đã xem, nguồn truy cập, loại thiết bị, vị trí ở mức quốc gia/thành phố và việc bạn bấm nút
                  &quot;Dùng thử ngay&quot;. Công cụ này dùng cookie của Google.
                </li>
                <li>
                  <strong className="text-ink">Pixel đo lường quảng cáo ChatGPT của OpenAI</strong>: giúp chúng tôi biết
                  quảng cáo trên ChatGPT có hiệu quả không. Pixel ghi nhận lượt truy cập và việc bạn bấm &quot;Dùng thử
                  ngay&quot;, đồng thời đặt hai cookie: <code>__oppref</code> (lưu mã lượt bấm quảng cáo, giữ 30 ngày, chỉ có
                  khi bạn đến từ quảng cáo ChatGPT) và <code>__obref</code> (mã trình duyệt ngẫu nhiên, giữ 365 ngày, đặt cho
                  mọi người truy cập). Hai cookie này dùng chung cho giaoanpro.com và các công cụ cap1, cap2, cap3.
                </li>
                <li>
                  <strong className="text-ink">Nhà cung cấp lưu trữ (Vercel)</strong> xử lý các yêu cầu truy cập trang và có
                  thể ghi nhật ký kỹ thuật như địa chỉ IP theo chính sách của họ.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">4. Mục đích và chia sẻ dữ liệu</h2>
              <p className="mt-2">
                Dữ liệu đo lường chỉ dùng để biết có bao nhiêu người ghé trang, họ đến từ đâu và quảng cáo có hiệu quả không;
                nó được gửi tới Google và OpenAI cho mục đích đó. Chúng tôi không bán dữ liệu của bạn. Nội dung bạn soạn trong
                các công cụ cap1, cap2, cap3 không được gửi tới Google Analytics hay pixel đo lường quảng cáo trên trang chủ.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">5. Cách kiểm soát</h2>
              <p className="mt-2">
                Bạn có thể xoá hoặc chặn cookie trong trình duyệt, hoặc dùng tiện ích chặn theo dõi; trang vẫn dùng bình
                thường khi các công cụ đo lường bị chặn.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">6. Thay đổi và liên hệ</h2>
              <p className="mt-2">
                Khi thêm hoặc bớt công cụ đo lường, chúng tôi cập nhật trang này. Câu hỏi về dữ liệu của bạn: Điện thoại/Zalo
                0944 851719 · Email hungniwaco@gmail.com. Xem thêm{" "}
                <Link href="/dieu-khoan" className="text-pine hover:text-pine-dark">
                  Điều khoản dịch vụ
                </Link>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
