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
      "Giáo Án Pro là bộ 3 công cụ AI dành cho giáo viên Việt Nam, chia theo cấp học: Cấp 1 cho Tiểu học (chuẩn Công văn 2345), Cấp 2 và Cấp 3 cho THCS, THPT (chuẩn Công văn 5512). Mỗi công cụ giúp soạn giáo án, thiết kế đề thi, tạo bài tập và trò chuyện với AI để hỏi đáp chuyên môn. Cách dùng đơn giản: chọn khối lớp, chọn môn học, nhập tên bài rồi bấm soạn — AI trả về giáo án hoàn chỉnh đúng cấu trúc Công văn, bám sát sách Kết nối tri thức, có sẵn dòng ngày soạn, số tiết và bảng chữ ký duyệt để điền khi nộp tổ chuyên môn. Xuất được cả file Word và PowerPoint chỉ trong vài giây. Không cần tạo tài khoản, không cần thẻ tín dụng — dùng thử miễn phí ngay trên trình duyệt, mỗi chức năng có 3 lượt dùng thử.",
  },
  {
    question: "Dùng thử miễn phí được bao nhiêu?",
    answer:
      "Mỗi cấp cho 3 lượt dùng thử miễn phí cho từng chức năng (soạn giáo án, đề thi, bài tập, trò chuyện AI). Không cần thẻ và không cần đăng ký tài khoản. Riêng Cấp 3, mỗi chức năng được xuất file Word/PowerPoint miễn phí 1 lần; muốn xuất thêm cần gói trả phí.",
  },
  {
    question: "Giá bao nhiêu?",
    answer: `Ba mức gói, dùng chung một giá cho cả 3 cấp: ${PLANS.map((p) => `${p.label} ${p.price}`).join(", ")}. Gói được kích hoạt riêng cho từng cấp — mua ở cấp nào (Tiểu học, THCS hay THPT) thì chỉ dùng được cho cấp đó, muốn dùng cả 3 cấp cần mua riêng từng gói. Trước khi mua, bạn có thể dùng thử miễn phí mỗi chức năng 3 lượt để xem chất lượng giáo án có phù hợp không, không cần thẻ tín dụng hay đăng ký tài khoản. Thanh toán một lần cho cả kỳ (1 tháng, 6 tháng hoặc 1 năm), không tự động gia hạn hay trừ tiền định kỳ. Gói 6 tháng đang là gói được chọn nhiều nhất vì mức giá tính theo tháng rẻ hơn gói 1 tháng mà không cần cam kết dài như gói 1 năm.`,
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
      "Có. Bạn được hoàn 100% số tiền đã thanh toán nếu đáp ứng đủ hai điều kiện: yêu cầu trong vòng 3 ngày kể từ lúc thanh toán thành công, và chưa tạo quá 3 giáo án/đề thi/bài tập kể từ lúc kích hoạt (tự kiểm tra số lượng trong mục Lịch sử của tài khoản). Để yêu cầu hoàn tiền, liên hệ Zalo, điện thoại hoặc email, kèm mã đơn hàng bắt đầu bằng chữ GA (có trong email xác nhận kích hoạt) hoặc số điện thoại/email đã đăng ký để đối chiếu. Yêu cầu hợp lệ được xử lý trong 3–5 ngày làm việc, hoàn tiền đúng qua tài khoản ngân hàng đã dùng để thanh toán ban đầu. Nếu bạn không dùng được dịch vụ do lỗi kỹ thuật từ phía Giáo Án Pro, ngoài hoàn tiền còn có thể được gia hạn thêm thời gian sử dụng tương ứng.",
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
      "Không cần tạo tài khoản: hệ thống nhận diện trình duyệt của bạn bằng một mã ẩn danh lưu trong cookie, cùng địa chỉ IP để giới hạn lượt dùng thử (chỉ lưu khoảng 2 ngày). Nội dung bạn nhập, và tài liệu bạn đính kèm nếu có (công văn, phụ lục của Sở/trường), được gửi đến Google Gemini để tạo kết quả; khi Gemini tạm không dùng được, hệ thống có thể dùng DeepSeek API dự phòng. Lịch sử giáo án được lưu tối đa khoảng 400 ngày để bạn xem lại trong mục Lịch sử. Tên và trường bạn nhập ở mục Hồ sơ chỉ lưu trên trình duyệt, không gửi lên máy chủ. Chúng tôi không bán hay chia sẻ dữ liệu cho bên thứ ba vì mục đích quảng cáo. Chi tiết đầy đủ có trong Chính sách bảo mật ở chân trang của từng ứng dụng.",
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
