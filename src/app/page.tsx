import { Accommodations } from "@/components/Accommodations";
import { PageLace } from "@/components/Frames";
import { Closing } from "@/components/Closing";
import { Countdown } from "@/components/Countdown";
import { DressCode } from "@/components/DressCode";
import { EnvelopeOverlay } from "@/components/EnvelopeOverlay";
import { HeroSection, LetterSection } from "@/components/HeroSection";
import { LocationSection } from "@/components/LocationSection";
import { OurStory } from "@/components/OurStory";
import { RsvpForm } from "@/components/RsvpForm";
import { Schedule } from "@/components/Schedule";
import { Transportation } from "@/components/Transportation";
import { SwipeRomance } from "@/components/SwipeRomance";
import { WeddingGift } from "@/components/WeddingGift";

export default function HomePage() {
  return (
    <EnvelopeOverlay>
      <main className="invite-pager mx-auto w-full max-w-md bg-paper sm:shadow-[0_30px_80px_rgba(120,60,70,0.18)]">
        <SwipeRomance />
        <section className="invite-page" aria-label="The couple">
          <PageLace motif="house">
            <HeroSection />
          </PageLace>
        </section>
        <section className="invite-page" aria-label="Our story">
          <PageLace motif="wat">
            <OurStory />
          </PageLace>
        </section>
        <section className="invite-page" aria-label="Invitation">
          <PageLace motif="boat">
            <LetterSection />
          </PageLace>
        </section>
        <section className="invite-page">
          <PageLace motif="temple">
            <Countdown />
          </PageLace>
        </section>
        <section className="invite-page">
          <PageLace motif="house">
            <LocationSection />
          </PageLace>
        </section>
        <section className="invite-page" aria-label="Transportation">
          <PageLace motif="boat">
            <Transportation />
          </PageLace>
        </section>
        <section className="invite-page">
          <PageLace motif="temple">
            <Schedule />
          </PageLace>
        </section>
        <section className="invite-page">
          <PageLace motif="wat">
            <DressCode />
          </PageLace>
        </section>
        <Accommodations />
        <section className="invite-page">
          <PageLace motif="temple">
            <WeddingGift />
          </PageLace>
        </section>
        <section className="invite-page">
          <PageLace motif="boat">
            <RsvpForm />
          </PageLace>
        </section>
        <section className="invite-page" aria-label="Closing">
          <PageLace motif="wat">
            <Closing />
          </PageLace>
        </section>
      </main>
    </EnvelopeOverlay>
  );
}
