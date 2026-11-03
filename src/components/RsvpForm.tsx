"use client";

import { useState } from "react";
import { LaceEdge } from "@/components/Lace";

type Attendance = "yes" | "no";

export function RsvpForm() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<Attendance>("yes");
  const [guests, setGuests] = useState("1");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) return;
    setSubmitted(true);
  }

  return (
    <section id="rsvp" className="flex min-h-0 flex-1 flex-col bg-plum text-pearl">
      <LaceEdge className="shrink-0 text-pearl" />
      <div className="flex min-h-0 flex-1 flex-col justify-center overflow-y-auto px-6 py-4 text-center">
        <HeartLocket />
        <h2 className="mt-2 font-serif text-4xl">RSVP</h2>
        <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-pearl/80">
          Nothing would make us happier than celebrating with you.
        </p>

        {submitted ? (
          <div className="mt-8 border border-white/25 px-6 py-8">
            <p className="font-script text-4xl">Thank you</p>
            <p className="mt-3 text-sm leading-relaxed text-pearl/80">
              {attendance === "yes"
                ? `${name.trim()}, we cannot wait to celebrate with you.`
                : `${name.trim()}, thank you for letting us know. You will be missed.`}
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-5 space-y-3 text-left">
            <label className="block text-sm" htmlFor="rsvp-name">
              Your name
              <input
                id="rsvp-name"
                name="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                className="mt-2 w-full border border-white/30 bg-white/10 px-4 py-3 text-pearl outline-none placeholder:text-pearl/50"
              />
            </label>

            <fieldset>
              <legend className="text-sm">Will you be there?</legend>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {(
                  [
                    ["yes", "Joyfully accept"],
                    ["no", "Regretfully decline"],
                  ] as const
                ).map(([value, label]) => (
                  <label
                    key={value}
                    className={`cursor-pointer border px-3 py-3 text-center text-sm ${
                      attendance === value ? "border-pearl bg-pearl text-plum" : "border-white/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value={value}
                      checked={attendance === value}
                      onChange={() => setAttendance(value)}
                      className="sr-only"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>

            {attendance === "yes" && (
              <label className="block text-sm" htmlFor="rsvp-guests">
                Number of guests
                <select
                  id="rsvp-guests"
                  name="guests"
                  value={guests}
                  onChange={(event) => setGuests(event.target.value)}
                  className="mt-2 w-full border border-white/30 bg-plum px-4 py-3 outline-none"
                >
                  {["1", "2", "3", "4", "5", "6"].map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <label className="block text-sm" htmlFor="rsvp-note">
              A note for the couple
              <textarea
                id="rsvp-note"
                name="note"
                rows={2}
                value={note}
                onChange={(event) => setNote(event.target.value)}
                className="mt-2 w-full border border-white/30 bg-white/10 px-4 py-3 outline-none"
              />
            </label>

            <button
              type="submit"
              className="w-full border border-pearl px-4 py-3 text-xs tracking-[0.22em] uppercase"
            >
              Send reply
            </button>
            <p className="text-center text-xs leading-relaxed text-pearl/70">
              This preview keeps your reply on this page only, until a form service is connected.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function HeartLocket() {
  return (
    <svg viewBox="0 0 80 96" className="mx-auto h-14 w-12 text-pearl" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M40 28c-2-8 8-16 16-10 6 4 6 12 0 18" />
      <path d="M40 28c2-8-8-16-16-10-6 4-6 12 0 18" />
      <path d="M22 30c-10 8-12 24 18 40 30-16 28-32 18-40-6-4-12 0-18 8-6-8-12-12-18-8Z" />
    </svg>
  );
}
