export type PostCategory = "blog" | "mien-phi";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: PostCategory;
  content: string[];
}

export const POSTS: Post[] = [
  {
    slug: "soan-giao-an-tieu-hoc-cong-van-2345-bang-ai",
    title: "Soạn giáo án Tiểu học theo Công văn 2345 bằng AI: 6 bước, có ví dụ thật",
    excerpt: "Khung kế hoạch bài dạy theo Phụ lục 3 Công văn 2345, cách dùng AI soạn bản nháp từng bước, kèm một bài Toán lớp 2 đã chạy thật và những chỗ cần sửa.",
    date: "2026-10-29",
    category: "mien-phi",
    content: [
      "Soạn giáo án Tiểu học theo Công văn 2345 bằng AI gồm 6 bước: nắm khung Phụ lục 3, nhập đúng môn - lớp - tên bài, thêm trích đoạn sách giáo khoa nếu có, đọc đối chiếu bản nháp với khung, chỉnh theo lớp của mình, rồi xuất file Word để điền ngày soạn và chữ ký. Bài này đi qua từng bước với một bài Toán lớp 2 đã chạy thật, kèm những chỗ AI làm chưa đúng mà thầy cô cần sửa.",
      "Bước 1 - Nắm khung kế hoạch bài dạy. Phụ lục 3 của Công văn 2345/BGDĐT-GDTH (ngày 7/6/2021) hướng dẫn kế hoạch bài dạy của giáo viên tiểu học. Phần đầu ghi môn học hoặc hoạt động giáo dục, lớp, tên bài học, số tiết và thời gian thực hiện. Phần nội dung gồm: (1) Yêu cầu cần đạt: học sinh làm được gì, vận dụng được gì, hình thành phẩm chất và năng lực nào; (2) Đồ dùng dạy học: thiết bị, học liệu dùng trong bài; (3) Các hoạt động dạy học chủ yếu: mở đầu, hình thành kiến thức mới (chỉ áp dụng với bài hình thành kiến thức mới), luyện tập thực hành, vận dụng trải nghiệm (nếu có); (4) Điều chỉnh sau bài dạy (nếu có). Văn bản cũng nêu giáo viên được chủ động, linh hoạt và điều chỉnh kế hoạch theo học sinh và điều kiện dạy học.",
      "Bước 2 - Nhập đúng môn, lớp và tên bài. Trong công cụ Cấp 1 của Giáo Án Pro, bạn chọn môn học, khối lớp và gõ tên bài đúng như trong sách giáo khoa. Tên bài càng cụ thể thì bản nháp càng sát. Ở ví dụ dưới đây tôi nhập: Toán, lớp 2, \"Phép cộng (có nhớ) trong phạm vi 100\".",
      "Bước 3 - Dán trích đoạn sách giáo khoa nếu có. Công cụ có ô \"Trích đoạn SGK (tuỳ chọn)\". AI không xem được sách giáo khoa của bạn, nên nếu bạn dán nội dung bài, ví dụ và bài tập vào đó, bản nháp sẽ bám theo. Nếu để trống, AI soạn dựa trên hiểu biết chung về chương trình, và những chỗ nhắc tới \"bài 1, bài 2 trong SGK\" có thể không khớp sách thật.",
      "Bước 4 - Đọc đối chiếu bản nháp với khung. Bản nháp trong ví dụ có phần yêu cầu cần đạt gồm 4 gạch đầu dòng, phần đồ dùng dạy học chia theo giáo viên và học sinh, và thời lượng \"1 tiết (35 phút)\". Bốn hoạt động theo thứ tự như sau.",
      "Hoạt động 1 - Mở đầu: cho học sinh chơi trò chơi tính nhanh các phép cộng không nhớ, rồi đưa tình huống \"Thỏ hái 25 củ cà rốt, hái thêm 6 củ\" để dẫn vào phép tính 25 + 6. Hoạt động 2 - Hình thành kiến thức mới: học sinh dùng que tính gộp thành 31 que, giáo viên hướng dẫn đặt tính và tính (5 cộng 6 bằng 11, viết 1 nhớ 1; 2 thêm 1 bằng 3). Hoạt động 3 - Luyện tập, thực hành: đặt tính rồi tính 47 + 5 và 38 + 4, làm việc nhóm đôi, giải bài toán có lời văn. Hoạt động 4 - Vận dụng, trải nghiệm: tình huống mua vở 18 nghìn đồng và thước kẻ 5 nghìn đồng, tính tổng số tiền. Tôi tự kiểm tra các phép tính trong bản nháp (25 + 6 = 31, 18 + 5 = 23) và đều đúng.",
      "Bước 5 - Chỉnh theo lớp của mình. Trong ví dụ này tôi thấy bốn chỗ cần sửa. Một: yêu cầu cần đạt có cụm \"tính từ phụ sang chính\", một cách diễn đạt lạ, nên đổi thành \"tính từ phải sang trái, từ hàng đơn vị đến hàng chục\". Hai: hoạt động 1 đặt tên trò chơi \"Thỏ con hái nấm\" nhưng tình huống lại là củ cà rốt, cần thống nhất. Ba: hoạt động 3 nhắc \"Bài 1, Bài 2, Bài 3\" và trò \"Tìm nhà cho bạn\" như thể lấy từ SGK, trong khi tôi không dán trích đoạn nào, nên phải đối chiếu với sách thật. Bốn: bản nháp luôn có đủ 4 hoạt động, trong khi khung Phụ lục 3 cho biết hoạt động hình thành kiến thức mới chỉ áp dụng với bài kiến thức mới, và hoạt động vận dụng chỉ có khi cần. Với bài ôn tập hay luyện tập, thầy cô nên bỏ bớt cho đúng loại bài.",
      "Bước 6 - Xuất Word, điền thông tin và ghi điều chỉnh sau bài dạy. File Word có sẵn dòng ngày soạn, ngày dạy và bảng chữ ký duyệt để điền khi nộp tổ chuyên môn. Mục \"Điều chỉnh sau bài dạy\" trong Phụ lục 3 hiện chưa được tạo sẵn trong bản nháp, thầy cô tự thêm sau khi dạy: ghi điều gì hiệu quả, điều gì cần rút kinh nghiệm.",
      "Còn một điều cần nói rõ: AI chỉ tạo bản nháp. Mọi nội dung, số liệu và cách tổ chức đều cần thầy cô đọc lại, chỉnh theo học sinh thực tế và theo hướng dẫn của tổ chuyên môn, vì Sở hoặc trường có thể có yêu cầu riêng. Nếu trường bạn có mẫu riêng, hãy đính kèm công văn hoặc phụ lục đó trong mục Cấu Hình Cá Nhân để AI bám theo.",
      "Giáo Án Pro có công cụ Cấp 1 làm sẵn các bước trên theo cấu trúc Công văn 2345. Mỗi chức năng có 3 lượt dùng thử miễn phí, không cần tạo tài khoản.",
    ],
  },
  {
    slug: "thong-tu-15-2026-giao-an-ho-so-bat-buoc",
    title: "Thông tư 15/2026: giáo án là hồ sơ bắt buộc, hồ sơ điện tử có giá trị như bản giấy",
    excerpt: "Điều 21 Thông tư 15/2026/TT-BGDĐT nêu rõ giáo viên phải có những hồ sơ nào và cho phép dùng hồ sơ điện tử thay bản giấy. Đây là phần cần biết, trích theo văn bản gốc.",
    date: "2026-10-27",
    category: "blog",
    content: [
      "Câu trả lời ngắn: có. Theo Điều 21 Thông tư 15/2026/TT-BGDĐT, kế hoạch bài dạy (giáo án) là hồ sơ của giáo viên, và hồ sơ được phép quản lý dưới dạng điện tử, có giá trị pháp lý tương đương hồ sơ giấy. Bài này chỉ trích lại những gì có trong văn bản, không diễn giải thêm.",
      "Thông tư 15/2026/TT-BGDĐT là Điều lệ trường tiểu học, trung học cơ sở, trung học phổ thông và trường phổ thông nhiều cấp học, ban hành ngày 24/3/2026 và có hiệu lực từ 10/5/2026. Thông tư thay thế Thông tư 28/2020 (Điều lệ trường tiểu học) và Thông tư 32/2020 (Điều lệ trường THCS, THPT), cùng một số văn bản về chuyển trường và xét tốt nghiệp THCS.",
      "Hồ sơ của giáo viên theo khoản 2 Điều 21 gồm ba loại: (1) kế hoạch bài dạy (giáo án); (2) sổ chủ nhiệm, dành cho giáo viên làm công tác chủ nhiệm lớp; (3) sổ công tác Đội, dành cho Tổng phụ trách Đội. Nghĩa là một giáo viên bộ môn không kiêm nhiệm chủ nhiệm hay Tổng phụ trách Đội thì chỉ có giáo án là hồ sơ cá nhân theo Điều lệ.",
      "Về hình thức, khoản 4 Điều 21 quy định hồ sơ được quản lý, sử dụng chủ yếu dưới dạng hồ sơ điện tử. Hồ sơ điện tử có giá trị pháp lý tương đương hồ sơ giấy và được dùng thay hồ sơ giấy theo lộ trình phù hợp với điều kiện hạ tầng công nghệ thông tin của địa phương, nhà trường và khả năng thực hiện của giáo viên. Nếu đã sử dụng hồ sơ điện tử hợp pháp thì không bắt buộc phải lập hồ sơ giấy tương ứng.",
      "Có ba điểm cần lưu ý. Thứ nhất, \"theo lộ trình\" nghĩa là tốc độ chuyển sang bản điện tử khác nhau giữa các địa phương và trường, nên cách nộp giáo án ở trường bạn vẫn do nhà trường và tổ chuyên môn hướng dẫn. Thứ hai, Thông tư 15 không quy định mẫu giáo án; cấu trúc giáo án vẫn bám các công văn hướng dẫn hiện hành như Công văn 5512 (THCS, THPT) và Công văn 2345 (Tiểu học), và Sở hoặc trường có thể có yêu cầu riêng. Thứ ba, các hồ sơ khác trong khoản 1 là của nhà trường (học bạ, sổ đăng bộ, sổ theo dõi và đánh giá học sinh và các loại khác), không phải của từng giáo viên.",
      "Nếu bạn cần dùng làm căn cứ, hãy đối chiếu với bản đang áp dụng: Thông tư đã có Quyết định 1240/QĐ-BGDĐT ngày 19/5/2026 về đính chính, và có thể được hướng dẫn thêm. Văn bản gốc đăng trên Công báo và cổng thông tin của Bộ Giáo dục và Đào tạo (moet.gov.vn).",
      "Giáo Án Pro chỉ giúp soạn bản nháp giáo án nhanh hơn theo cấu trúc Công văn 2345 và 5512. Bạn vẫn cần đọc lại, chỉnh sửa và nộp theo hướng dẫn của tổ chuyên môn trường mình; việc bản điện tử được chấp nhận ở trường bạn thế nào thì theo quy định của nhà trường.",
    ],
  },
  {
    slug: "thay-co-minh-su-ai-vai-tro-nao",
    title: "Thầy cô hay Minh sư? AI giúp được vai nào của giáo viên, và vai nào thì không",
    excerpt: "Có một cách phân biệt rất rõ giữa 'thầy cô' và 'minh sư' — hai vai trò tưởng giống mà khác hẳn. Ranh giới đó cũng chính là ranh giới AI không bao giờ vượt qua được.",
    date: "2026-09-07",
    category: "blog",
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
    category: "mien-phi",
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
    category: "blog",
    content: [
      "Câu trả lời ngắn gọn: không. Nhưng AI có thể gánh bớt phần việc tốn thời gian nhất — soạn thảo, định dạng, ra đề — để giáo viên dành thời gian cho phần AI không làm được.",
      "AI làm tốt: soạn nội dung theo khung có sẵn (như Công văn 5512), sinh nhiều phương án để chọn lọc, xử lý việc lặp lại (ra nhiều đề cùng dạng, nhiều bài tập cùng cấu trúc).",
      "AI không làm được: hiểu học sinh cụ thể trong lớp mình đang gặp khó khăn ở đâu, điều chỉnh cách giảng theo phản ứng thực tế trên lớp, và chịu trách nhiệm cuối cùng về nội dung có đúng hay không.",
      "Vì vậy nội dung AI tạo ra nên được xem là bản nháp tốt, không phải bản final. Giáo viên vẫn cần đọc lại, chỉnh sửa theo học sinh thực tế trước khi dùng — đây cũng là lý do mọi giáo án tạo từ Giáo Án Pro đều có ghi chú tương tự.",
      "Thời gian tiết kiệm được nên dùng vào đâu? Theo kinh nghiệm chia sẻ từ nhiều giáo viên dùng thử: dành cho việc chấm bài kỹ hơn, và chuẩn bị hoạt động tương tác trên lớp — hai việc AI chưa thể làm thay.",
    ],
  },
];
