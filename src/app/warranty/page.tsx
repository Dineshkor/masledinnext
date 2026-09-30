import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WarrantyPage() {
  return (
    <main className="min-h-screen bg-[#050b12] text-white">
      <Navbar />
      <section className="service-page">
        <span className="section-kicker">MAS / SERVICE</span>
        <h1>Warranty &amp; support</h1>
        <p>Coverage and service arrangements depend on the product and your project agreement. Share your product details and purchase documents with our team, and we will confirm the applicable terms and next steps.</p>
        <div className="service-grid">
          <div><span>01 / PRODUCT</span><h2>Identify the display</h2><p>Include the series, configuration and installation location.</p></div>
          <div><span>02 / ISSUE</span><h2>Describe the problem</h2><p>Tell us what changed and attach photos or video if available.</p></div>
          <div><span>03 / REVIEW</span><h2>Confirm the next step</h2><p>Our team will review the details against your project terms.</p></div>
        </div>
        <div className="service-actions"><a href="mailto:masled001@gmail.com" className="hero-primary"><Mail size={18} /> Email support <ArrowUpRight size={18} /></a><a href="tel:+918743888577" className="hero-secondary"><Phone size={18} /> Call the team</a><Link href="/support" className="service-link">Help centre</Link></div>
      </section>
      <Footer />
    </main>
  );
}
