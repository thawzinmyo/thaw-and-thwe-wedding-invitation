"use client";

import { useEffect, useState } from "react";
import { InvitationFrame } from "@/components/Lace";
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
    <section aria-label="Countdown to the wedding" className="h-full text-ink">
      <InvitationFrame>
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
      </InvitationFrame>
    </section>
  );
}
