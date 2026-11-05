"use client";

import { useEffect, useRef, useState } from "react";
import { LaceVeil } from "@/components/Lace";
import { wedding } from "@/wedding";

type Phase = "sealed" | "opening" | "open";

export function EnvelopeOverlay({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("sealed");
  const [hasMusic, setHasMusic] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(wedding.musicSrc, { method: "HEAD" })
      .then((response) => {
        if (!cancelled && response.ok) setHasMusic(true);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = phase === "open" ? previous : "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [phase]);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  function openInvite() {
    if (phase !== "sealed") return;
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4;
      void audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setPhase("open");
      return;
    }

    setPhase("opening");
    timerRef.current = window.setTimeout(() => setPhase("open"), 1600);
  }

  function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play().then(() => setPlaying(true));
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  return (
    <>
      <div inert={phase === "open" ? undefined : true}>{children}</div>
      {phase !== "open" && (
        <div
          className={`invite-overlay cursor-pointer${phase === "opening" ? " is-opening" : ""}`}
          role="button"
          tabIndex={0}
          autoFocus
          aria-label="Open the invitation"
          onClick={openInvite}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              openInvite();
            }
          }}
        >
          <div className="veil-panel veil-panel-left">
            <LaceVeil />
          </div>
          <div className="veil-panel veil-panel-right">
            <LaceVeil />
          </div>
          <p className="pointer-events-none absolute inset-x-8 bottom-6 z-10 rounded-full bg-[#f6ead8]/85 py-2 text-center text-[0.68rem] tracking-[0.32em] text-plum uppercase">
            Tap to open
          </p>
        </div>
      )}
      {hasMusic && <audio ref={audioRef} src={wedding.musicSrc} loop preload="none" />}
      {phase === "open" && hasMusic && (
        <button
          type="button"
          onClick={toggleMusic}
          aria-label={playing ? "Pause music" : "Play music"}
          className="fixed right-4 bottom-4 z-40 grid size-11 place-items-center rounded-full border border-white/40 bg-plum/90 text-pearl shadow-md"
        >
          <SpeakerIcon paused={!playing} />
        </button>
      )}
    </>
  );
}

function SpeakerIcon({ paused }: { paused: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 10h3l4-3v10l-4-3H4z" />
      {paused ? (
        <path d="M16 9l5 6M21 9l-5 6" />
      ) : (
        <path d="M16 9c1.5 1.2 1.5 4.8 0 6M18.5 7c2.4 2 2.4 8 0 10" />
      )}
    </svg>
  );
}
