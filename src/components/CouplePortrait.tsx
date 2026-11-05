"use client";

import { useEffect, useRef } from "react";

const frameSrc = "/images/Embossed%20Ivory%20Wedding%20Invitation%20Template.png";
const photoSrc = "/images/she_and_me.png";

// Inner pearl oval of the template, inset so the pearls stay on top of the photo.
const hole = {
  left: "25.63%",
  top: "23.1%",
  width: "47.4%",
  height: "41.4%",
  clipPath: "ellipse(50% 50% at 50% 50%)",
};

const holeMask = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1043 1508"><defs><mask id="h"><rect width="1043" height="1508" fill="white"/><ellipse cx="514.5" cy="660.5" rx="247.2" ry="312.2" fill="black"/></mask></defs><rect width="1043" height="1508" fill="white" mask="url(#h)"/></svg>`,
)}")`;

export function CouplePortrait() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let alive = true;
    let scratching = false;
    let cleared = false;
    let last: { x: number; y: number } | null = null;
    let generation = 0;

    const fontFamily = (variable: string, fallback: string) => {
      const raw = getComputedStyle(document.documentElement).getPropertyValue(variable);
      const name = raw.split(",")[0]?.trim().replace(/['"]/g, "");
      return name ? `"${name}", ${fallback}` : fallback;
    };

    const paint = async () => {
      const token = ++generation;
      const rect = canvas.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.round(rect.width * dpr);
      const height = Math.round(rect.height * dpr);
      canvas.width = width;
      canvas.height = height;
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#f4eadc";
      ctx.fillRect(0, 0, width, height);

      const grain = ctx.getImageData(0, 0, width, height);
      for (let index = 0; index < grain.data.length; index += 16) {
        const noise = (Math.random() - 0.5) * 16;
        grain.data[index] = Math.max(0, Math.min(255, grain.data[index] + noise));
        grain.data[index + 1] = Math.max(0, Math.min(255, grain.data[index + 1] + noise));
        grain.data[index + 2] = Math.max(0, Math.min(255, grain.data[index + 2] + noise));
      }
      ctx.putImageData(grain, 0, 0);

      const shade = ctx.createRadialGradient(
        width / 2,
        height / 2,
        width * 0.12,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.62,
      );
      shade.addColorStop(0, "rgba(255,252,247,0.35)");
      shade.addColorStop(1, "rgba(176,142,112,0.2)");
      ctx.fillStyle = shade;
      ctx.fillRect(0, 0, width, height);

      const script = fontFamily("--font-great-vibes", "cursive");
      const serif = fontFamily("--font-cormorant", "Palatino, serif");
      const scriptSize = Math.round(width * 0.15);
      const serifSize = Math.round(width * 0.092);
      try {
        await document.fonts.load(`400 ${scriptSize}px ${script}`);
        await document.fonts.load(`500 ${serifSize}px ${serif}`);
      } catch {
        // The fallback faces still read as an invitation.
      }
      if (!alive || token !== generation || cleared) return;

      ctx.fillStyle = "#8f555c";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `400 ${scriptSize}px ${script}`;
      ctx.fillText("Scratch here", width / 2, height * 0.46);
      ctx.fillStyle = "#8f555c";
      ctx.font = `italic 500 ${serifSize}px ${serif}`;
      ctx.fillText("to see us", width / 2, height * 0.64);
    };

    const pointOf = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: ((event.clientX - rect.left) / rect.width) * canvas.width,
        y: ((event.clientY - rect.top) / rect.height) * canvas.height,
      };
    };

    const erase = (from: { x: number; y: number }, to: { x: number; y: number }) => {
      const radius = canvas.width * 0.09;
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.strokeStyle = "#000";
      ctx.fillStyle = "#000";
      ctx.lineWidth = radius * 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(to.x, to.y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const clearedRatio = () => {
      const { width, height } = canvas;
      const data = ctx.getImageData(0, 0, width, height).data;
      const step = 6;
      let total = 0;
      let gone = 0;
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const dx = (x - width / 2) / (width / 2);
          const dy = (y - height / 2) / (height / 2);
          if (dx * dx + dy * dy > 1) continue;
          total += 1;
          if (data[(y * width + x) * 4 + 3] < 28) gone += 1;
        }
      }
      return total === 0 ? 0 : gone / total;
    };

    const finish = () => {
      if (cleared) return;
      cleared = true;
      canvas.style.transition = "opacity 700ms ease";
      canvas.style.opacity = "0";
      canvas.style.pointerEvents = "none";
    };

    let strokes = 0;
    const onDown = (event: PointerEvent) => {
      if (cleared) return;
      scratching = true;
      canvas.setPointerCapture(event.pointerId);
      last = pointOf(event);
      erase(last, last);
    };
    const onMove = (event: PointerEvent) => {
      if (!scratching || cleared || !last) return;
      const next = pointOf(event);
      erase(last, next);
      last = next;
      strokes += 1;
      if (strokes % 5 === 0 && clearedRatio() > 0.58) finish();
    };
    const onUp = () => {
      scratching = false;
      last = null;
      if (!cleared && clearedRatio() > 0.58) finish();
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        finish();
      }
    };
    const blockScroll = (event: TouchEvent) => {
      if (!cleared) event.preventDefault();
    };

    void paint();
    const observer = new ResizeObserver(() => {
      if (!cleared && !scratching) void paint();
    });
    observer.observe(canvas);
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);
    canvas.addEventListener("keydown", onKey);
    canvas.addEventListener("touchstart", blockScroll, { passive: false });
    canvas.addEventListener("touchmove", blockScroll, { passive: false });

    return () => {
      alive = false;
      observer.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
      canvas.removeEventListener("keydown", onKey);
      canvas.removeEventListener("touchstart", blockScroll);
      canvas.removeEventListener("touchmove", blockScroll);
    };
  }, []);

  return (
    <section aria-label="Thaw and Thwe" className="flex h-full items-center justify-center bg-paper">
      <div className="relative aspect-[1043/1508] w-[min(100%,calc((100dvh-6rem)*1043/1508))]">
        <img src={photoSrc} alt="Thaw and Thwe" className="absolute object-cover object-[center_12%]" style={hole} />
        <canvas
          ref={canvasRef}
          tabIndex={0}
          aria-label="Scratch the paper to reveal Thaw and Thwe"
          className="scratch-paper absolute z-[1] touch-none select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
          style={hole}
        />
        <img
          src={frameSrc}
          alt=""
          draggable={false}
          className="pointer-events-none relative z-10 h-full w-full select-none"
          style={{
            maskImage: holeMask,
            WebkitMaskImage: holeMask,
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
          }}
        />
      </div>
    </section>
  );
}
