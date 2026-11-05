"use client";

import { useEffect, useState } from "react";
import { CountdownArt } from "@/components/RomanceArt";
import { wedding } from "@/wedding";

const target = new Date(wedding.dateISO).getTime();

function remaining(now: number) {
  const diff = Math.max(0, target - now);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
    done: diff === 0,
  };
}

const units = ["days", "hours", "minutes", "seconds"] as const;

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const time = now === null ? null : remaining(now);

  return (
    <section aria-label="Countdown to the wedding" className="flex h-full flex-col items-center overflow-hidden bg-paper px-6 text-center text-ink">
      <div className="flex w-full max-w-xs flex-1 flex-col items-center justify-center">
        <p className="font-script text-5xl text-plum">Until the day</p>
        <div className="mx-auto mt-4 flex items-center justify-center gap-3 text-muted" aria-hidden="true">
          <span className="h-px w-10 bg-current" />
          <span className="size-1.5 rotate-45 bg-current" />
          <span className="h-px w-10 bg-current" />
        </div>
        {time?.done ? (
          <p className="mt-8 font-serif text-3xl text-ink italic">Today we celebrate</p>
        ) : (
          <ul className="mt-8 grid grid-cols-4">
            {units.map((unit) => (
              <li key={unit} className="border-l border-muted/40 px-1 first:border-l-0">
                <p className="font-serif text-4xl text-ink tabular-nums">
                  {time ? String(time[unit]).padStart(2, "0") : "--"}
                </p>
                <p className="mt-1 text-[0.58rem] tracking-[0.16em] text-muted uppercase">{unit}</p>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-8 font-serif text-lg tracking-[0.08em] text-ink">{wedding.dateDisplay}</p>
      </div>
      <CountdownArt />
    </section>
  );
}
