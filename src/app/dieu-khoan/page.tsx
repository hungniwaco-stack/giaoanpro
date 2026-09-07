import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Điều khoản dịch vụ — Giáo Án Pro" };

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <article className="mx-auto max-w-2xl px-4 py-16">
          <h1 className="font-display text-3xl font-bold text-ink">Điều khoản dịch vụ</h1>
          <p className="mt-2 text-sm text-ink-muted">Cập nhật lần cuối: 07/09/2026</p>

          <div className="mt-8 space-y-8 text-ink-muted leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">1. Bên cung cấp dịch vụ</h2>
              <p className="mt-2">
                Giáo Án Pro (gồm trang giaoanpro.com và các công cụ tại cap1.giaoanpro.com,
                cap2.giaoanpro.com, cap3.giaoanpro.com) do cá nhân <strong className="text-ink">Nguyễn Hữu Hùng</strong> xây
                dựng và vận hành, chưa đăng ký hình thức kinh doanh chính thức. Điều khoản này áp
                dụng chung cho cả 3 công cụ.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">2. Dịch vụ cung cấp</h2>
              <p className="mt-2">
                Giáo Án Pro là công cụ dùng AI hỗ trợ giáo viên soạn giáo án, ra đề thi, tạo bài
                tập theo chương trình Tiểu học/THCS/THPT, xuất ra file Word/PowerPoint. Nội dung do
                AI tạo ra là <strong className="text-ink">bản nháp hỗ trợ</strong>, không thay thế đánh giá chuyên
                môn của giáo viên — bạn cần đọc lại và điều chỉnh phù hợp với lớp học thực tế trước
                khi sử dụng chính thức.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">3. Dùng thử và gói trả phí</h2>
              <p className="mt-2">
                Mỗi trình duyệt được cấp một số lượt dùng thử miễn phí riêng cho từng tính năng
                (soạn giáo án, ra đề, tạo bài tập). Sau khi hết lượt, cần kích hoạt gói trả phí để
                tiếp tục sử dụng không giới hạn trong thời hạn gói.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">4. Kích hoạt và thanh toán</h2>
              <p className="mt-2">
                Thanh toán qua chuyển khoản VietQR (SePay), theo các gói 1 Tháng / 6 Tháng / 1 Năm
                được niêm yết công khai trên từng công cụ. Sau khi thanh toán thành công, hệ thống
                tự động kích hoạt ngay trên trình duyệt bạn đang dùng, đồng thời gửi mã kích hoạt
                qua email để bạn dùng thêm trên tối đa 3 thiết bị khác. Không chia sẻ mã kích hoạt
                cho người ngoài.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">5. Quyền sở hữu nội dung</h2>
              <p className="mt-2">
                Giáo án, đề thi, bài tập do bạn tạo ra thuộc toàn quyền sử dụng của bạn cho mục đích
                giảng dạy cá nhân. Bạn <strong className="text-ink">không được bán lại, phân phối thương mại</strong> nội
                dung này dưới bất kỳ hình thức nào.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">6. Giới hạn trách nhiệm</h2>
              <p className="mt-2">
                Giáo Án Pro nỗ lực đảm bảo nội dung AI tạo ra chính xác và bám sát chương trình,
                nhưng không cam kết tuyệt đối không có sai sót. Giáo viên chịu trách nhiệm cuối cùng
                về nội dung sử dụng trên lớp. Giáo Án Pro không chịu trách nhiệm cho hậu quả phát
                sinh từ việc sử dụng nội dung mà chưa qua kiểm tra, chỉnh sửa.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">7. Hành vi không được phép</h2>
              <p className="mt-2">
                Không chia sẻ/bán lại mã kích hoạt vượt số thiết bị cho phép, không cố gắng khai
                thác lỗi hệ thống để dùng vượt giới hạn gói, không dùng công cụ để tạo nội dung vi
                phạm pháp luật Việt Nam.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">8. Hoàn tiền</h2>
              <p className="mt-2">
                Xem chi tiết tại{" "}
                <Link href="/chinh-sach-hoan-tien" className="text-pine hover:text-pine-dark">
                  Chính sách hoàn tiền
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">9. Thay đổi điều khoản</h2>
              <p className="mt-2">
                Điều khoản có thể được cập nhật để phù hợp với dịch vụ thực tế. Phiên bản mới nhất
                luôn được đăng tại trang này.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">10. Liên hệ</h2>
              <p className="mt-2">
                Điện thoại/Zalo: 0944 851719 · Email: hungniwaco@gmail.com
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
