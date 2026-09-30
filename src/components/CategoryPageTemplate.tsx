"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Category, Product } from "@/data/productData";

export default function CategoryPageTemplate({ category, products }: { category: Category; products: Product[] }) {
  const reduceMotion = useReducedMotion();
  return (
    <main className="min-h-screen bg-[#f1f4f4]">
      <Navbar />
      <section className="catalogue-index-hero category-hero">
        <div className="catalogue-index-inner">
          <Link href="/products" className="category-back"><ArrowLeft size={16} aria-hidden="true" /> ALL FAMILIES</Link>
          <span className="section-kicker"><span /> MAS / PRODUCT FAMILY</span>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
          <div className="catalogue-index-meta"><span>{products.length.toString().padStart(2, "0")} SERIES</span><span>BUILT FOR YOUR SPACE</span></div>
        </div>
      </section>
      <section className="category-product-list" aria-label={`${category.name} products`}>
        {products.map((product, index) => (
          <motion.article key={product.id} initial={reduceMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }}>
            <Link href={`/products/${category.slug}/${product.id}`} className="category-product-link">
              <div className="category-product-image"><Image src={product.images[0]} alt={`${product.name} display`} fill sizes="(max-width: 800px) 100vw, 40vw" /></div>
              <div className="category-product-copy"><span className="category-product-count">{String(index + 1).padStart(2, "0")} / {category.name.toUpperCase()}</span><h2>{product.name}</h2><p>{product.description}</p><div className="category-product-spec"><span>{product.specs[0]?.label}</span><strong>{product.specs[0]?.value}</strong></div><span className="category-product-action">EXPLORE SERIES <ArrowUpRight size={18} aria-hidden="true" /></span></div>
            </Link>
          </motion.article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
