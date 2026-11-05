"use client";

import { useState } from "react";
import { GiftArt } from "@/components/RomanceArt";
import { wedding } from "@/wedding";

export function WeddingGift() {
  const [copied, setCopied] = useState<string | null>(null);
  const { gift } = wedding;

  async function copyDetail(value: string, id: string) {
    try {
      await navigator.clipboard.writeText(value.replaceAll(/[\s-]/g, ""));
      setCopied(id);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  }

  return (
    <section id="gift" className="flex h-full flex-col items-center overflow-hidden px-6 pt-5 text-center">
      <h2 className="font-serif text-4xl">Wedding Gift</h2>
      <p className="mx-auto mt-2 max-w-xs font-serif text-xl leading-snug italic">{gift.headline}</p>
      <p className="mx-auto mt-2 max-w-xs font-serif text-base leading-snug text-ink/75">{gift.note}</p>
      <div className="mt-4 flex w-full max-w-xs flex-col gap-4">
        {gift.accounts.map((account) => (
          <div key={account.bank}>
            <p className="font-serif text-sm tracking-[0.16em] text-plum uppercase">{account.audience}</p>
            <p className="mt-1 text-[0.65rem] tracking-[0.22em] text-muted uppercase">{account.bank}</p>
            <p className="mt-1 font-serif text-xl">{account.accountName}</p>
            <p className="mt-1 text-[0.65rem] tracking-[0.18em] text-muted uppercase">{account.detailLabel}</p>
            <p className="font-serif text-lg tracking-[0.12em]">{account.detail}</p>
            <button
              type="button"
              onClick={() => copyDetail(account.detail, account.bank)}
              className="mt-2 rounded-full border border-plum/30 px-5 py-2 text-[0.65rem] tracking-[0.16em] text-plum uppercase"
            >
              {copied === account.bank ? "Copied" : account.copyLabel}
            </button>
          </div>
        ))}
      </div>
      <GiftArt />
    </section>
  );
}
