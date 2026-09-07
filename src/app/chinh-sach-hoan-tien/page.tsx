import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Chính sách hoàn tiền — Giáo Án Pro" };

export default function RefundPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <article className="mx-auto max-w-2xl px-4 py-16">
          <h1 className="font-display text-3xl font-bold text-ink">Chính sách hoàn tiền</h1>
          <p className="mt-2 text-sm text-ink-muted">Cập nhật lần cuối: 07/09/2026</p>

          <div className="mt-8 space-y-8 text-ink-muted leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Điều kiện được hoàn tiền</h2>
              <p className="mt-2">Bạn được hoàn 100% số tiền đã thanh toán nếu đáp ứng đủ cả hai điều kiện:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Yêu cầu hoàn tiền trong vòng <strong className="text-ink">3 ngày</strong> kể từ lúc thanh toán thành công.</li>
                <li>
                  Chưa tạo quá <strong className="text-ink">3 giáo án/đề thi/bài tập</strong> kể từ lúc kích hoạt —
                  bạn có thể tự kiểm tra số lượng đã tạo trong mục &quot;Lịch sử&quot; của tài khoản.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Cách yêu cầu hoàn tiền</h2>
              <p className="mt-2">
                Liên hệ Zalo/điện thoại <strong className="text-ink">0944 851719</strong> hoặc email{" "}
                <strong className="text-ink">hungniwaco@gmail.com</strong>, kèm mã đơn hàng (bắt đầu bằng
                &quot;GA&quot;, có trong email xác nhận kích hoạt) hoặc số điện thoại/email đã đăng ký để
                đối chiếu.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Thời gian xử lý</h2>
              <p className="mt-2">
                Yêu cầu hợp lệ được hoàn tiền trong vòng 3–5 ngày làm việc, qua đúng tài khoản ngân
                hàng đã dùng để thanh toán ban đầu.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Trường hợp không được hoàn tiền</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Yêu cầu sau 3 ngày kể từ lúc thanh toán.</li>
                <li>Đã tạo quá 3 giáo án/đề thi/bài tập kể từ lúc kích hoạt.</li>
                <li>Tài khoản vi phạm Điều khoản dịch vụ (chia sẻ mã kích hoạt, bán lại nội dung...).</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Trường hợp lỗi hệ thống</h2>
              <p className="mt-2">
                Nếu bạn không thể sử dụng dịch vụ do lỗi kỹ thuật từ phía Giáo Án Pro, chúng tôi sẽ
                gia hạn thêm thời gian sử dụng tương ứng hoặc hoàn tiền, tùy mức độ ảnh hưởng thực
                tế — liên hệ theo thông tin ở trên để được hỗ trợ.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
