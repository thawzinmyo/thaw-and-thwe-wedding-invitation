import { RideArt } from "@/components/RomanceArt";
import { wedding } from "@/wedding";

export function Transportation() {
  return (
    <section id="transport" className="flex h-full flex-col items-center overflow-hidden bg-paper px-8 pt-8 text-center">
      <h2 className="font-serif text-5xl">Transportation</h2>
      <p className="mx-auto mt-6 max-w-[18.5rem] font-serif text-[0.95rem] leading-relaxed text-ink/80">{wedding.transport.nearby}</p>
      <p className="mx-auto mt-4 max-w-[18.5rem] font-serif text-[0.95rem] leading-relaxed text-ink/80">{wedding.transport.advice}</p>
      <ol className="mt-8 w-full max-w-[16rem] text-left font-serif text-ink">
        <li className="flex items-start gap-3">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-[#e0cbb3] font-serif text-xs text-plum">1</span>
          <span>
            <span className="block text-lg leading-tight">Bang Wa</span>
            <span className="text-sm text-muted">BTS Station</span>
          </span>
        </li>
        <li className="my-2 ml-3 h-6 border-l border-[#e0cbb3]" aria-hidden="true" />
        <li className="flex items-start gap-3">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-[#e0cbb3] font-serif text-xs text-plum">2</span>
          <span>
            <span className="block text-lg leading-tight">Grab or Bolt</span>
            <span className="text-sm text-muted">Taxi from the station to No. 24 The Glass House</span>
          </span>
        </li>
      </ol>
      <RideArt />
    </section>
  );
}
