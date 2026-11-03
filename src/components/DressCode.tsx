import { InvitationFrame, PhotoSlot } from "@/components/Lace";
import { wedding } from "@/wedding";

export function DressCode() {
  return (
    <section id="dress-code" className="h-full">
      <InvitationFrame>
        <h2 className="font-serif text-3xl">Dress Code</h2>
        <p className="mt-1 font-script text-3xl text-plum">{wedding.dressCode}</p>
        <PhotoSlot
          src={wedding.photos.dressCode}
          alt="Myanmar traditional dress for the wedding"
          className="mx-auto mt-3 h-44 w-32 object-center"
        >
          <span className="sr-only">Photo coming soon</span>
        </PhotoSlot>
        <p className="mx-auto mt-3 max-w-[14rem] text-sm leading-relaxed text-muted">
          We would love to see you in Myanmar traditional dress for the celebration.
        </p>
      </InvitationFrame>
    </section>
  );
}
