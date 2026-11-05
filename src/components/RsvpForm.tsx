"use client";

import { useState } from "react";
import { LaceCanopy } from "@/components/Frames";
import { ReplyArt } from "@/components/RomanceArt";
import { wedding } from "@/wedding";

type Attendance = "yes" | "no";
type Status = "idle" | "sending" | "sent" | "error";

export function RsvpForm() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<Attendance>("yes");
  const [guests, setGuests] = useState("1");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || status === "sending") return;
    setStatus("sending");
    const guestName = name.trim();
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${wedding.rsvpEmail}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: guestName,
          attendance: attendance === "yes" ? "Joyfully accept" : "Regretfully decline",
          guests: attendance === "yes" ? guests : "0",
          note: note.trim(),
          _subject: `Wedding RSVP from ${guestName}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!response.ok) throw new Error("RSVP was not accepted");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="rsvp" className="h-full text-ink">
      <LaceCanopy>
        <h2 className="font-serif text-5xl">RSVP</h2>
        <p className="mx-auto mt-2 max-w-xs font-serif text-lg leading-snug text-ink/75 italic">
          Nothing would make us happier than celebrating with you.
        </p>

        {status === "sent" ? (
          <div className="mt-6">
            <p className="font-script text-5xl text-plum">Thank you</p>
            <p className="mt-3 font-serif text-lg leading-snug text-ink/80 italic">
              {attendance === "yes"
                ? `${name.trim()}, we cannot wait to celebrate with you.`
                : `${name.trim()}, thank you for letting us know. You will be missed.`}
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-5 w-full space-y-3 text-left">
            <label className="block font-serif text-base" htmlFor="rsvp-name">
              Your name
              <input
                id="rsvp-name"
                name="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                className="mt-1 w-full border border-[#e0cbb3] bg-white/70 px-3 py-2 font-serif text-lg text-ink outline-none"
              />
            </label>

            <fieldset>
              <legend className="font-serif text-base">Will you be there?</legend>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {(
                  [
                    ["yes", "Joyfully accept"],
                    ["no", "Regretfully decline"],
                  ] as const
                ).map(([value, label]) => (
                  <label
                    key={value}
                    className={`cursor-pointer border px-2 py-2 text-center font-serif text-base ${
                      attendance === value ? "border-plum bg-plum text-pearl" : "border-[#e0cbb3]"
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
              <label className="block font-serif text-base" htmlFor="rsvp-guests">
                Number of guests
                <select
                  id="rsvp-guests"
                  name="guests"
                  value={guests}
                  onChange={(event) => setGuests(event.target.value)}
                  className="mt-1 w-full border border-[#e0cbb3] bg-white/70 px-3 py-2 font-serif text-lg text-ink outline-none"
                >
                  {["1", "2", "3", "4", "5", "6"].map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <label className="block font-serif text-base" htmlFor="rsvp-note">
              A note for the couple
              <textarea
                id="rsvp-note"
                name="note"
                rows={2}
                value={note}
                onChange={(event) => setNote(event.target.value)}
                className="mt-1 w-full border border-[#e0cbb3] bg-white/70 px-3 py-2 font-serif text-lg text-ink outline-none"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full border border-plum px-3 py-2.5 text-[0.65rem] tracking-[0.18em] text-plum uppercase disabled:opacity-60"
            >
              {status === "sending" ? "Sending" : "Send reply"}
            </button>
            {status === "error" ? (
              <p className="text-center font-serif text-base text-plum">Please try again in a moment.</p>
            ) : null}
          </form>
        )}
        <ReplyArt />
      </LaceCanopy>
    </section>
  );
}
