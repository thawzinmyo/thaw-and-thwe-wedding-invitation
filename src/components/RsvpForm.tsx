"use client";

import { useState } from "react";
import { InvitationFrame } from "@/components/Lace";

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
    <section id="rsvp" className="h-full text-ink">
      <InvitationFrame>
        <HeartLocket />
        <h2 className="font-serif text-3xl">RSVP</h2>
        <p className="mx-auto mt-1 max-w-xs text-xs leading-relaxed text-muted">
          Nothing would make us happier than celebrating with you.
        </p>

        {submitted ? (
          <div className="mt-4 border border-plum/20 px-4 py-6">
            <p className="font-script text-4xl text-plum">Thank you</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {attendance === "yes"
                ? `${name.trim()}, we cannot wait to celebrate with you.`
                : `${name.trim()}, thank you for letting us know. You will be missed.`}
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-2 w-full space-y-1.5 text-left">
            <label className="block text-xs" htmlFor="rsvp-name">
              Your name
              <input
                id="rsvp-name"
                name="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                className="mt-1 w-full border border-plum/25 bg-white/50 px-3 py-2 text-ink outline-none"
              />
            </label>

            <fieldset>
              <legend className="text-xs">Will you be there?</legend>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {(
                  [
                    ["yes", "Joyfully accept"],
                    ["no", "Regretfully decline"],
                  ] as const
                ).map(([value, label]) => (
                  <label
                    key={value}
                    className={`cursor-pointer border px-2 py-2 text-center text-xs ${
                      attendance === value ? "border-plum bg-plum text-pearl" : "border-plum/25"
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
              <label className="block text-xs" htmlFor="rsvp-guests">
                Number of guests
                <select
                  id="rsvp-guests"
                  name="guests"
                  value={guests}
                  onChange={(event) => setGuests(event.target.value)}
                  className="mt-1 w-full border border-plum/25 bg-white/50 px-3 py-2 text-ink outline-none"
                >
                  {["1", "2", "3", "4", "5", "6"].map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <label className="block text-xs" htmlFor="rsvp-note">
              A note for the couple
              <textarea
                id="rsvp-note"
                name="note"
                rows={2}
                value={note}
                onChange={(event) => setNote(event.target.value)}
                className="mt-1 w-full border border-plum/25 bg-white/50 px-3 py-2 text-ink outline-none"
              />
            </label>

            <button
              type="submit"
              className="w-full border border-plum px-3 py-2 text-[0.65rem] tracking-[0.18em] text-plum uppercase"
            >
              Send reply
            </button>
          </form>
        )}
        <p className="mt-2 font-serif text-xs tracking-[0.28em] text-plum uppercase">Thaw & Thwe</p>
      </InvitationFrame>
    </section>
  );
}

function HeartLocket() {
  return (
    <svg viewBox="0 0 80 96" className="mx-auto h-8 w-7 text-plum" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M40 28c-2-8 8-16 16-10 6 4 6 12 0 18" />
      <path d="M40 28c2-8-8-16-16-10-6 4-6 12 0 18" />
      <path d="M22 30c-10 8-12 24 18 40 30-16 28-32 18-40-6-4-12 0-18 8-6-8-12-12-18-8Z" />
    </svg>
  );
}
