import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import MarketTicker from "@/components/MarketTicker";
import FeatureSection from "@/components/FeatureSection";
import ApproachTimeline from "@/components/ApproachTimeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <MarketTicker />
      <FeatureSection />
      <ApproachTimeline />
      <Footer />
    </main>
  );
}
