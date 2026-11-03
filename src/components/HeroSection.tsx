import { InvitationFrame, PhotoSlot, Swans, VenueMark } from "@/components/Lace";
import { wedding } from "@/wedding";

export function HeroSection() {
  return (
    <header className="hero-screen h-full">
      <InvitationFrame>
        <p className="font-serif text-xs leading-tight text-muted italic">Together with their families</p>
        <h1 className="hero-names mt-2 font-script text-5xl leading-none text-plum">
          {wedding.partnerOne}
          <span className="my-0.5 block font-serif text-2xl text-ink/70">&</span>
          {wedding.partnerTwo}
        </h1>
        <p className="mt-2 font-serif text-base tracking-[0.18em]">{wedding.dateNumeric}</p>
        <p className="mt-1 text-[0.65rem] tracking-[0.22em] text-plum uppercase">{wedding.timeLine}</p>
        <PhotoSlot
          src={wedding.photos.cover}
          alt={`${wedding.partnerOne} and ${wedding.partnerTwo}`}
          className="hero-photo mx-auto mt-3 h-32 w-24 rounded-t-full object-top"
        >
          <VenueMark />
        </PhotoSlot>
        <p className="mt-2 font-serif text-lg leading-tight">{wedding.venueName}</p>
        <p className="mt-1 text-[0.65rem] tracking-[0.16em] text-muted uppercase">{wedding.dateLine}</p>
      </InvitationFrame>
    </header>
  );
}

export function LetterSection() {
  return (
    <InvitationFrame>
      <Swans />
      <h2 className="mt-3 font-serif text-3xl leading-tight">
        Together with
        <span className="block italic">their families</span>
      </h2>
      <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-muted">{wedding.message}</p>
    </InvitationFrame>
  );
}
