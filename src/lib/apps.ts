export interface AppInfo {
  slug: string;
  name: string;
  grades: string;
  description: string;
  href: string;
  status: "live" | "soon";
}

export const APPS: AppInfo[] = [
  {
    slug: "cap1",
    name: "Giáo Án Pro — Cấp 1",
    grades: "Tiểu học · Lớp 1–5",
    description: "Không có thời gian rảnh? Soạn xong ngay trong giờ ra chơi, đúng chuẩn Công văn 2345.",
    href: "https://cap1.giaoanpro.com",
    status: "live",
  },
  {
    slug: "cap2",
    name: "Giáo Án Pro — Cấp 2",
    grades: "THCS · Lớp 6–9",
    description: "Bám sát sách Kết nối tri thức, chuẩn Công văn 5512 — cập nhật khi chương trình đổi, không lo giáo án lỗi thời.",
    href: "https://cap2.giaoanpro.com",
    status: "live",
  },
  {
    slug: "cap3",
    name: "Giáo Án Pro — Cấp 3",
    grades: "THPT · Lớp 10–12",
    description: "Soạn giáo án kèm định hướng ôn thi tốt nghiệp — chuẩn Công văn 5512, dùng suốt năm học.",
    href: "https://cap3.giaoanpro.com",
    status: "live",
  },
];
