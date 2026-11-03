import { InvitationFrame } from "@/components/Lace";
import { wedding } from "@/wedding";

const icons = {
  drink: (
    <svg viewBox="0 0 32 32" className="mx-auto h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M8 6h16l-2 8a6 6 0 0 1-12 0Z" />
      <path d="M16 20v6M12 26h8" />
    </svg>
  ),
  rings: (
    <svg viewBox="0 0 32 32" className="mx-auto h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <circle cx="13" cy="16" r="6" />
      <circle cx="19" cy="16" r="6" />
    </svg>
  ),
  meal: (
    <svg viewBox="0 0 32 32" className="mx-auto h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M8 14h16v4a8 8 0 0 1-16 0z" />
      <path d="M6 14h20M16 8v6" />
    </svg>
  ),
  farewell: (
    <svg viewBox="0 0 32 32" className="mx-auto h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <circle cx="16" cy="16" r="8" />
      <path d="M16 10v6l4 2" />
    </svg>
  ),
} as const;

export function Schedule() {
  return (
    <section id="schedule" className="h-full">
      <InvitationFrame>
        <p className="font-serif text-sm text-muted italic">A day to celebrate</p>
        <h2 className="mt-1 font-serif text-3xl">The morning</h2>
        <ol className="relative mt-4 w-full text-left">
        {wedding.schedule.map((event, index) => (
          <li key={event.title} className="grid grid-cols-[3.5rem_1rem_1fr] gap-2 pb-3 last:pb-0">
            <div className="text-center text-plum">
              {icons[event.icon as keyof typeof icons]}
              {event.time ? <p className="mt-1 font-serif text-xs leading-tight">{event.time}</p> : null}
            </div>
            <div className="relative">
              {index < wedding.schedule.length - 1 && (
                <span className="absolute top-2 bottom-0 left-1/2 w-px -translate-x-1/2 bg-lace" />
              )}
              <span className="absolute top-2 left-1/2 size-2 -translate-x-1/2 rounded-full border border-plum bg-paper" />
            </div>
            <div>
              <h3 className="font-serif text-base tracking-[0.14em] uppercase">{event.title}</h3>
              <p className="mt-0.5 text-xs leading-relaxed text-muted">{event.detail}</p>
            </div>
          </li>
        ))}
        </ol>
      </InvitationFrame>
    </section>
  );
}
