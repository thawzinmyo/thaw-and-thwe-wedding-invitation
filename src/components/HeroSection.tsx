import { LaceEdge, OrnamentFrame, PhotoSlot, Swans, VenueMark } from "@/components/Lace";
import { wedding } from "@/wedding";

export function HeroSection() {
  return (
    <header className="hero-screen flex h-full flex-col bg-paper text-center">
      <LaceEdge className="shrink-0 text-lace" />
      <div className="flex min-h-0 flex-1 items-center">
        <OrnamentFrame>
          <p className="font-serif text-sm leading-tight text-muted italic">Together with their families</p>
          <h1 className="hero-names mt-4 font-script text-6xl leading-none text-plum">
            {wedding.partnerOne}
            <span className="my-1 block font-serif text-3xl text-ink/70">&</span>
            {wedding.partnerTwo}
          </h1>
          <p className="mt-4 font-serif text-lg tracking-[0.18em]">{wedding.dateNumeric}</p>
          <p className="mt-1 text-xs tracking-[0.22em] text-plum uppercase">{wedding.timeLine}</p>
          <PhotoSlot src={wedding.photos.cover} alt={`${wedding.partnerOne} and ${wedding.partnerTwo}`} className="hero-photo mx-auto mt-6 h-56 w-40 rounded-t-full object-top">
            <VenueMark />
          </PhotoSlot>
          <p className="mt-4 font-serif text-xl">{wedding.venueName}</p>
          <p className="mt-1 text-xs tracking-[0.2em] text-muted uppercase">{wedding.dateLine}</p>
        </OrnamentFrame>
      </div>
      <LaceEdge flip className="shrink-0 text-lace" />
    </header>
  );
}

export function LetterSection() {
  return (
    <section className="bg-paper px-8 text-center">
      <Swans />
      <h2 className="font-serif text-3xl leading-tight">
        Together with
        <span className="block italic">their families</span>
      </h2>
      <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-muted">{wedding.message}</p>
    </section>
  );
}
