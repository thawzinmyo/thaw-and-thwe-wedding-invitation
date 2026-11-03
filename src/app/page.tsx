import { Accommodations } from "@/components/Accommodations";
import { Countdown } from "@/components/Countdown";
import { DressCode } from "@/components/DressCode";
import { EnvelopeOverlay } from "@/components/EnvelopeOverlay";
import { HeroSection, LetterSection } from "@/components/HeroSection";
import { LocationSection } from "@/components/LocationSection";
import { RsvpForm } from "@/components/RsvpForm";
import { Schedule } from "@/components/Schedule";
import { WeddingGift } from "@/components/WeddingGift";

export default function HomePage() {
  return (
    <EnvelopeOverlay>
      <main className="invite-pager mx-auto w-full max-w-md bg-paper sm:shadow-[0_30px_80px_rgba(120,60,70,0.18)]">
        <section className="invite-page" aria-label="The couple">
          <HeroSection />
        </section>
        <section className="invite-page flex items-center justify-center" aria-label="Invitation">
          <LetterSection />
        </section>
        <section className="invite-page">
          <Countdown />
        </section>
        <section className="invite-page">
          <LocationSection />
        </section>
        <section className="invite-page">
          <Schedule />
        </section>
        <section className="invite-page">
          <DressCode />
        </section>
        <Accommodations />
        <section className="invite-page">
          <WeddingGift />
        </section>
        <section className="invite-page">
          <RsvpForm />
        </section>
      </main>
    </EnvelopeOverlay>
  );
}
