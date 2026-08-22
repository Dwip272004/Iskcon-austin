"use client";

import { useState } from "react";
import { donationTiers, givingFunds } from "@/lib/data";

export default function GivingForm() {
  const [fund, setFund] = useState<string>(givingFunds[0].key);
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number>(donationTiers[2].amount);
  const [custom, setCustom] = useState<string>("");

  const selected = custom ? Number(custom) || 0 : amount;

  return (
    <div className="rounded-3xl bg-white border border-cream-deep shadow-md p-6 sm:p-8">
      {/* Fund selector */}
      <p className="text-xs font-semibold uppercase tracking-wide text-navy mb-3">
        I want to support
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        {givingFunds.map((f) => (
          <button
            key={f.key}
            onClick={() => setFund(f.key)}
            className={`text-left rounded-xl border p-4 transition-colors ${
              fund === f.key
                ? "border-gold bg-cream"
                : "border-cream-deep hover:border-gold/50"
            }`}
          >
            <p className="font-semibold text-navy text-sm">{f.title}</p>
            <p className="mt-1 text-xs text-ink-soft leading-relaxed">
              {f.description}
            </p>
          </button>
        ))}
      </div>

      {/* Frequency toggle */}
      <p className="text-xs font-semibold uppercase tracking-wide text-navy mt-8 mb-3">
        Frequency
      </p>
      <div className="inline-flex rounded-full bg-cream p-1">
        {(["once", "monthly"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFrequency(f)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              frequency === f
                ? "bg-navy text-white"
                : "text-navy hover:bg-cream-deep"
            }`}
          >
            {f === "once" ? "Give Once" : "Give Monthly"}
          </button>
        ))}
      </div>

      {/* Amount selector */}
      <p className="text-xs font-semibold uppercase tracking-wide text-navy mt-8 mb-3">
        Amount
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {donationTiers.map((t) => (
          <button
            key={t.amount}
            onClick={() => {
              setAmount(t.amount);
              setCustom("");
            }}
            className={`rounded-xl border p-4 text-center transition-colors ${
              amount === t.amount && !custom
                ? "border-gold bg-cream"
                : "border-cream-deep hover:border-gold/50"
            }`}
          >
            <p className="font-display text-2xl font-bold text-navy">
              ${t.amount}
            </p>
            <p className="mt-1 text-[11px] text-ink-soft leading-snug">
              {t.label}
            </p>
          </button>
        ))}
      </div>
      <div className="mt-3">
        <label className="text-xs text-ink-soft">
          Or enter a custom amount:
        </label>
        <div className="mt-1.5 flex items-center rounded-xl border border-cream-deep px-4 py-3 focus-within:border-gold">
          <span className="text-ink-soft mr-2">$</span>
          <input
            type="number"
            min={1}
            placeholder="Custom amount"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            className="w-full outline-none text-sm"
          />
        </div>
      </div>

      {/* Summary + CTA */}
      <div className="mt-8 rounded-xl bg-navy text-white p-5 flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="text-xs text-white/70">You're giving</p>
          <p className="font-display text-2xl font-bold">
            ${selected || 0}{" "}
            <span className="text-sm font-sans font-normal text-white/70">
              {frequency === "monthly" ? "/ month" : "one-time"}
            </span>
          </p>
        </div>
        <button
          type="button"
          className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-dark hover:bg-gold-light transition-colors"
        >
          Continue to Secure Checkout →
        </button>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-ink-soft/70">
        <span className="flex items-center gap-1.5">🔒 Secure payment processing</span>
        <span className="flex items-center gap-1.5">🧾 Tax-deductible receipt emailed instantly</span>
        <span className="flex items-center gap-1.5">✔ 501(c)(3) nonprofit</span>
      </div>
      <p className="mt-3 text-[11px] text-ink-soft/60">
        TODO: connect this form to a live payment processor (Stripe / PayPal
        Giving Fund / Givelify) and confirm EIN for the tax-deductibility
        statement.
      </p>
    </div>
  );
}
