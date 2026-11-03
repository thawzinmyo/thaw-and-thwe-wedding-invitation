"use client";

import { useState } from "react";
import { LaceEdge } from "@/components/Lace";
import { wedding } from "@/wedding";

export function WeddingGift() {
  const [copied, setCopied] = useState(false);
  const { gift } = wedding;

  async function copyNumber() {
    try {
      await navigator.clipboard.writeText(gift.accountNumber.replaceAll(" ", ""));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="gift" className="bg-paper px-6 py-12 text-center">
      <LaceEdge />
      <h2 className="mt-6 font-serif text-4xl">Wedding Gift</h2>
      <p className="mx-auto mt-8 max-w-xs font-serif text-3xl leading-snug">{gift.headline}</p>
      <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-muted">{gift.note}</p>
      <dl className="mx-auto mt-6 max-w-xs space-y-2 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-muted">Bank</dt>
          <dd>{gift.bank}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted">Name</dt>
          <dd>{gift.accountName}</dd>
        </div>
        <div>
          <dt className="text-muted">Account</dt>
          <dd className="mt-1 font-serif text-lg tracking-wider">{gift.accountNumber}</dd>
        </div>
      </dl>
      <button
        type="button"
        onClick={copyNumber}
        className="mt-6 border border-plum/30 px-5 py-2 text-xs tracking-[0.18em] text-plum uppercase"
      >
        {copied ? "Copied" : "Copy account number"}
      </button>
    </section>
  );
}
