"use client";

import { useEffect, useRef } from "react";

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SwipeRomance() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const pager = document.querySelector<HTMLElement>(".invite-pager");
    if (!layer || !pager) return;

    const scenes = [...layer.querySelectorAll<HTMLElement>("[data-romance]")];
    let frame = 0;

    const update = () => {
      frame = 0;
      const height = pager.clientHeight || 1;
      const offset = pager.scrollTop;
      const index = Math.floor(offset / height);
      const frac = (offset % height) / height;
      const mid = Math.sin(Math.min(frac, 1) * Math.PI);
      const rect = pager.getBoundingClientRect();
      layer.style.left = `${rect.left}px`;
      layer.style.width = `${rect.width}px`;
      layer.style.top = `${rect.top + height / 2}px`;
      layer.style.opacity = mid < 0.06 ? "0" : mid.toFixed(3);
      const scene = index % scenes.length;
      scenes.forEach((item, itemIndex) => {
        item.style.display = itemIndex === scene ? "block" : "none";
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    pager.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      pager.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={layerRef} className="swipe-romance" aria-hidden="true">
      <Petals />
      <Cameo>
        <Bow />
      </Cameo>
      <Cameo>
        <Rings />
      </Cameo>
      <Cameo>
        <Doves />
      </Cameo>
      <Cameo>
        <Letter />
      </Cameo>
      <Cameo>
        <Bouquet />
      </Cameo>
      <Cameo>
        <Pearls />
      </Cameo>
      <Cameo>
        <Hearts />
      </Cameo>
      <Cameo>
        <Rose />
      </Cameo>
      <Cameo>
        <Key />
      </Cameo>
      <Cameo>
        <Wreath />
      </Cameo>
    </div>
  );
}

function Cameo({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 240 130" data-romance className="romance-cameo invite-float" aria-hidden="true">
      <ellipse cx="120" cy="66" rx="82" ry="48" fill="#fdf7ef" stroke="#e7c4bf" strokeWidth="1.3" />
      <ellipse cx="120" cy="66" rx="74" ry="41" fill="none" stroke="#e7c4bf" strokeWidth="0.6" />
      <g {...stroke}>{children}</g>
    </svg>
  );
}

function Bow() {
  return (
    <>
      <path d="M120 60c-8-20-32-26-40-15-10 13-3 30 18 28 11-1 18-6 22-13" />
      <path d="M120 60c8-20 32-26 40-15 10 13 3 30-18 28-11-1-18-6-22-13" />
      <path d="M112 70c-10 16-22 28-30 38" />
      <path d="M128 70c10 16 22 28 30 38" />
      <path d="M114 66c2 8 10 8 12 0-2 5-10 5-12 0z" fill="#e7c4bf" stroke="none" />
    </>
  );
}

function Rings() {
  return (
    <>
      <ellipse cx="102" cy="70" rx="24" ry="15" />
      <ellipse cx="138" cy="70" rx="24" ry="15" />
      <path d="M120 38l2.6 5.4 5.8.7-4.2 3.8 1 5.6-5.2-2.8-5.2 2.8 1-5.6-4.2-3.8 5.8-.7z" fill="currentColor" stroke="none" />
    </>
  );
}

function Heart({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <path
      d="M0 4C0 0 5-1 5 3 5-1 10 0 10 4 10 11 5 15 5 15S0 11 0 4z"
      fill="#e7c4bf"
      stroke="none"
      transform={`translate(${x} ${y}) scale(${scale})`}
    />
  );
}

function Doves() {
  return (
    <>
      <path d="M52 74c12-20 34-26 42-12 3 5-2 10-10 9 8 1 14 8 8 14-10 2-18-6-20-12-8 8-18 6-20 1z" fill="#fdf7ef" />
      <path d="M188 74c-12-20-34-26-42-12-3 5 2 10 10 9-8 1-14 8-8 14 10 2 18-6 20-12 8 8 18 6 20 1z" fill="#fdf7ef" />
      <circle cx="74" cy="58" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="166" cy="58" r="1.5" fill="currentColor" stroke="none" />
      <Heart x={110} y={66} />
    </>
  );
}

function Letter() {
  return (
    <>
      <rect x="82" y="46" width="76" height="48" rx="2" />
      <path d="M82 48 120 76 158 48" />
      <circle cx="120" cy="64" r="6" fill="#e7c4bf" />
      <path d="M118 64c0-3 4-3 4 0 2-3 6-1 4 2 0 4-4 6-4 6s-4-2-4-6c-2-3 2-5 4-2z" fill="#fdf7ef" stroke="none" />
    </>
  );
}

function Bouquet() {
  return (
    <>
      <path d="M120 100V62" />
      <circle cx="120" cy="52" r="10" />
      <circle cx="100" cy="62" r="8" />
      <circle cx="140" cy="62" r="8" />
      <circle cx="110" cy="42" r="6" />
      <circle cx="132" cy="42" r="6" />
      <path d="M104 86c10 8 22 8 32 0" />
      <path d="M120 78c-16 2-24-8-18-16M120 74c16 2 24-8 18-16" />
    </>
  );
}

function Pearls() {
  const pearls = [
    [78, 58],
    [96, 70],
    [114, 76],
    [132, 74],
    [150, 64],
    [164, 52],
  ];
  return (
    <>
      <path d="M68 50c18 22 36 28 52 22 16 8 36 4 52-16" />
      {pearls.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4.2" fill="#fdf7ef" />
      ))}
      <path d="M120 84c2.6 5.2 5.4 5.2 0 10.4-5.4-5.2-2.6-5.2 0-10.4z" fill="#e7c4bf" stroke="none" />
    </>
  );
}

function Hearts() {
  return (
    <>
      <path d="M68 46h104" />
      <path d="M96 46v14" />
      <path d="M144 46v14" />
      <Heart x={86} y={62} scale={1.35} />
      <Heart x={134} y={62} scale={1.35} />
    </>
  );
}

function Rose() {
  return (
    <>
      <path d="M120 104V72" />
      <path d="M120 88c-16 2-22-10-14-18M120 82c16 2 22-10 14-18" />
      <circle cx="120" cy="56" r="16" />
      <path d="M108 54c6-12 18-10 22 2 6 2 6 12 0 16-8 6-20 2-22-6 0-5 4-7 0-12z" fill="#fdf7ef" />
      <circle cx="120" cy="56" r="4" fill="#e7c4bf" />
    </>
  );
}

function Key() {
  return (
    <>
      <circle cx="92" cy="64" r="14" />
      <circle cx="92" cy="64" r="5" />
      <path d="M106 64h46" />
      <path d="M136 64v10M152 64v14" />
      <path d="M168 52c6-8 12-3 0 10-12-13-6-18 0-10z" fill="#e7c4bf" />
    </>
  );
}

function Wreath() {
  return (
    <>
      <circle cx="120" cy="66" r="26" />
      <circle cx="120" cy="40" r="4" fill="#fdf7ef" />
      <circle cx="144" cy="52" r="4" fill="#fdf7ef" />
      <circle cx="148" cy="78" r="4" fill="#fdf7ef" />
      <circle cx="120" cy="92" r="4" fill="#fdf7ef" />
      <circle cx="92" cy="78" r="4" fill="#fdf7ef" />
      <circle cx="96" cy="52" r="4" fill="#fdf7ef" />
      <path d="M120 60c5-7 11-3 0 9-11-12-5-16 0-9z" fill="#e7c4bf" />
    </>
  );
}

function Petals() {
  return (
    <svg viewBox="0 0 390 140" className="romance-petals" aria-hidden="true">
      <g fill="#f3d5d0" stroke="#8f555c" strokeWidth="0.9">
        <ellipse cx="42" cy="58" rx="8" ry="12" transform="rotate(-30 42 58)" />
        <ellipse cx="348" cy="58" rx="8" ry="12" transform="rotate(30 348 58)" />
        <ellipse cx="68" cy="104" rx="6" ry="9" transform="rotate(22 68 104)" />
        <ellipse cx="322" cy="104" rx="6" ry="9" transform="rotate(-22 322 104)" />
      </g>
      <g fill="#e7c4bf">
        <path d="M24 86c0-4 5-5 5-1 0-4 5-3 5 1 0 6-5 9-5 9s-5-3-5-9z" />
        <path d="M356 86c0-4 5-5 5-1 0-4 5-3 5 1 0 6-5 9-5 9s-5-3-5-9z" />
      </g>
    </svg>
  );
}
