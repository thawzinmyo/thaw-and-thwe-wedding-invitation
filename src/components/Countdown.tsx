"use client";

import { useEffect, useState } from "react";
import { LaceEdge } from "@/components/Lace";
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
    <section aria-label="Countdown to the wedding" className="bg-plum text-pearl">
      <LaceEdge className="text-pearl" />
      <div className="relative px-6 py-10 text-center">
        <Ribbon className="absolute top-2 left-3 w-24" />
        <Ribbon className="absolute top-6 right-2 w-24 -scale-x-100" />
        <Ribbon className="absolute bottom-4 left-4 w-20 rotate-12" />
        <Ribbon className="absolute right-3 bottom-2 w-20 -scale-x-100" />
        <h2 className="font-serif text-4xl">Countdown</h2>
        {time?.done ? (
          <p className="mt-6 font-script text-4xl">Today we celebrate</p>
        ) : (
          <ul className="relative mt-6 grid grid-cols-4 gap-2">
            {units.map((unit) => (
              <li key={unit}>
                <p className="font-serif text-4xl tabular-nums">
                  {time ? String(time[unit]).padStart(unit === "days" ? 1 : 2, "0") : "--"}
                </p>
                <p className="mt-1 text-[0.6rem] tracking-[0.16em] uppercase opacity-80">{unit}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <LaceEdge flip className="text-pearl" />
    </section>
  );
}

function Ribbon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 48" className={`text-pearl/70 ${className ?? ""}`} fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <path d="M8 30c18-16 28-6 40 2 10 6 22-2 36-14" />
      <path d="M34 24c-8 2-14 10-10 16 6-6 14-8 20-4" />
      <path d="M58 20c6 8 4 14-2 16" />
    </svg>
  );
}
