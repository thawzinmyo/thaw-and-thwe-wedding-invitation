import { FittedPhoto } from "@/components/Frames";

export function OurStory() {
  return (
    <FittedPhoto src="/images/our_story.jpeg" insetClass="inset-[15%_13%_29%_13%] px-0.5">
      <h2 className="font-script text-[1.85rem] leading-none text-plum">Our Story</h2>
      <div className="mt-1 space-y-1 font-serif text-[0.62rem] leading-[1.18] text-ink">
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
          And now, on 30 December 2026, after years of friendship, distance, and love, we are ready to begin our
          greatest adventure yet — <em className="text-plum">a lifetime together as husband and wife.</em>
        </p>
      </div>
      <p className="mt-1 font-script text-[1.15rem] leading-none text-plum">Our forever starts here. ♡</p>
    </FittedPhoto>
  );
}
