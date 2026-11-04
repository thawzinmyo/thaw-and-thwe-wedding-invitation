import { FittedPhoto } from "@/components/Frames";

export function OurStory() {
  return (
    <FittedPhoto src="/images/our_story.jpeg" insetClass="inset-[20%_17%_30%_17%] px-0.5">
      <h2 className="font-script text-[2.15rem] leading-none text-plum">Our Story</h2>
      <div className="mt-1.5 space-y-1 font-serif text-[0.68rem] leading-[1.25] text-ink">
        <p>
          Our story began in December 2015, when our paths crossed at Pyay Technological University. Little did we know
          that a simple meeting would become the beginning of something beautiful.
        </p>
        <p>
          Life took us on different paths for a while, but distance could never truly separate our hearts. Until March
          2023, we stayed connected through countless online conversations, keeping our bond alive and our feelings
          close.
        </p>
        <p>
          Then, in 2023, destiny brought us together once again. This time, we found our way back into each other’s arms
          and began our beautiful journey of love, creating memories and dreams together.
        </p>
        <p>
          And now, on 30 December 2026, after years of friendship, distance, and love, we are ready to begin our
          greatest adventure yet — <em className="text-plum">a lifetime together as husband and wife.</em>
        </p>
      </div>
      <p className="mt-1.5 font-script text-[1.25rem] leading-none text-plum">Our forever starts here. ♡</p>
    </FittedPhoto>
  );
}
