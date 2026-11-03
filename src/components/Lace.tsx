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
  const leaves = Array.from({ length: 18 }, (_, index) => {
    const angle = (index / 18) * Math.PI * 2 - Math.PI / 2;
    const cx = 70 + Math.cos(angle) * 36;
    const cy = 88 + Math.sin(angle) * 50;
    const turn = (angle * 180) / Math.PI + 90;
    return (
      <ellipse
        key={index}
        cx={cx}
        cy={cy}
        rx="2.4"
        ry="6.5"
        fill="none"
        stroke="#b7a8b3"
        strokeWidth="1.1"
        transform={`rotate(${turn} ${cx} ${cy})`}
      />
    );
  });

  return (
    <svg viewBox="0 0 140 176" className="h-40 w-32 drop-shadow-md" aria-hidden="true">
      <ellipse cx="70" cy="88" rx="58" ry="76" fill="#f7f2f5" stroke="#d5c9d0" strokeWidth="3" />
      <ellipse cx="70" cy="88" rx="46" ry="62" fill="none" stroke="#e4dbe0" strokeWidth="6" />
      {leaves}
      <text
        x="70"
        y="96"
        textAnchor="middle"
        fill="#8d7c88"
        fontFamily="Palatino, 'Palatino Linotype', serif"
        fontSize="20"
      >
        T & T
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
  const flowers = [];
  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 4; col += 1) {
      const x = 48 + col * 98 + (row % 2) * 28;
      const y = 70 + row * 100;
      const inSeal = x > 120 && x < 270 && y > 300 && y < 560;
      if (!inSeal) flowers.push({ x, y, key: `${row}-${col}` });
    }
  }

  return (
    <svg viewBox="0 0 390 844" preserveAspectRatio="xMidYMid slice" className="veil-art" aria-hidden="true">
      <rect width="390" height="844" fill="#f3e8ee" />
      <path d={edgeWave(22, 1)} fill="none" stroke="#c9bcc6" strokeWidth="1.2" />
      <path d={edgeWave(368, -1)} fill="none" stroke="#c9bcc6" strokeWidth="1.2" />
      <path d={edgeWave(36, 1)} fill="none" stroke="#c9bcc6" strokeWidth="0.7" />
      <path d={edgeWave(354, -1)} fill="none" stroke="#c9bcc6" strokeWidth="0.7" />
      {Array.from({ length: 15 }, (_, index) => {
        const y = 36 + index * 54;
        const bulge = index % 2 === 0 ? 14 : 0;
        return (
          <g key={index} fill="#fbf8f9" stroke="#c9bcc6">
            <circle cx={22 + bulge} cy={y} r="3.3" />
            <circle cx={368 - bulge} cy={y} r="3.3" />
          </g>
        );
      })}
      {flowers.map((flower) => (
        <g key={flower.key} transform={`translate(${flower.x} ${flower.y})`} fill="none" stroke="#c9bcc6" strokeWidth="1">
          <circle cx="0" cy="-8" r="4" />
          <circle cx="7" cy="-2" r="4" />
          <circle cx="4" cy="7" r="4" />
          <circle cx="-5" cy="6" r="4" />
          <circle cx="-7" cy="-2" r="4" />
          <circle cx="0" cy="0" r="2" fill="#c9bcc6" stroke="none" />
        </g>
      ))}
    </svg>
  );
}

function edgeWave(x: number, direction: number) {
  let path = `M${x} 8`;
  for (let y = 8; y < 836; y += 54) {
    path += ` Q${x + direction * 16} ${y + 27} ${x} ${y + 54}`;
  }
  return path;
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

export function OrnamentFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-sm px-5 py-8 text-center">
      <div className="rounded-[2.75rem] border border-lace p-2.5">
        <div className="ornament-inner rounded-[2.15rem] border border-lace/80 px-6 pt-12 pb-12">{children}</div>
      </div>
    </div>
  );
}
