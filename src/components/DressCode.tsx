import { BouquetArt } from "@/components/RomanceArt";
import { wedding } from "@/wedding";

export function DressCode() {
  return (
    <section id="dress-code" className="flex h-full flex-col items-center overflow-hidden bg-paper px-6 pt-6 text-center">
      <h2 className="font-serif text-5xl">Dress Code</h2>
      <p className="mt-1 font-serif text-2xl tracking-[0.04em]">{wedding.dressCode}</p>
      <img
        src={wedding.photos.dressCode}
        alt="A couple dressed for the wedding celebration"
        className="dress-sketch invite-float mt-2 h-auto max-h-[min(22rem,42dvh)] w-auto max-w-[min(18rem,88%)] object-contain"
      />
      <p className="mx-auto mt-2 max-w-[17rem] font-serif text-lg leading-snug text-ink/85 italic">
        Wear whatever makes you feel lovely and at ease. There is no need to be formal. Come ready to celebrate
        with us.
      </p>
      <BouquetArt className="mt-1 h-28" />
    </section>
  );
}
