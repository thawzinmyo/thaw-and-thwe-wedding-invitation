"use client";

import { useLayoutEffect, useRef } from "react";

export function OurStory() {
  const frameRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const copy = copyRef.current;
    if (!frame || !copy) return;

    const fit = () => {
      const box = copy.parentElement;
      if (!box) return;
      copy.style.transform = "none";
      copy.style.marginTop = "0px";
      const needed = copy.offsetHeight;
      const available = box.clientHeight;
      const scale = needed > 0 ? Math.min(1, available / needed) : 1;
      copy.style.transformOrigin = "center top";
      copy.style.transform = `scale(${scale})`;
      copy.style.marginTop = `${Math.max(0, (available - needed * scale) / 2)}px`;
    };

    fit();
    document.fonts?.ready.then(fit);
    const observer = new ResizeObserver(fit);
    observer.observe(frame);
    if (copy.parentElement) observer.observe(copy.parentElement);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={frameRef} className="story-frame relative h-full overflow-hidden bg-paper">
      <img
        src="/images/our_story.jpeg"
        alt=""
        className="story-photo pointer-events-none absolute inset-0 h-full w-full select-none"
      />
      <div className="story-copy absolute top-[8%] bottom-[36%] flex flex-col items-center justify-start overflow-hidden px-1 text-center">
        <div ref={copyRef} className="w-full">
          <h2 className="font-script leading-none text-plum">Our Story</h2>
          <div className="story-body font-serif text-ink">
            <p>
              Our story began in December 2015, when our paths crossed at Pyay Technological University (PTU). From the very first moment I saw her, I knew I had fallen for her, though I never got the chance to say those words back then.
            </p>
            <p>
              Soon after, I left Pyay, and we had to part ways for a while. But destiny found a way back to us during the COVID-19 pandemic, when we reconnected and finally arranged to meet again in Yangon. From that moment, our bond grew stronger, and on June 18, 2023, Hledan 2nd Street, we officially became lovers.
            </p>
            <p>
              Life soon led us down different paths as I had to move abroad, beginning our tough chapter of a Long-Distance Relationship (LDR). Those LDR days were not easy — we faced arguments, exhaustion, and countless tearful nights. Yet, no matter how hard it was, we pushed through every obstacle just so we could meet once a year.
            </p>
            <p>
              And now, on 30 December 2026, after years of friendship, distance, and love, we are ready to begin our greatest adventure yet — <em className="text-plum">a lifetime together as husband and wife.</em>
            </p>
          </div>
          <p className="story-sign font-script leading-none text-plum">Our forever starts here. ♡</p>
        </div>
      </div>
    </div>
  );
}
