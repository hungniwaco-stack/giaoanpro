import { PLANS } from "./pricing";

export interface FaqItem {
  question: string;
  answer: string;
  link?: { href: string; label: string };
}

// Mọi câu trả lời đều lấy từ hành vi thật của 3 app và các trang điều khoản/hoàn tiền —
// sửa chính sách hay giá thì sửa lại ở đây (giá tự lấy từ pricing.ts).
export const FAQS: FaqItem[] = [
  {
    question: "Giáo Án Pro là gì?",
    answer:
      "Giáo Án Pro là bộ 3 công cụ AI dành cho giáo viên: Cấp 1 (Tiểu học, chuẩn Công văn 2345), Cấp 2 (THCS) và Cấp 3 (THPT) chuẩn Công văn 5512. Mỗi công cụ giúp soạn giáo án, thiết kế đề thi, tạo bài tập và trò chuyện với AI: bạn chọn lớp, môn, tên bài rồi nhận file Word. Giáo án còn xuất được file PowerPoint.",
  },
  {
    question: "Dùng thử miễn phí được bao nhiêu?",
    answer:
      "Mỗi cấp cho 3 lượt dùng thử miễn phí cho từng chức năng (soạn giáo án, đề thi, bài tập, trò chuyện AI). Không cần thẻ và không cần đăng ký tài khoản. Riêng Cấp 3, mỗi chức năng được xuất file Word/PowerPoint miễn phí 1 lần; muốn xuất thêm cần gói trả phí.",
  },
  {
    question: "Giá bao nhiêu?",
    answer: `${PLANS.map((p) => `${p.label} ${p.price}`).join(", ")}. Giá như nhau ở cả 3 cấp, nhưng gói được kích hoạt riêng cho từng cấp: gói mua ở cấp nào dùng cho cấp đó.`,
  },
  {
    question: "Thanh toán và kích hoạt như thế nào?",
    answer:
      "Thanh toán bằng chuyển khoản qua mã VietQR. Thanh toán thành công, hệ thống tự kích hoạt ngay trên trình duyệt bạn đang dùng và gửi mã kích hoạt qua email để bạn dùng thêm trên tối đa 3 thiết bị khác.",
  },
  {
    question: "Tôi đổi máy hoặc xoá dữ liệu trình duyệt thì có mất gói không?",
    answer:
      "Không mất. Bạn nhập mã kích hoạt trong email thanh toán vào ứng dụng để kích hoạt lại; mỗi mã dùng được tối đa 3 thiết bị. Nếu không tìm thấy mã, hãy liên hệ hỗ trợ để được kiểm tra.",
  },
  {
    question: "Có được hoàn tiền không?",
    answer:
      "Bạn được hoàn 100% nếu yêu cầu trong vòng 3 ngày kể từ lúc thanh toán thành công và chưa tạo quá 3 giáo án/đề thi/bài tập kể từ lúc kích hoạt.",
    link: { href: "/chinh-sach-hoan-tien", label: "Xem chính sách hoàn tiền" },
  },
  {
    question: "Nội dung AI tạo ra có chính xác không?",
    answer:
      "AI tạo bản nháp để bạn tiết kiệm thời gian, không thay thế chuyên môn của giáo viên. Bạn cần đọc lại và chỉnh sửa nội dung, số liệu, mục tiêu bài học trước khi dùng giảng dạy hoặc nộp cho tổ chuyên môn.",
  },
  {
    question: "Giáo án có đúng khung Công văn không?",
    answer:
      "Giáo án được soạn theo cấu trúc của Công văn 2345 (Tiểu học) và Công văn 5512 (THCS, THPT), bám sát sách Kết nối tri thức. Mỗi giáo án có sẵn dòng ngày soạn, số tiết và bảng chữ ký duyệt ở cuối để bạn điền khi nộp.",
  },
  {
    question: "Sở hoặc trường tôi có mẫu giáo án riêng, dùng được không?",
    answer:
      "Được. Trong mục Cấu Hình Cá Nhân của mỗi cấp, bạn đính kèm công văn hoặc phụ lục của Sở/trường (Word .docx, PDF hoặc ảnh chụp; tối đa 3 tài liệu, mỗi file tối đa 4MB, có 3 lượt phân tích miễn phí). AI sẽ đọc và soạn giáo án bám theo yêu cầu đó. Lưu ý: tài liệu dạng kế hoạch giáo dục cả năm (phân phối chương trình) hiện chưa được hỗ trợ, và file Word .doc cũ cần lưu lại thành .docx.",
  },
  {
    question: "Dữ liệu của tôi được xử lý thế nào? Có cần tạo tài khoản không?",
    answer:
      "Không cần tạo tài khoản: hệ thống nhận diện trình duyệt của bạn bằng một mã ẩn danh. Nội dung bạn nhập (và tài liệu bạn đính kèm) được gửi đến Google Gemini để tạo kết quả; lịch sử giáo án được lưu tối đa khoảng 400 ngày để bạn xem lại. Chúng tôi không bán dữ liệu cho bên thứ ba vì mục đích quảng cáo. Chi tiết có trong Chính sách bảo mật ở chân trang của từng ứng dụng.",
  },
  {
    question: "Tôi có thể làm cộng tác viên để nhận hoa hồng không?",
    answer:
      "Có. Mỗi cấp có chương trình cộng tác viên: bạn nhận 30% số tiền mỗi lần khách do bạn giới thiệu thanh toán, trọn đời, kể cả khi họ gia hạn. Đăng ký miễn phí bằng email và tài khoản ngân hàng của bạn.",
    link: { href: "https://cap1.giaoanpro.com/doi-tac", label: "Xem chương trình cộng tác viên" },
  },
  {
    question: "Liên hệ hỗ trợ bằng cách nào?",
    answer: "Nhắn Zalo hoặc gọi 0944 851719, hoặc gửi email hungniwaco@gmail.com. Bạn cũng có thể nhắn qua Fanpage Giáo Án Pro.",
  },
];
