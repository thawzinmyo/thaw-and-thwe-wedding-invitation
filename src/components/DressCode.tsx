import { OrnamentFrame, PhotoSlot } from "@/components/Lace";
import { wedding } from "@/wedding";

export function DressCode() {
  return (
    <section id="dress-code" className="flex h-full items-center bg-blush px-4 text-center">
      <OrnamentFrame>
        <h2 className="font-serif text-4xl">Dress Code</h2>
        <p className="mt-2 font-script text-3xl text-plum">{wedding.dressCode}</p>
        <div className="mt-5">
          <PhotoSlot
            src={wedding.photos.dressCode}
            alt="Myanmar traditional dress for the wedding"
            className="mx-auto h-64 max-h-[34dvh] w-48 object-center"
          >
            <span className="sr-only">Photo coming soon</span>
          </PhotoSlot>
          <p className="mx-auto mt-4 max-w-[14rem] text-sm leading-relaxed text-muted">
            We would love to see you in Myanmar traditional dress for the celebration.
          </p>
        </div>
      </OrnamentFrame>
    </section>
  );
}
