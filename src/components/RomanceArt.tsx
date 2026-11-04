const art =
  "mt-auto mb-2 w-full max-w-[19rem] text-plum [stroke-linecap:round] [stroke-linejoin:round]";

export function CountdownArt() {
  return (
    <svg viewBox="0 0 280 130" className={art} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <ellipse cx="104" cy="78" rx="36" ry="20" />
      <ellipse cx="156" cy="78" rx="36" ry="20" />
      <path d="M130 28 l4 9 9 1-7 6 2 9-8-4-8 4 2-9-7-6 9-1z" fill="currentColor" stroke="none" />
      <path d="M48 96c12-28 6-42-8-48" />
      <circle cx="36" cy="44" r="8" />
      <circle cx="56" cy="58" r="6" />
      <path d="M220 96c-12-28-6-42 8-48" />
      <circle cx="232" cy="44" r="8" />
      <circle cx="212" cy="58" r="6" />
    </svg>
  );
}

export function RideArt() {
  return (
    <svg viewBox="0 0 300 120" className={art} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 78 h150 l28-30 h62 v30 h22" />
      <path d="M64 48 h78 l24 30" />
      <path d="M86 48 V78 M132 48 V78" />
      <circle cx="78" cy="88" r="14" />
      <circle cx="78" cy="88" r="5" />
      <circle cx="228" cy="88" r="14" />
      <circle cx="228" cy="88" r="5" />
      <path d="M150 42 c-8-20 6-32 14-20 6-14 22-10 18 6" />
      <circle cx="162" cy="18" r="6" />
      <circle cx="180" cy="22" r="5" />
    </svg>
  );
}

export function BouquetArt() {
  return (
    <svg viewBox="0 0 280 180" className={`${art} h-52`} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <g transform="translate(0 6) scale(1 1.22)">
      <path d="M140 128 V62" />
      <path d="M140 96 c-28 4-40-14-30-28 M140 90 c28 4 40-14 30-28" />
      <circle cx="140" cy="46" r="14" />
      <circle cx="108" cy="60" r="12" />
      <circle cx="172" cy="60" r="12" />
      <circle cx="122" cy="32" r="9" />
      <circle cx="160" cy="32" r="9" />
      <path d="M112 112 c18 12 38 12 56 0" />
      <path d="M46 108c20-30 12-48-6-54" />
      <circle cx="36" cy="50" r="8" />
      <path d="M234 108c-20-30-12-48 6-54" />
      <circle cx="244" cy="50" r="8" />
      </g>
    </svg>
  );
}

export function GiftArt() {
  return (
    <svg viewBox="0 0 260 130" className={art} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="68" y="48" width="124" height="58" rx="2" />
      <path d="M130 48 V106 M68 72 H192" />
      <path d="M130 48 c-18-22-42-12-24 6 M130 48 c18-22 42-12 24 6" />
      <path d="M34 108 c14-26 8-40-6-46" />
      <circle cx="26" cy="58" r="8" />
      <circle cx="44" cy="72" r="6" />
      <path d="M220 108 c-14-26-8-40 6-46" />
      <circle cx="228" cy="58" r="8" />
      <circle cx="210" cy="72" r="6" />
    </svg>
  );
}

export function ReplyArt() {
  return (
    <svg viewBox="0 0 260 100" className={`${art} h-28`} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="62" y="22" width="136" height="62" rx="2" />
      <path d="M62 24 L130 62 L198 24" />
      <path d="M130 34 l3 6 6.4.8-4.6 4.2 1 6.4-5.8-3.2-5.8 3.2 1-6.4-4.6-4.2 6.4-.8z" fill="currentColor" stroke="none" />
      <path d="M28 78 c12-22 6-34-8-40" />
      <circle cx="18" cy="34" r="7" />
      <path d="M224 78 c-12-22-6-34 8-40" />
      <circle cx="234" cy="34" r="7" />
    </svg>
  );
}

export function ClosingArt() {
  return (
    <svg viewBox="0 0 300 120" className={art} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M16 86 C70 86 96 42 150 42 C204 42 230 86 284 86" />
      <circle cx="72" cy="68" r="10" />
      <circle cx="112" cy="50" r="8" />
      <circle cx="150" cy="30" r="12" />
      <circle cx="188" cy="50" r="8" />
      <circle cx="228" cy="68" r="10" />
      <path d="M150 42 V96" />
      <path d="M64 78 c-12 8-8 18 4 16 M156 96 c-8 12 8 16 14 6" />
    </svg>
  );
}
