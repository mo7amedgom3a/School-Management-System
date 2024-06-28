// src/components/HomeComponent.tsx
import { Header } from './Home/Header';
import { HeroSection } from './Home/HeroSection';
import { FeaturesSection } from './Home/FeaturesSection';
import { CallToActionSection } from './Home/CallToActionSection';
import { Footer } from './Home/Footer';

export function HomeComponent() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
