"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Product, getCategoryBySlug, getProductNavigation } from "@/data/productData";

export default function ProductDetailTemplate({ product }: { product: Product }) {
  const [imageIndex, setImageIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const category = getCategoryBySlug(product.categorySlug);
  const { prev, next } = getProductNavigation(product);

  return (
    <main className="min-h-screen bg-[#081722]">
      <Navbar />
      <section className="product-detail-hero">
        <div className="product-detail-inner">
          <div className="product-detail-copy">
            <Link href={`/products/${product.categorySlug}`} className="category-back"><ArrowLeft size={16} aria-hidden="true" /> {category?.name.toUpperCase()}</Link>
            <span className="section-kicker"><span /> MAS / {product.series.toUpperCase()}</span>
            <h1>{product.name}</h1>
            <p className="product-detail-tagline">{product.tagline}</p>
            <p className="product-detail-description">{product.description}</p>
            <div className="product-detail-actions"><Link href="/quote" className="hero-primary">Request a quote <ArrowUpRight size={19} aria-hidden="true" /></Link><a href="#specifications" className="hero-secondary">View specifications <ArrowRight size={18} aria-hidden="true" /></a></div>
            <div className="product-detail-key-specs">{product.specs.slice(0, 2).map((spec) => <div key={spec.label}><span>{spec.label}</span><strong>{spec.value}</strong></div>)}</div>
          </div>
          <div className="product-detail-gallery">
            <div className="product-detail-main-image"><Image key={product.images[imageIndex]} src={product.images[imageIndex]} alt={`${product.name} ${imageIndex === 0 ? "installation" : "detail"}`} fill sizes="(max-width: 900px) 100vw, 60vw" priority /></div>
            <div className="product-detail-gallery-controls"><span>0{imageIndex + 1} / 0{product.images.length}</span><div>{product.images.map((_, index) => <button type="button" key={index} onClick={() => setImageIndex(index)} aria-label={`Show ${product.name} image ${index + 1}`} aria-pressed={imageIndex === index} className={imageIndex === index ? "active" : ""} />)}</div></div>
          </div>
        </div>
      </section>

      <section id="specifications" className="product-detail-specs">
        <div className="product-detail-section-inner">
          <div className="product-detail-section-heading"><span className="section-kicker"><span /> TECHNICAL PROFILE</span><h2>Made for the <em>brief.</em></h2><p>Figures vary by pixel pitch where noted. Our team can help select the right configuration for the site.</p></div>
          <div className="product-detail-spec-table">{product.specs.map((spec) => <div key={spec.label}><span>{spec.label}</span><strong>{spec.value}</strong></div>)}</div>
        </div>
      </section>

      <section className="product-detail-uses">
        <div className="product-detail-section-inner">
          <span className="section-kicker"><span /> DESIGN POSSIBILITIES</span>
          <h2>Built to belong <em>anywhere.</em></h2>
          <div className="product-detail-feature-grid">{product.features.map((feature, index) => <motion.div key={feature.title} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .45, delay: index * .08 }}><span>0{index + 1}</span><h3>{feature.title}</h3><p>{feature.description}</p></motion.div>)}</div>
          <div className="product-detail-applications"><h3>Where it works</h3><div>{product.applications.map((application) => <span key={application}>{application}</span>)}</div></div>
        </div>
      </section>

      <section className="product-detail-next"><div><span className="section-kicker"><span /> KEEP EXPLORING</span><h2>Find your next canvas.</h2></div><div className="product-detail-next-links">{prev && <Link href={`/products/${prev.categorySlug}/${prev.id}`}><ArrowLeft size={18} aria-hidden="true" /><span>PREVIOUS<br /><strong>{prev.name}</strong></span></Link>}{next && <Link href={`/products/${next.categorySlug}/${next.id}`}><span>NEXT<br /><strong>{next.name}</strong></span><ArrowRight size={18} aria-hidden="true" /></Link>}</div></section>
      <Footer />
    </main>
  );
}
