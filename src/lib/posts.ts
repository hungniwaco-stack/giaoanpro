export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string[];
}

export const POSTS: Post[] = [
  {
    slug: "thay-co-minh-su-ai-vai-tro-nao",
    title: "Thầy cô hay Minh sư? AI giúp được vai nào của giáo viên, và vai nào thì không",
    excerpt: "Có một cách phân biệt rất rõ giữa 'thầy cô' và 'minh sư' — hai vai trò tưởng giống mà khác hẳn. Ranh giới đó cũng chính là ranh giới AI không bao giờ vượt qua được.",
    date: "2026-09-07",
    content: [
      "Có một cách phân biệt vai trò khá thú vị trong nghề giáo, chia thành hai vai: Thầy cô và Minh sư. Nghe qua tưởng giống nhau, nhưng ranh giới giữa hai vai này lại chính là ranh giới mà AI không bao giờ vượt qua được.",
      "\"Thầy cô\" không chỉ là người biết dạy, mà là người \"làm được, tổng kết được, truyền đạt được, giúp người khác làm được\". Một giáo viên giỏi môn học chưa chắc đã tròn vai này, nếu học sinh nghe xong vẫn không tự giải được bài tương tự. Đây là chỗ AI giúp thật: soạn nội dung rõ ràng, đúng khung chương trình, để giáo viên có bản nháp tốt mà truyền đạt lại theo cách của mình — còn việc truyền đạt sao cho học sinh THỰC SỰ làm được thì AI không thay được, vì nó cần đọc ra học sinh cụ thể đang vướng ở đâu.",
      "Còn \"minh sư\" là vai xa hơn nữa: người dẫn dắt dài hạn, đồng hành với một học trò qua nhiều năm, hiểu ước mơ của trò, sửa tư duy sai, theo dõi cả quá trình trưởng thành chứ không chỉ một bài giảng. Đây là vai không phần mềm nào chạm tới được, vì nó cần thời gian, sự quan sát liên tục, và một mối quan hệ con người thật — không phải một lượt tạo nội dung.",
      "Đây cũng là lý do khi làm Giáo Án Pro, mục tiêu không phải để AI \"dạy thay\", mà chỉ nhắm vào phần chiếm nhiều thời gian nhất của một giáo viên: soạn giáo án đúng khung Công văn, ra đề, tạo bài tập. Phần này AI làm nhanh hơn nhiều. Nhưng thời gian tiết kiệm được nên dùng vào đúng phần AI không làm được — ngồi lại với một học sinh học chậm, nhận ra một em đang có chuyện buồn, kiên trì sửa một thói quen sai suốt cả học kỳ. Tức là làm đúng vai Thầy cô và Minh sư.",
      "Nói cách khác, AI không giúp bạn trở thành thầy cô hay minh sư giỏi hơn. Nó chỉ giúp bạn có thêm thời gian để làm điều đó — thứ mà trước giờ vẫn hay bị deadline soạn giáo án nuốt mất.",
    ],
  },
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
