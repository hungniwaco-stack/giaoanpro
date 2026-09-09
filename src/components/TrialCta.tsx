"use client";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export default function TrialCta({
  href,
  appSlug,
  className,
}: {
  href: string;
  appSlug: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "bat_dau_dung_thu", app_slug: appSlug });
      }}
    >
      Dùng thử ngay →
    </a>
  );
}
