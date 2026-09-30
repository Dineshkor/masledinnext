import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories, products } from "@/data/productData";

export default function AboutPageContent() {
  return (
    <main className="min-h-screen bg-[#050b12] text-white">
      <Navbar />
      <section className="about-hero">
        <div className="about-hero-copy">
          <span className="section-kicker">MAS / ABOUT</span>
          <h1>Built for spaces that <em>stand out.</em></h1>
          <p>MAS LED brings together indoor, outdoor, rental and transparent display systems, alongside freestanding LED posters and digital signage kiosks. Each project starts with the space, the viewing distance and the story the screen needs to tell.</p>
          <Link href="/products" className="hero-primary">Explore the range <ArrowUpRight size={18} /></Link>
        </div>
        <div className="about-hero-image"><Image src="/catalogue/flexedge-main.jpg" alt="Curved outdoor MAS LED installation" fill sizes="(max-width: 800px) 100vw, 50vw" priority /></div>
      </section>
      <section className="about-range">
        <div className="catalogue-wrap">
          <span className="section-kicker">THE PRODUCT RANGE</span>
          <h2>One catalogue. Many ways to make an impact.</h2>
          <p>The current catalogue details {products.length} display and signage series. Find the right format for the environment, then speak to the team about your dimensions and installation needs.</p>
          <div className="about-range-grid">
            {categories.map((category, index) => (
              <Link key={category.slug} href={`/products/${category.slug}`} className="about-range-card">
                <span>0{index + 1} / {category.icon}</span>
                <strong>{category.name}</strong>
                <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="about-cta"><span className="section-kicker">LET&apos;S BUILD WHAT&apos;S NEXT</span><h2>Have a space in mind?</h2><p>Tell us where the display will live and what you need it to do.</p><Link href="/quote" className="hero-primary">Start a project <ArrowUpRight size={18} /></Link></section>
      <Footer />
    </main>
  );
}
