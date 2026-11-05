import { BouquetArt } from "@/components/RomanceArt";
import { wedding } from "@/wedding";

export function DressCode() {
  return (
    <section id="dress-code" className="flex h-full flex-col items-center overflow-hidden bg-paper px-6 pt-6 text-center">
      <h2 className="font-serif text-5xl">Dress Code</h2>
      <p className="mt-1 font-serif text-2xl tracking-[0.04em]">{wedding.dressCode}</p>
      <img
        src={wedding.photos.dressCode}
        alt="Formal morning attire for the wedding"
        className="invite-float mt-3 h-auto max-h-[min(13.5rem,30dvh)] w-auto max-w-[9.25rem] object-contain"
      />
      <p className="mx-auto mt-3 max-w-[17rem] font-serif text-lg leading-snug text-ink/85 italic">
        We’d love for our guests to embrace the occasion with elegant morning attire. Dress beautifully, feel
        comfortable, and come ready to celebrate with us.
      </p>
      <BouquetArt />
    </section>
  );
}
