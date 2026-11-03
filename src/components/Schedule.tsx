import { LaceEdge } from "@/components/Lace";
import { wedding } from "@/wedding";

const icons = {
  drink: (
    <svg viewBox="0 0 32 32" className="mx-auto h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M8 6h16l-2 8a6 6 0 0 1-12 0Z" />
      <path d="M16 20v6M12 26h8" />
    </svg>
  ),
  rings: (
    <svg viewBox="0 0 32 32" className="mx-auto h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <circle cx="13" cy="16" r="6" />
      <circle cx="19" cy="16" r="6" />
    </svg>
  ),
  meal: (
    <svg viewBox="0 0 32 32" className="mx-auto h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M8 14h16v4a8 8 0 0 1-16 0z" />
      <path d="M6 14h20M16 8v6" />
    </svg>
  ),
  farewell: (
    <svg viewBox="0 0 32 32" className="mx-auto h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <circle cx="16" cy="16" r="8" />
      <path d="M16 10v6l4 2" />
    </svg>
  ),
} as const;

export function Schedule() {
  return (
    <section id="schedule" className="bg-paper px-6 py-12">
      <div className="text-center">
        <LaceEdge />
        <p className="mt-6 font-serif text-sm text-muted italic">A day to celebrate</p>
        <h2 className="mt-2 font-serif text-4xl">The morning</h2>
      </div>
      <ol className="relative mt-10">
        {wedding.schedule.map((event, index) => (
          <li key={event.title} className="grid grid-cols-[4.5rem_1.25rem_1fr] gap-3 pb-8">
            <div className="text-center text-plum">
              {icons[event.icon as keyof typeof icons]}
              {event.time ? <p className="mt-2 font-serif text-sm leading-tight">{event.time}</p> : null}
            </div>
            <div className="relative">
              {index < wedding.schedule.length - 1 && (
                <span className="absolute top-2 bottom-0 left-1/2 w-px -translate-x-1/2 bg-lace" />
              )}
              <span className="absolute top-2 left-1/2 size-2 -translate-x-1/2 rounded-full border border-plum bg-paper" />
            </div>
            <div>
              <h3 className="font-serif text-lg tracking-[0.16em] uppercase">{event.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{event.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
