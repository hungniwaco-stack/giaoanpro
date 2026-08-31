import type { Metadata } from "next";
import { Literata, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["vietnamese", "latin"],
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["vietnamese", "latin"],
});

// ponytail: đổi sang domain thật khi mua xong.
const SITE_URL = "https://giaoanpro.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Giáo Án Pro — AI soạn giáo án chuẩn Công văn 5512",
  description:
    "Bộ công cụ AI soạn giáo án cho giáo viên Tiểu học, THCS, THPT. Xuất Word/PowerPoint đúng chuẩn chỉ trong vài giây. Kèm blog chia sẻ prompt và ứng dụng AI trong giáo dục, hoàn toàn miễn phí.",
  keywords: ["giáo án AI", "soạn giáo án", "công văn 5512", "AI giáo dục", "prompt AI cho giáo viên"],
  openGraph: {
    title: "Giáo Án Pro",
    description: "AI soạn giáo án chuẩn 5512 cho Tiểu học, THCS, THPT.",
    locale: "vi_VN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${literata.variable} ${beVietnam.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
