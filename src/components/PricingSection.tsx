"use client";

import { useState } from "react";
import { APPS } from "@/lib/apps";
import { PLANS } from "@/lib/pricing";

const vnd = (n: number) => `${n.toLocaleString("vi-VN")}đ`;
const monthly = PLANS[0].amount;

export default function PricingSection() {
  const [appSlug, setAppSlug] = useState(APPS[0].slug);
  const app = APPS.find((a) => a.slug === appSlug) ?? APPS[0];

  return (
    <section id="bang-gia" className="mx-auto max-w-5xl px-4 pb-16">
      <h2 className="font-display text-2xl font-semibold text-ink">Giá chỉ từ {PLANS[0].price}/tháng</h2>
      <p className="mt-1 text-sm text-ink-muted">
        Giá như nhau ở cả 3 cấp, gói kích hoạt riêng cho từng cấp — dùng thử miễn phí trước, chỉ trả phí khi cần dùng lâu dài.
      </p>

      <div className="mt-6 flex flex-col items-center gap-2">
        <p className="text-sm font-medium text-ink">Bạn dạy cấp nào?</p>
        <div className="grid w-full max-w-xl grid-cols-3 gap-1 rounded-2xl bg-sand p-1">
          {APPS.map((a, i) => (
            <button
              key={a.slug}
              type="button"
              aria-pressed={a.slug === appSlug}
              onClick={() => setAppSlug(a.slug)}
              className={`rounded-xl px-2 py-2 text-center transition ${
                a.slug === appSlug ? "bg-paper-card shadow-sm" : "hover:bg-paper-card/60"
              }`}
            >
              <span className="block text-sm font-semibold text-ink">Cấp {i + 1}</span>
              <span className="block text-xs text-ink-muted">{a.grades.split(" · ")[0]}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid items-stretch gap-5 sm:grid-cols-3">
        {PLANS.map((plan) => {
          const perMonth = Math.round(plan.amount / plan.months / 100) * 100;
          const saved = monthly * plan.months - plan.amount;
          return (
            <a
              key={plan.id}
              href={`${app.href}/nang-cap?plan=${plan.id}`}
              className={`group relative flex flex-col rounded-2xl border p-6 text-center transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine ${
                plan.highlight
                  ? "border-2 border-pine bg-pine/5 shadow-md sm:-my-2 sm:py-8"
                  : "border-ink/10 bg-paper-card shadow-sm"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-pine px-3 py-1 text-xs font-semibold text-paper">
                  Bán chạy nhất
                </span>
              )}
              <p className="font-display text-lg font-semibold text-ink">{plan.label}</p>
              <p className="mt-2 text-3xl font-bold text-pine-dark">{plan.price}</p>
              <p className="mt-1 text-sm text-ink-muted">
                {plan.months === 1 ? "Thanh toán một lần" : `≈ ${vnd(perMonth)}/tháng`}
              </p>
              <p className={`mt-2 min-h-5 text-sm font-medium ${saved > 0 ? "text-seal" : ""}`}>
                {saved > 0 ? `Tiết kiệm ${vnd(saved)}` : ""}
              </p>
              <span
                className={`mt-5 rounded-xl py-2.5 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-pine text-paper group-hover:bg-pine-dark"
                    : "border border-pine text-pine group-hover:bg-pine/5"
                }`}
              >
                Thanh toán bằng QR →
              </span>
            </a>
          );
        })}
      </div>

      <p className="mt-5 text-center text-xs text-ink-muted">
        Bấm vào gói để mở mã QR thanh toán cho <span className="font-semibold text-ink">Cấp {APPS.indexOf(app) + 1}</span> — chuyển
        khoản xong hệ thống tự kích hoạt, không cần tạo tài khoản.
      </p>
    </section>
  );
}
