import { PhotoSlot } from "@/components/Lace";
import { wedding } from "@/wedding";

const frame = scallopedOval(100, 128, 74, 102, 32);

export function LocationSection() {
  return (
    <section id="location" className="flex h-full flex-col items-center justify-center overflow-hidden bg-paper px-7 text-center">
      <h2 className="font-serif text-5xl">Location</h2>
      <p className="mt-1 font-script text-[2.35rem] leading-[1.05] whitespace-pre-line text-plum">
        {wedding.venueName.replace(" The ", "\nThe ")}
      </p>
      <p className="mt-3 text-[0.68rem] tracking-[0.32em] text-muted uppercase">{wedding.city}</p>
      <p className="mx-auto mt-5 max-w-[18.5rem] font-serif text-[0.95rem] leading-relaxed text-ink/80">{wedding.locationLead}</p>
      <p className="mx-auto mt-3 max-w-[18.5rem] font-serif text-[0.95rem] leading-relaxed text-ink/80">{wedding.locationNote}</p>
      <div className="relative mt-3 h-56 w-44">
        <PhotoSlot
          src={wedding.photos.venue}
          alt={wedding.venueName}
          className="absolute top-[8%] left-[10%] h-[78%] w-[80%] object-cover object-[center_30%] [clip-path:ellipse(50%_50%_at_50%_46%)] [mask-image:linear-gradient(to_bottom,#000_62%,transparent_96%)]"
        >
          <span className="sr-only">{wedding.venueName}</span>
        </PhotoSlot>
        <svg viewBox="0 0 200 256" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
          <path d={frame} fill="none" stroke="#e4c9c6" strokeWidth="1.4" />
          <ellipse cx="100" cy="128" rx="68" ry="94" fill="none" stroke="#f7e4e1" strokeWidth="3" />
        </svg>
      </div>
      <a
        href={wedding.mapUrl}
        target="_blank"
        rel="noreferrer"
        className="text-[0.65rem] tracking-[0.22em] text-ink uppercase"
      >
        Get directions
      </a>
    </section>
  );
}

function scallopedOval(cx: number, cy: number, rx: number, ry: number, count: number) {
  let path = "";
  for (let index = 0; index < count; index += 1) {
    const start = (index / count) * Math.PI * 2 - Math.PI / 2;
    const end = ((index + 1) / count) * Math.PI * 2 - Math.PI / 2;
    const mid = (start + end) / 2;
    const x0 = cx + Math.cos(start) * rx;
    const y0 = cy + Math.sin(start) * ry;
    const x1 = cx + Math.cos(end) * rx;
    const y1 = cy + Math.sin(end) * ry;
    const xm = cx + Math.cos(mid) * rx * 1.075;
    const ym = cy + Math.sin(mid) * ry * 1.075;
    path += `${index === 0 ? "M" : "L"}${x0.toFixed(1)} ${y0.toFixed(1)} Q${xm.toFixed(1)} ${ym.toFixed(1)} ${x1.toFixed(1)} ${y1.toFixed(1)} `;
  }
  return `${path}Z`;
}
