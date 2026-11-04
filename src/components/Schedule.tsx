import { wedding } from "@/wedding";

const drawings = {
  drink: (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M16 16h12l-1.4 12a5.2 5.2 0 0 1-9.2 0Z" />
      <path d="M22 28v5M17 33h10" />
      <path d="M36 16h12l-1.4 12a5.2 5.2 0 0 1-9.2 0Z" />
      <path d="M42 28v5M37 33h10" />
      <path d="M46 14c2-3 5-3 6-1" />
    </svg>
  ),
  ceremony: (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M14 50V30M50 50V30" />
      <path d="M14 30c0-14 36-14 36 0" />
      <path d="M22 30c2-8 18-8 20 0" />
      <circle cx="20" cy="24" r="2.2" />
      <circle cx="32" cy="16" r="2.4" />
      <circle cx="44" cy="24" r="2.2" />
      <path d="M28 50V38h8v12" />
    </svg>
  ),
  photo: (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <rect x="12" y="22" width="40" height="26" rx="3" />
      <circle cx="32" cy="35" r="7" />
      <circle cx="32" cy="35" r="3" />
      <path d="M24 22l3-5h10l3 5" />
      <path d="M44 18h6" />
    </svg>
  ),
  meal: (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <ellipse cx="32" cy="40" rx="18" ry="7" />
      <path d="M16 40c2-10 28-10 32 0" />
      <path d="M24 30c2-6 6-8 8-8s6 2 8 8" />
      <path d="M28 22c1-4 7-4 8 0" />
    </svg>
  ),
  farewell: (
    <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <circle cx="32" cy="24" r="5" />
      <circle cx="22" cy="30" r="4" />
      <circle cx="42" cy="30" r="4" />
      <path d="M32 29v16" />
      <path d="M26 48c4 3 8 3 12 0" />
      <path d="M32 36c-6 2-8 6-8 8M32 36c6 2 8 6 8 8" />
    </svg>
  ),
} as const;

export function Schedule() {
  const last = wedding.schedule.length - 1;

  return (
    <section id="schedule" className="flex h-full flex-col items-center overflow-hidden bg-paper px-5 pt-4 text-center">
      <h2 className="font-serif text-5xl">The morning</h2>
      <p className="mt-2 font-serif text-lg text-muted italic">A day to celebrate</p>
      <ol className="mt-4 w-full max-w-[22rem]">
        {wedding.schedule.map((event, index) => (
          <li key={event.title} className="grid grid-cols-[3.1rem_4.5rem_0.9rem_1fr] items-center gap-x-1.5 py-2 text-left">
            <div className="text-[#b08984]">{drawings[event.icon as keyof typeof drawings]}</div>
            <p className="text-right font-serif text-[0.95rem] tracking-[0.02em] text-ink">{event.time}</p>
            <div className="relative h-full self-stretch">
              <span
                className={`absolute left-1/2 w-px -translate-x-1/2 bg-[#cbb4ae] ${index === 0 ? "top-1/2" : "top-0"} ${index === last ? "bottom-1/2" : "bottom-0"}`}
              />
              <Heart />
            </div>
            <div>
              <h3 className="font-serif text-[0.78rem] tracking-[0.14em] uppercase">{event.title}</h3>
              <p className="mt-0.5 font-serif text-[0.8rem] leading-snug text-ink/75">{event.detail}</p>
            </div>
          </li>
        ))}
      </ol>
      <TableScene />
    </section>
  );
}

function TableScene() {
  return (
    <svg viewBox="0 0 360 200" className="mt-auto mb-6 h-40 w-full max-w-[22rem] text-plum" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M0 132 L360 78" />
      <path d="M8 188 L360 128" />
      <ellipse cx="58" cy="168" rx="36" ry="8" />
      <path d="M58 160 V142" />
      <ellipse cx="58" cy="142" rx="28" ry="6" />
      <path d="M32 142 V116 H84 V142" />
      <path d="M32 142 q8.5-8 17 0 t17 0 t18 0" />
      <path d="M40 116 V94 H76 V116" />
      <path d="M40 116 q6-7 12 0 t12 0 t12 0" />
      <circle cx="58" cy="82" r="6" />
      <path d="M48 88c-12 3-14-6-4-10M68 88c12 3 14-6 4-10" />
      <circle cx="90" cy="124" r="5" />
      <path d="M90 129 c4 8 10 10 12 6" />
      <Candle x={128} y={156} h={40} />
      <path d="M178 148 V118" />
      <ellipse cx="178" cy="116" rx="16" ry="4" />
      <path d="M162 116 L178 90 L194 116" />
      <path d="M170 106 h16" />
      <Candle x={224} y={136} h={56} />
      <Wine x={268} y={112} />
      <Wine x={296} y={104} />
      <path d="M330 118 c8 8 6 22-8 24 h-16 c-10-2-12-16-4-24 4-6 16-10 28 0Z" />
      <path d="M322 114 V96 M334 110 V90" />
      <circle cx="316" cy="90" r="5" />
      <circle cx="338" cy="82" r="5.5" />
      <path d="M110 178 c22-6 40-2 48 10" />
      <path d="M122 170 l20 14 M138 164 l16 16" />
    </svg>
  );
}

function Candle({ x, y, h }: { x: number; y: number; h: number }) {
  const top = y - h;
  return (
    <g>
      <path d={`M${x} ${y} V${top}`} />
      <path d={`M${x - 3} ${top} c2-8 8-8 6 0`} />
      <path d={`M${x - 8} ${top + 10} c5 4 11 4 16 0`} />
      <path d={`M${x - 8} ${top + 10} c-2 6 2 8 6 5 M${x + 8} ${top + 10} c2 6-2 8-6 5`} />
    </g>
  );
}

function Wine({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <path d={`M${x - 7} ${y} c1-14 13-14 14 0`} />
      <path d={`M${x - 7} ${y} h14`} />
      <path d={`M${x} ${y} V${y + 16}`} />
      <path d={`M${x - 6} ${y + 16} h12`} />
    </g>
  );
}

function Heart() {
  return (
    <svg viewBox="0 0 12 12" className="absolute top-1/2 left-1/2 z-10 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 text-plum" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6 10.2S1.2 7.1 1.2 4.2C1.2 2.7 2.4 1.7 3.7 1.7c1 0 1.8.5 2.3 1.3.5-.8 1.3-1.3 2.3-1.3 1.3 0 2.5 1 2.5 2.5C10.8 7.1 6 10.2 6 10.2Z"
      />
    </svg>
  );
}
