import { LaceEdge, OrnamentFrame, PhotoSlot, Swans, VenueMark } from "@/components/Lace";
import { wedding } from "@/wedding";

export function HeroSection() {
  return (
    <>
      <header className="bg-paper text-center">
        <LaceEdge />
        <OrnamentFrame>
          <p className="font-serif text-sm leading-tight text-muted italic">Together with their families</p>
          <h1 className="mt-4 font-script text-6xl leading-none text-plum">
            {wedding.partnerOne}
            <span className="my-1 block font-serif text-3xl text-ink/70">&</span>
            {wedding.partnerTwo}
          </h1>
          <p className="mt-4 font-serif text-lg tracking-[0.18em]">{wedding.dateNumeric}</p>
          <p className="mt-1 text-xs tracking-[0.22em] text-plum uppercase">{wedding.timeLine}</p>
          <div className="mt-6">
            <PhotoSlot src={wedding.photos.cover} alt={`${wedding.partnerOne} and ${wedding.partnerTwo}`} className="mx-auto h-56 w-40 rounded-t-full object-top">
              <VenueMark />
            </PhotoSlot>
          </div>
          <p className="mt-4 font-serif text-xl">{wedding.venueName}</p>
          <p className="mt-1 text-xs tracking-[0.2em] text-muted uppercase">{wedding.dateLine}</p>
        </OrnamentFrame>
        <LaceEdge flip />
      </header>

      <section className="bg-paper px-8 pt-10 pb-4 text-center">
        <Swans />
        <h2 className="font-serif text-3xl leading-tight">
          Together with
          <span className="block italic">their families</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-muted">{wedding.message}</p>
      </section>
    </>
  );
}
