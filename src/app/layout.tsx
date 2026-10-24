import type { Metadata } from "next";
import { Literata, Be_Vietnam_Pro } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Quản lý qua Google Tag Manager thay vì gắn gtag trực tiếp — đổi/thêm thẻ (GA4, Ads...)
// chỉnh trong GTM, không cần sửa code.
const GTM_ID = "GTM-WD98GG3J";
// Pixel đo lường quảng cáo ChatGPT (ads.openai.com → Lượt chuyển đổi). Gắn bằng code thay vì
// GTM vì phải sửa CSP, và để kiểm thử được trước khi deploy.
const OPENAI_PIXEL_ID = "7W5Xk12pfCg2uzwWHcH3yJ";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["vietnamese", "latin"],
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  weight: ["400", "500", "600"], // 700/800 not used — headings use font-display (Literata) instead
  subsets: ["vietnamese", "latin"],
});

// www là domain thật sự phục vụ trang (apex 308-redirect sang www).
const SITE_URL = "https://www.giaoanpro.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Giáo Án Pro — AI soạn giáo án chuẩn 2345 & 5512",
  description:
    "Bộ 3 công cụ AI soạn giáo án cho giáo viên Tiểu học, THCS, THPT: đúng chuẩn Công văn 2345 và 5512, xuất Word và PowerPoint. Dùng thử miễn phí.",
  keywords: ["giáo án AI", "soạn giáo án", "công văn 2345", "công văn 5512", "AI giáo dục", "prompt AI cho giáo viên"],
  openGraph: {
    title: "Giáo Án Pro",
    description: "AI soạn giáo án chuẩn 2345 (Tiểu học) và 5512 (THCS, THPT).",
    locale: "vi_VN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Giáo Án Pro",
  url: SITE_URL,
  founder: { "@type": "Person", name: "Nguyễn Hữu Hùng" },
  description:
    "Bộ công cụ AI soạn giáo án cho giáo viên Tiểu học, THCS, THPT tại Việt Nam, chuẩn Công văn 2345 và 5512.",
  sameAs: ["https://www.facebook.com/profile.php?id=61594446321360"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${literata.variable} ${beVietnam.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <Script id="openai-pixel" strategy="afterInteractive">
          {`(function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;
            var js=d.createElement(s);js.async=true;js.src=u;var f=d.getElementsByTagName(s)[0];
            f.parentNode.insertBefore(js,f);
          })(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");
          oaiq("init",{pixelId:"${OPENAI_PIXEL_ID}"});`}
        </Script>
      </body>
    </html>
  );
}
