"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories, products } from "@/data/productData";

export default function ProductsPageContent() {
  const reduceMotion = useReducedMotion();
  return (
    <main className="min-h-screen bg-[#f1f4f4]">
      <Navbar />
      <section className="catalogue-index-hero">
        <div className="catalogue-index-inner">
          <span className="section-kicker"><span /> PRODUCT SYSTEMS / 2026</span>
          <h1>A display for <em>every ambition.</em></h1>
          <p>Explore the MAS portfolio by environment and application. Find the display format that fits your space and your ambition.</p>
          <div className="catalogue-index-meta"><span>{products.length.toString().padStart(2, "0")} SERIES</span><span>{categories.length.toString().padStart(2, "0")} FAMILIES</span></div>
        </div>
      </section>
      <section className="catalogue-index-grid" aria-label="Product families">
        {categories.map((category, index) => {
          const image = products.find((product) => product.categorySlug === category.slug)?.images[0];
          return (
            <motion.article key={category.id} initial={reduceMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: (index % 3) * .08 }}>
              <Link href={`/products/${category.slug}`}>
                <div className="catalogue-index-image">{image && <Image src={image} alt="" fill sizes="(max-width: 750px) 100vw, 50vw" />}</div>
                <div className="catalogue-index-card-copy"><span>0{index + 1} / {products.filter((product) => product.categorySlug === category.slug).length} SERIES</span><h2>{category.name}</h2><p>{category.description}</p><ArrowUpRight aria-hidden="true" /></div>
              </Link>
            </motion.article>
          );
        })}
      </section>
      <Footer />
    </main>
  );
}
