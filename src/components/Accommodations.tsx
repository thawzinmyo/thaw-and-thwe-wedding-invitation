"use client";

import { useState } from "react";
import { wedding } from "@/wedding";

export function Accommodations() {
  const [copied, setCopied] = useState<string | null>(null);

  if (wedding.hotels.length === 0) return null;

  async function copy(code: string) {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(code);
      window.setTimeout(() => setCopied((current) => (current === code ? null : current)), 2000);
    } catch {
      setCopied(null);
    }
  }

  return (
    <section id="stay" className="invite-page flex h-full flex-col justify-center bg-paper px-6">
      <div className="text-center">
        <h2 className="font-serif text-4xl">Where to stay</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Rooms held for guests. Mention the code when you book.
        </p>
      </div>
      <div className="mt-8 space-y-5">
        {wedding.hotels.map((hotel, index) => (
          <article key={hotel.name} className="border border-lace bg-pearl/60 px-5 py-6 text-center">
            <p className="font-serif text-sm tracking-[0.3em] text-muted">{index + 1}</p>
            <h3 className="mt-2 font-serif text-2xl">{hotel.name}</h3>
            {hotel.dates && <p className="mt-2 text-xs tracking-[0.14em] text-muted uppercase">{hotel.dates}</p>}
            <p className="mt-3 text-sm leading-relaxed text-muted">{hotel.detail}</p>
            {hotel.code && (
              <button
                type="button"
                onClick={() => copy(hotel.code)}
                className="mt-4 border border-plum/30 px-4 py-2 text-xs tracking-[0.16em] text-plum uppercase"
              >
                {copied === hotel.code ? "Copied" : `Code ${hotel.code}`}
              </button>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
