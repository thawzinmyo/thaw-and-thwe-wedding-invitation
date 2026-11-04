import { ClosingArt } from "@/components/RomanceArt";
import { wedding } from "@/wedding";

export function Closing() {
  return (
    <div className="flex h-full flex-col items-center overflow-hidden bg-paper px-8 pt-10 text-center">
      <div className="flex flex-col items-center">
        <Rings />
        <p className="mt-6 max-w-xs font-serif text-2xl leading-snug italic">We can’t wait to celebrate with you.</p>
        <p className="mt-8 font-serif text-lg text-muted italic">With love,</p>
        <p className="mt-1 font-serif text-4xl text-plum">
          {wedding.partnerOne} <span className="font-script text-3xl">&</span> {wedding.partnerTwo}
        </p>
        <p className="mt-4 text-[0.72rem] tracking-[0.22em] text-muted uppercase">{wedding.dateDisplay}</p>
      </div>
      <ClosingArt />
    </div>
  );
}

function Rings() {
  return (
    <svg viewBox="0 0 120 64" className="h-16 w-28 text-ink" fill="none" stroke="currentColor" strokeWidth="1.15" aria-hidden="true">
      <ellipse cx="46" cy="40" rx="22" ry="14" />
      <ellipse cx="74" cy="40" rx="22" ry="14" />
      <path d="M60 14l2.4 5 5.4.8-3.9 3.8.9 5.4L60 26.4 55.2 29l.9-5.4-3.9-3.8 5.4-.8Z" fill="#8f555c" stroke="none" />
    </svg>
  );
}
