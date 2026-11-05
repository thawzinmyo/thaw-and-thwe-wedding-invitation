import { LaceEdge, ThaiMotif } from "@/components/Lace";

export function FittedPhoto({
  src,
  children,
  insetClass,
}: {
  src: string;
  children: React.ReactNode;
  insetClass: string;
}) {
  return (
    <div className="flex h-full items-center justify-center bg-paper">
      <div className="relative aspect-[736/1104] w-[min(100%,calc((100dvh-6rem)*736/1104))]">
        <img src={src} alt="" className="pointer-events-none h-full w-full select-none" />
        <div className={`absolute flex flex-col items-center justify-center overflow-hidden text-center ${insetClass}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export function PageLace({
  children,
  className = "bg-paper",
  motif,
}: {
  children: React.ReactNode;
  className?: string;
  motif?: "wat" | "boat" | "temple" | "house";
}) {
  return (
    <div className={`relative flex h-full flex-col ${className}`}>
      <LaceEdge />
      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
      {motif ? (
        <span className="invite-float pointer-events-none absolute right-3 bottom-8 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-pearl/90 shadow-[0_4px_10px_rgba(120,60,70,0.08)]">
          <ThaiMotif kind={motif} className="h-8 w-8" />
        </span>
      ) : null}
    </div>
  );
}

export function LaceCanopy({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col items-center justify-center overflow-hidden px-8 py-4 text-center">
      {children}
    </div>
  );
}

export function PlumPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-paper px-6 text-center text-ink">
      <div className="w-full max-w-xs">{children}</div>
    </div>
  );
}

export function OpenPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="frame-scroll flex h-full flex-col items-center justify-center overflow-hidden bg-paper px-7 py-8 text-center">
      {children}
    </div>
  );
}
