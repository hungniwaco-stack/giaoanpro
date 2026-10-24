import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Liên kết gõ sai đã thấy trong GA4 (trang 404) — chuyển về bài đúng thay vì để mất khách.
  async redirects() {
    return [
      { source: "/blog/5prompt-ai-cho-giao-vien", destination: "/blog/5-prompt-ai-cho-giao-vien", permanent: true },
      { source: "/blog/5prompt-ai-cho-giao-vi%C3%AAn", destination: "/blog/5-prompt-ai-cho-giao-vien", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Trang không nhúng iframe của ai, không cần cho phép nguồn ngoài nào khác
          // ngoài Google Tag Manager, pixel đo lường quảng cáo OpenAI (bzrcdn/bzr.openai.com)
          // và chính domain (mọi thứ khác).
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://bzrcdn.openai.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https:",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://bzrcdn.openai.com https://bzr.openai.com",
              "frame-src https://www.googletagmanager.com",
            ].join("; "),
          },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
