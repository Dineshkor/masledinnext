import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import MarketTicker from "@/components/MarketTicker";
import FeatureSection from "@/components/FeatureSection";
import ApproachTimeline from "@/components/ApproachTimeline";
import Footer from "@/components/Footer";
import ExperienceJourney from "@/components/ExperienceJourney";

export default function Home() {
  return (
    <main className="immersive-home min-h-screen">
      <Navbar />
      <Hero />
      <ExperienceJourney />
      <ProductShowcase />
      <MarketTicker />
      <FeatureSection />
      <ApproachTimeline />
      <Footer />
    </main>
  );
}
