"use client";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    oaiq?: (...args: unknown[]) => void;
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
        window.oaiq?.("measure", "trial_started", { type: "plan_enrollment", plan_id: `trial_${appSlug}` });
      }}
    >
      Dùng thử ngay →
    </a>
  );
}
