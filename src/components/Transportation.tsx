import { RideArt } from "@/components/RomanceArt";
import { wedding } from "@/wedding";

export function Transportation() {
  return (
    <section id="transport" className="flex h-full flex-col items-center overflow-hidden bg-paper px-8 pt-8 text-center">
      <h2 className="font-serif text-5xl">Transportation</h2>
      <p className="mx-auto mt-6 max-w-[18.5rem] font-serif text-[0.95rem] leading-relaxed text-ink/80">{wedding.transport.nearby}</p>
      <p className="mx-auto mt-4 max-w-[18.5rem] font-serif text-[0.95rem] leading-relaxed text-ink/80">{wedding.transport.advice}</p>
      <ol className="mt-8 w-full max-w-[16rem] text-left font-serif text-ink">
        <li className="flex items-start gap-3">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-[#e0cbb3] font-serif text-xs text-plum">1</span>
          <span>
            <span className="block text-lg leading-tight">Bang Wa</span>
            <span className="text-sm text-muted">BTS Station</span>
          </span>
        </li>
        <li className="my-2 ml-3 h-6 border-l border-[#e0cbb3]" aria-hidden="true" />
        <li className="flex items-start gap-3">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-[#e0cbb3] font-serif text-xs text-plum">2</span>
          <span>
            <span className="block text-lg leading-tight">Grab or Bolt</span>
            <span className="text-sm text-muted">Taxi from the station to No. 24 The Glass House</span>
          </span>
        </li>
      </ol>
      <a
        href={wedding.phoneHref}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-plum px-5 py-2.5 font-serif text-[1.05rem] tracking-wide text-pearl shadow-[0_6px_16px_rgba(109,63,72,0.18)]"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M8 4.5h2.2l1.2 3-1.6 1a12 12 0 0 0 5.7 5.7l1-1.6 3 1.2V16a1.5 1.5 0 0 1-1.6 1.5A14.5 14.5 0 0 1 6.5 6.1 1.5 1.5 0 0 1 8 4.5Z" strokeLinejoin="round" />
        </svg>
        {wedding.phone}
      </a>
      <p className="mt-2 font-serif text-sm text-muted">Call if you need help finding us</p>
      <RideArt />
    </section>
  );
}
