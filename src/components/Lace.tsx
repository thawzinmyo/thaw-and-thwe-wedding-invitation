export function LaceEdge({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 400 64"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-12 w-full ${className || "text-lace"} ${flip ? "rotate-180" : ""}`}
    >
      <path
        fill="currentColor"
        opacity="0.45"
        d="M0 22 C18 22 28 46 50 46 C72 46 82 22 100 22 C118 22 128 46 150 46 C172 46 182 22 200 22 C218 22 228 46 250 46 C272 46 282 22 300 22 C318 22 328 46 350 46 C372 46 382 22 400 22 L400 0 L0 0 Z"
      />
      {Array.from({ length: 8 }, (_, index) => (
        <g key={index} transform={`translate(${26 + index * 50} 30)`} fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="0" cy="-8" r="3.2" />
          <circle cx="6" cy="-2" r="3.2" />
          <circle cx="3" cy="6" r="3.2" />
          <circle cx="-4" cy="5" r="3.2" />
          <circle cx="-6" cy="-2" r="3.2" />
          <circle cx="0" cy="0" r="1.6" fill="currentColor" stroke="none" />
        </g>
      ))}
    </svg>
  );
}

export function WaxSealMark() {
  const ribbon = {
    fill: "none" as const,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 240 280" className="h-36 w-32" aria-hidden="true">
      <defs>
        <linearGradient id="ribbon-light" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff6f4" />
          <stop offset="0.4" stopColor="#f3c9c6" />
          <stop offset="1" stopColor="#d08b92" />
        </linearGradient>
        <linearGradient id="ribbon-deep" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e8b4b6" />
          <stop offset="0.5" stopColor="#b56d78" />
          <stop offset="1" stopColor="#8f555c" />
        </linearGradient>
      </defs>
      <ellipse cx="120" cy="258" rx="54" ry="8" fill="#6d3f48" opacity="0.12" />
      <path d="M112 150 C88 186 64 214 52 236" stroke="url(#ribbon-deep)" strokeWidth="20" {...ribbon} />
      <path d="M52 228 L30 258" stroke="url(#ribbon-deep)" strokeWidth="14" {...ribbon} />
      <path d="M56 232 L74 262" stroke="url(#ribbon-light)" strokeWidth="14" {...ribbon} />
      <path d="M128 150 C152 186 176 214 188 236" stroke="url(#ribbon-light)" strokeWidth="20" {...ribbon} />
      <path d="M188 228 L210 258" stroke="url(#ribbon-light)" strokeWidth="14" {...ribbon} />
      <path d="M184 232 L166 262" stroke="url(#ribbon-deep)" strokeWidth="14" {...ribbon} />
      <path
        d="M120 146 C108 104 62 78 42 96 C18 118 28 162 72 158 C96 156 112 150 120 146"
        stroke="url(#ribbon-light)"
        strokeWidth="22"
        {...ribbon}
      />
      <path
        d="M120 146 C132 104 178 78 198 96 C222 118 212 162 168 158 C144 156 128 150 120 146"
        stroke="url(#ribbon-deep)"
        strokeWidth="22"
        {...ribbon}
      />
      <path
        d="M116 132 C100 108 68 96 52 110"
        stroke="#fff6f5"
        strokeWidth="5"
        opacity="0.7"
        {...ribbon}
      />
      <path d="M128 124 C150 104 176 108 190 122" stroke="#fff6f5" strokeWidth="4" opacity="0.4" {...ribbon} />
      <path d="M104 132 C108 154 132 154 136 132 C132 146 108 146 104 132 Z" fill="#8f555c" />
      <path d="M110 134 C112 148 128 148 130 134 C126 142 114 142 110 134 Z" fill="#f6d5d0" />
      <Sparkle x={36} y={62} />
      <Sparkle x={196} y={48} scale={0.72} />
      <Sparkle x={168} y={28} scale={0.5} />
    </svg>
  );
}

function Sparkle({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <circle r="9" fill="#fff6f5" opacity="0.85" />
      <path d="M0 -8 L1.6 -1.6 L8 0 L1.6 1.6 L0 8 L-1.6 1.6 L-8 0 L-1.6 -1.6 Z" fill="#fffaf4" />
    </g>
  );
}

export function Swans() {
  return (
    <svg viewBox="0 0 180 90" className="mx-auto h-16 w-36 text-ink/80" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M18 62c22 0 28-18 34-32 4-10 14-16 24-12 6 2 10 8 10 14" />
      <path d="M162 62c-22 0-28-18-34-32-4-10-14-16-24-12-6 2-10 8-10 14" />
      <path d="M86 32c-8 10-8 18 4 22 12 4 12-8 4-22" />
      <path d="M94 32c8 10 8 18-4 22-12 4-12-8-4-22" />
      <circle cx="78" cy="28" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="102" cy="28" r="2.2" fill="currentColor" stroke="none" />
      <path d="M14 70h152" />
      <path d="M24 70c6 8 10 10 8 14M156 70c-6 8-10 10-8 14" />
    </svg>
  );
}

export function LaceVeil() {
  return (
    <div className="veil-art" aria-hidden="true">
      <img
        src="/images/Antique%20Rococo.jpeg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </div>
  );
}

function Sprig({ x, y, scale = 1, flip = false }: { x: number; y: number; scale?: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale})`} fill="none" stroke="#c4b3bb" strokeWidth="0.9">
      <path d="M0 8c10-16 22-22 30-10" />
      <circle cx="0" cy="-2" r="3.4" />
      <circle cx="8" cy="3" r="2.8" />
      <circle cx="-7" cy="4" r="2.5" />
      <circle cx="2" cy="9" r="2.2" />
      <circle cx="1" cy="3" r="1.2" fill="#ddd2d8" stroke="none" />
    </g>
  );
}

export function ThaiMotif({ kind = "wat", className = "h-10 w-10" }: { kind?: "wat" | "boat" | "temple" | "house"; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {kind === "wat" ? <WatArun x={32} y={54} scale={1} /> : null}
      {kind === "boat" ? <Longtail x={6} y={34} /> : null}
      {kind === "temple" ? <TempleRoof x={32} y={54} /> : null}
      {kind === "house" ? <GlassHouse x={8} y={50} scale={0.72} /> : null}
    </svg>
  );
}

function WatArun({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} fill="#f6d5cf" stroke="#7a4550" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M0 2 L-16 -2 L-13 -12 L-18 -14 L-12 -24 L-15 -26 L-8 -36 L-4 -28 L0 -46 L4 -28 L8 -36 L15 -26 L12 -24 L18 -14 L13 -12 L16 -2 Z" />
      <path d="M-7 -16h14M-5 -26h10" stroke="#b88858" fill="none" />
      <circle cx="0" cy="-48" r="2" fill="#b88858" stroke="none" />
    </g>
  );
}

function TempleRoof({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} fill="#f3d0cb" stroke="#7a4550" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M0 0 L-16 -4 L0 -16 L16 -4 Z" />
      <path d="M-10 -6 L0 -20 L10 -6" />
      <path d="M0 -20 V-28" />
      <circle cx="0" cy="-30" r="2" fill="#b88858" stroke="none" />
    </g>
  );
}

function Longtail({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`} fill="#fff6f4" stroke="#7a4550" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M0 8 L34 2 L40 10 L6 14 Z" />
      <path d="M16 8 V2 h8 v6" />
      <path d="M34 4 L52 -6" fill="none" />
    </g>
  );
}

function GlassHouse({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} fill="#fff8f6" stroke="#8f555c" strokeWidth="1.2" strokeLinejoin="round">
      <path d="M8 0 H56 V-28 H8 Z" />
      <path d="M4 -28 H60 L32 -48 Z" />
      <path d="M24 0 V-16 H40 V0" />
      <path d="M8 -14 H56 M20 -28 V-14 M36 -28 V-14" fill="none" />
      <path d="M32 -48 V-28" fill="none" />
    </g>
  );
}

export function VenueMark() {
  return (
    <svg viewBox="0 0 180 110" className="h-28 w-44 text-ink/75" fill="none" stroke="currentColor" strokeWidth="1.15" aria-hidden="true">
      <path d="M12 86h156" />
      <path d="M28 86V52h124v34" />
      <path d="M28 52 90 24l62 28" />
      <path d="M78 86V60h24v26" />
      <path d="M78 60c0-8 24-8 24 0" />
      <path d="M46 66h16v14H46zM118 66h16v14h-16z" />
      <path d="M18 86c8-16 8-28 0-40M162 86c-8-16-8-28 0-40" />
      <circle cx="18" cy="42" r="8" />
      <circle cx="162" cy="42" r="8" />
    </svg>
  );
}

export function PhotoSlot({
  src,
  alt,
  children,
  className = "",
}: {
  src: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (!src) {
    return <div className={className}>{children}</div>;
  }

  return (
    <img src={src} alt={alt} className={`object-cover ${className}`} />
  );
}

const frameSrc = "/images/Elegant%20Champagne%20Floral%20Invitation%20Frame.png";

export function InvitationFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full items-center justify-center bg-paper">
      <div className="relative aspect-[1024/1536] w-[min(100%,calc((100dvh-6rem)*1024/1536))]">
        <img src={frameSrc} alt="" className="pointer-events-none h-full w-full select-none" />
        <div className="absolute inset-[18%_16%_17%_16%] flex flex-col items-center justify-center overflow-hidden text-center">
          {children}
        </div>
      </div>
    </div>
  );
}

export function OrnamentFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-sm items-center px-2 py-3 text-center">
      <div className="relative h-full w-full">
        <svg viewBox="0 0 320 640" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
          <path d="M46 108C46 36 92 22 160 22s114 14 114 86v390c0 86-48 112-114 112S46 584 46 498Z" stroke="#cbbec6" strokeWidth="1.3" />
          <path d="M58 118C58 52 98 38 160 38s102 14 102 80v372c0 74-42 98-102 98s-102-24-102-98Z" stroke="#cbbec6" strokeWidth="0.7" />
        </svg>
        <span className="pointer-events-none absolute top-6 left-1">
          <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
            <Sprig x={16} y={18} />
          </svg>
        </span>
        <span className="pointer-events-none absolute top-6 right-2">
          <svg viewBox="0 0 48 48" className="h-12 w-12 -scale-x-100" aria-hidden="true">
            <Sprig x={16} y={20} />
          </svg>
        </span>
        <span className="pointer-events-none absolute bottom-8 left-2">
          <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
            <Sprig x={16} y={16} />
          </svg>
        </span>
        <span className="pointer-events-none absolute right-2 bottom-8">
          <svg viewBox="0 0 48 48" className="h-12 w-12 -scale-x-100" aria-hidden="true">
            <Sprig x={16} y={16} />
          </svg>
        </span>
        <div className="ornament-inner relative z-10 flex h-full flex-col items-center justify-center px-8 py-12">{children}</div>
      </div>
    </div>
  );
}
