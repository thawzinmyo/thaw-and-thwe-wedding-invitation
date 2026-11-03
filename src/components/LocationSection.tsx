import { InvitationFrame, PhotoSlot, VenueMark } from "@/components/Lace";
import { wedding } from "@/wedding";

export function LocationSection() {
  return (
    <section id="location" className="h-full">
      <InvitationFrame>
        <h2 className="font-serif text-3xl">Location</h2>
        <p className="mt-1 font-script text-3xl text-plum">{wedding.venueName}</p>
        <p className="mt-2 text-[0.65rem] tracking-[0.18em] text-muted uppercase">{wedding.dateLine}</p>
        <p className="mt-1 text-[0.65rem] tracking-[0.18em] text-plum uppercase">{wedding.timeLine}</p>
        <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">{wedding.locationNote}</p>
        <div className="mx-auto mt-3 w-full max-w-[14rem] rounded-[50%] border border-lace p-1.5">
          <PhotoSlot src={wedding.photos.venue} alt={wedding.venueName} className="mx-auto h-28 w-full rounded-[46%] object-cover">
            <VenueMark />
          </PhotoSlot>
        </div>
        <a
          href={wedding.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex rounded-full border border-ink/20 px-6 py-2 text-[0.65rem] tracking-[0.18em] text-ink uppercase"
        >
          Get directions
        </a>
      </InvitationFrame>
    </section>
  );
}
