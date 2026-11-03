import { Accommodations } from "@/components/Accommodations";
import { Countdown } from "@/components/Countdown";
import { DressCode } from "@/components/DressCode";
import { EnvelopeOverlay } from "@/components/EnvelopeOverlay";
import { HeroSection } from "@/components/HeroSection";
import { LocationSection } from "@/components/LocationSection";
import { RsvpForm } from "@/components/RsvpForm";
import { Schedule } from "@/components/Schedule";
import { WeddingGift } from "@/components/WeddingGift";

export default function HomePage() {
  return (
    <EnvelopeOverlay>
      <main className="mx-auto min-h-screen w-full max-w-md bg-paper sm:my-8 sm:shadow-[0_30px_80px_rgba(70,30,50,0.18)]">
        <HeroSection />
        <Countdown />
        <LocationSection />
        <Schedule />
        <DressCode />
        <Accommodations />
        <WeddingGift />
        <RsvpForm />
        <footer className="bg-plum px-6 py-8 text-center font-serif text-sm tracking-[0.28em] text-pearl/80 uppercase">
          Thaw & Thwe
        </footer>
      </main>
    </EnvelopeOverlay>
  );
}
