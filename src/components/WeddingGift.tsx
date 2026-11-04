"use client";

import { useState } from "react";
import { LaceCanopy } from "@/components/Frames";
import { GiftArt } from "@/components/RomanceArt";
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
    <section id="gift" className="h-full">
      <LaceCanopy>
        <h2 className="font-serif text-5xl">Wedding Gift</h2>
        <p className="mx-auto mt-4 max-w-xs font-serif text-2xl leading-snug italic">{gift.headline}</p>
        <p className="mx-auto mt-3 max-w-xs font-serif text-lg leading-snug text-ink/75">{gift.note}</p>
        <div className="mx-auto mt-6">
          <p className="text-[0.65rem] tracking-[0.22em] text-muted uppercase">{gift.bank}</p>
          <p className="mt-1 font-serif text-xl">{gift.accountName}</p>
          <p className="mt-2 font-serif text-lg tracking-[0.16em]">{gift.accountNumber}</p>
        </div>
        <button
          type="button"
          onClick={copyNumber}
          className="mt-6 rounded-full border border-plum/30 px-6 py-2.5 text-[0.65rem] tracking-[0.18em] text-plum uppercase"
        >
          {copied ? "Copied" : "Copy account number"}
        </button>
        <GiftArt />
      </LaceCanopy>
    </section>
  );
}
