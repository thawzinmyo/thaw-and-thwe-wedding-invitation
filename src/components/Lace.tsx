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
  const pearls = Array.from({ length: 22 }, (_, index) => {
    const angle = (index / 22) * Math.PI * 2 - Math.PI / 2;
    return <circle key={index} cx={70 + Math.cos(angle) * 46} cy={70 + Math.sin(angle) * 46} r="1.7" fill="#f7f3f5" stroke="#c3b4bc" strokeWidth="0.6" />;
  });

  return (
    <svg viewBox="0 0 140 140" className="h-32 w-32 drop-shadow-[0_10px_18px_rgba(90,60,75,0.18)]" aria-hidden="true">
      <ellipse cx="70" cy="74" rx="48" ry="18" fill="#000" opacity="0.06" />
      <circle cx="70" cy="70" r="54" fill="#f4eef2" stroke="#ddd2d8" strokeWidth="2" />
      <circle cx="70" cy="70" r="46" fill="none" stroke="#e7dce3" strokeWidth="5" />
      <circle cx="70" cy="70" r="40" fill="none" stroke="#cfc1c8" strokeWidth="0.8" />
      {pearls}
      <text x="70" y="66" textAnchor="middle" fill="#8a7682" fontFamily="Palatino, 'Palatino Linotype', serif" fontSize="15" fontStyle="italic">
        T
      </text>
      <text x="70" y="80" textAnchor="middle" fill="#b3a3ab" fontFamily="Palatino, 'Palatino Linotype', serif" fontSize="9">
        &
      </text>
      <text x="70" y="96" textAnchor="middle" fill="#8a7682" fontFamily="Palatino, 'Palatino Linotype', serif" fontSize="15" fontStyle="italic">
        T
      </text>
    </svg>
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
  const leftSprigs = [70, 150, 240, 340, 460, 560, 660, 760];

  return (
    <svg viewBox="0 0 390 844" preserveAspectRatio="xMidYMid slice" className="veil-art" aria-hidden="true">
      <rect width="390" height="844" fill="#f8e4e2" />
      <ellipse cx="195" cy="430" rx="150" ry="280" fill="#fceeee" />
      <path d={curtain(0)} fill="#f3d4d0" stroke="#e7c4bf" strokeWidth="1" />
      <path d={curtain(390)} fill="#f3d4d0" stroke="#e7c4bf" strokeWidth="1" transform="translate(390 0) scale(-1 1)" />
      <path d="M0 0h390v150C300 210 250 70 195 130 140 70 90 210 0 150Z" fill="#f3d4d0" stroke="#e7c4bf" strokeWidth="1" />
      {leftSprigs.map((y) => (
        <g key={y}>
          <Sprig x={28} y={y} />
          <Sprig x={362} y={y} flip />
          <Pearl x={78} y={y - 28} />
          <Pearl x={312} y={y - 28} />
        </g>
      ))}
      {Array.from({ length: 9 }, (_, index) => (
        <g key={index}>
          <Pearl x={36 + index * 40} y={28 + (index % 2) * 16} />
          <Sprig x={24 + index * 42} y={58} scale={0.7} />
        </g>
      ))}
    </svg>
  );
}

function curtain(x: number) {
  return `M${x} 0 L${x} 844 L${x + 92} 844 C${x + 120} 760 ${x + 48} 720 ${x + 96} 660 C${x + 140} 600 ${x + 54} 560 ${x + 100} 500 C${x + 146} 430 ${x + 58} 390 ${x + 108} 320 C${x + 150} 250 ${x + 70} 210 ${x + 124} 140 C${x + 160} 80 ${x + 90} 36 ${x + 150} 0 Z`;
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

function Pearl({ x, y }: { x: number; y: number }) {
  return <circle cx={x} cy={y} r="3.1" fill="#fbf8f9" stroke="#d5c8cf" strokeWidth="0.7" />;
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

const frameSrc = "/images/Dusty%20Rose%20Lace%20Invitation%20Frame.png";

export function InvitationFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full items-center justify-center bg-[#f6d8d4]">
      <div className="relative aspect-[1024/1536] w-[min(100%,calc(100dvh*1024/1536))]">
        <img src={frameSrc} alt="" className="pointer-events-none h-full w-full select-none" />
        <div className="absolute inset-[15%_15%_14%_15%] flex flex-col items-center justify-center overflow-y-auto text-center">
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
