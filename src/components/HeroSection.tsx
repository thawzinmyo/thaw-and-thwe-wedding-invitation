import { FittedPhoto } from "@/components/Frames";
import { InvitationFrame } from "@/components/Lace";
import { wedding } from "@/wedding";

export function HeroSection() {
  return (
    <header className="hero-screen h-full">
      <InvitationFrame>
        <p className="font-serif text-sm text-muted italic">Together with their families</p>
        <h1 className="hero-names mt-1 font-script text-[3.4rem] leading-none text-plum">
          {wedding.partnerOne}
          <span className="my-0.5 block font-serif text-2xl text-ink/60">&</span>
          {wedding.partnerTwo}
        </h1>
        <p className="mt-4 font-serif text-base tracking-[0.12em]">{wedding.dateDisplay}</p>
        <p className="mt-1 font-serif text-xl leading-tight">{wedding.venueName}</p>
        <p className="mt-1 text-[0.68rem] tracking-[0.28em] text-muted uppercase">{wedding.city}</p>
      </InvitationFrame>
    </header>
  );
}

export function LetterSection() {
  return (
    <FittedPhoto src="/images/ring_flower.jpeg" insetClass="inset-[24%_16%_28%_16%] px-2">
      <p className="font-script text-5xl leading-none text-plum">You are invited</p>
      <p className="mx-auto mt-4 max-w-[15rem] font-serif text-lg leading-snug text-ink italic">{wedding.message}</p>
    </FittedPhoto>
  );
}
