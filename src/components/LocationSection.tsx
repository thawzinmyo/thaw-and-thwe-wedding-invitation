import { LaceEdge, PhotoSlot, VenueMark } from "@/components/Lace";
import { wedding } from "@/wedding";

export function LocationSection() {
  return (
    <section id="location" className="flex h-full flex-col bg-paper px-6 text-center">
      <LaceEdge className="shrink-0 text-lace" />
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center py-4">
        <h2 className="font-serif text-4xl">Location</h2>
        <p className="mt-2 font-script text-4xl text-plum">{wedding.venueName}</p>
        <p className="mt-3 text-xs tracking-[0.22em] text-muted uppercase">{wedding.dateLine}</p>
        <p className="mt-1 text-xs tracking-[0.22em] text-plum uppercase">{wedding.timeLine}</p>
        <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-muted">{wedding.locationNote}</p>
        <a
          href={wedding.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex border border-plum/30 px-5 py-2 text-xs tracking-[0.2em] text-plum uppercase"
        >
          View on Google Maps
        </a>
        <PhotoSlot src={wedding.photos.venue} alt={wedding.venueName} className="mx-auto mt-6 h-44 max-h-[28dvh] w-full max-w-sm object-cover">
          <VenueMark />
        </PhotoSlot>
      </div>
    </section>
  );
}
