export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string[];
}

export const POSTS: Post[] = [
  {
    slug: "5-prompt-ai-cho-giao-vien",
    title: "5 prompt AI giúp giáo viên soạn bài nhanh hơn",
    excerpt: "Những câu lệnh cụ thể, copy-dùng-ngay để AI hỗ trợ soạn giáo án, ra đề, viết nhận xét học bạ — không cần biết code.",
    date: "2026-08-31",
    content: [
      "AI tạo ra nội dung tốt hay dở phụ thuộc rất nhiều vào cách bạn hỏi. Dưới đây là 5 prompt bạn có thể copy và chỉnh lại tên bài, môn học cho phù hợp.",
      "1. Soạn mục tiêu bài học: \"Viết mục tiêu bài học cho bài [Tên bài], môn [Môn học], lớp [X], chia rõ 3 nhóm Kiến thức — Năng lực — Phẩm chất theo chương trình GDPT 2018, mỗi nhóm 3 gạch đầu dòng cụ thể, đo lường được.\"",
      "2. Ra câu hỏi trắc nghiệm: \"Ra 5 câu hỏi trắc nghiệm 4 đáp án cho bài [Tên bài], mức độ từ nhận biết đến vận dụng, kèm đáp án đúng và giải thích ngắn.\"",
      "3. Viết nhận xét học bạ: \"Viết nhận xét học bạ cuối kỳ cho học sinh có học lực khá, tính cách [mô tả ngắn], theo văn phong nhận xét chuẩn của Bộ GD&ĐT, khoảng 3 câu.\"",
      "4. Gợi ý hoạt động khởi động: \"Gợi ý 3 hoạt động khởi động (5 phút) cho bài [Tên bài] môn [Môn học] lớp [X], ưu tiên hoạt động tương tác, không cần thiết bị công nghệ.\"",
      "5. Tóm tắt bài học thành gạch đầu dòng cho học sinh ôn tập: \"Tóm tắt nội dung chính của bài [Tên bài] thành 5-7 gạch đầu dòng ngắn gọn, dễ nhớ, dùng để học sinh ôn tập trước kiểm tra.\"",
      "Mẹo nhỏ: càng cho AI biết rõ lớp, môn, và định dạng đầu ra mong muốn, kết quả càng sát nhu cầu thực tế — tránh hỏi chung chung.",
    ],
  },
  {
    slug: "ai-co-thay-duoc-giao-vien-khong",
    title: "AI có thể thay giáo viên không? Góc nhìn thực tế",
    excerpt: "AI soạn giáo án nhanh, nhưng có 3 việc không AI nào làm thay được. Đây là góc nhìn thẳng, không thổi phồng công nghệ.",
    date: "2026-08-31",
    content: [
      "Câu trả lời ngắn gọn: không. Nhưng AI có thể gánh bớt phần việc tốn thời gian nhất — soạn thảo, định dạng, ra đề — để giáo viên dành thời gian cho phần AI không làm được.",
      "AI làm tốt: soạn nội dung theo khung có sẵn (như Công văn 5512), sinh nhiều phương án để chọn lọc, xử lý việc lặp lại (ra nhiều đề cùng dạng, nhiều bài tập cùng cấu trúc).",
      "AI không làm được: hiểu học sinh cụ thể trong lớp mình đang gặp khó khăn ở đâu, điều chỉnh cách giảng theo phản ứng thực tế trên lớp, và chịu trách nhiệm cuối cùng về nội dung có đúng hay không.",
      "Vì vậy nội dung AI tạo ra nên được xem là bản nháp tốt, không phải bản final. Giáo viên vẫn cần đọc lại, chỉnh sửa theo học sinh thực tế trước khi dùng — đây cũng là lý do mọi giáo án tạo từ Giáo Án Pro đều có ghi chú tương tự.",
      "Thời gian tiết kiệm được nên dùng vào đâu? Theo kinh nghiệm chia sẻ từ nhiều giáo viên dùng thử: dành cho việc chấm bài kỹ hơn, và chuẩn bị hoạt động tương tác trên lớp — hai việc AI chưa thể làm thay.",
    ],
  },
];
