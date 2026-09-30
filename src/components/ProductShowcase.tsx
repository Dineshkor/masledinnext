"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import useReducedMotion from "@/hooks/useMotionPreference";
import { ArrowUpRight, Plus } from "lucide-react";
import { categories, products, Product } from "@/data/productData";
import MagneticLink from "./MagneticLink";

function ProductTile({ product, index, all }: { product: Product; index: number; all: boolean }) {
  const reduced = useReducedMotion();
  const size = all ? ([0, 5].includes(index) ? "tile-wide" : [10, 11].includes(index) ? "tile-half" : "") : "tile-half";
  return <motion.article layout={!reduced} initial={reduced ? false : { opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .97 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: .65, ease: [.22, 1, .36, 1] }} className={`product-tile ${size}`}>
    <Link href={`/products/${product.categorySlug}/${product.id}`} className="product-tile-link" onPointerMove={(event) => {
      if (reduced || event.pointerType !== "mouse") return;
      const bounds = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      event.currentTarget.style.setProperty("--pointer-x", `${x * 100}%`);
      event.currentTarget.style.setProperty("--pointer-y", `${y * 100}%`);
      event.currentTarget.style.setProperty("--tilt-x", `${(y - .5) * -5}deg`);
      event.currentTarget.style.setProperty("--tilt-y", `${(x - .5) * 5}deg`);
    }} onPointerLeave={(event) => { event.currentTarget.style.setProperty("--tilt-x", "0deg"); event.currentTarget.style.setProperty("--tilt-y", "0deg"); }}>
      <div className="product-tile-image"><Image src={product.images[0]} alt={`${product.name} display installation`} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 60vw" /><div className="product-image-shade" /><span className="product-tile-index">/{String(index + 1).padStart(2, "0")}</span><span className="product-tile-plus"><Plus size={22} /></span><span className="product-hover-label">VIEW SERIES <ArrowUpRight size={17} /></span><div className="product-tile-title"><span>{product.series}</span><h3>{product.name.replace("MAS-", "").replace("MAS ", "").replace(" Series", "")}</h3></div></div>
      <div className="product-tile-details"><div><span>{product.specs[0].label}</span><strong>{product.specs[0].value}</strong></div><ArrowUpRight size={24} aria-hidden="true" /></div>
    </Link>
  </motion.article>;
}

export default function ProductShowcase() {
  const [category, setCategory] = useState("all");
  const reduced = useReducedMotion();
  const visible = category === "all" ? products : products.filter(product => product.categorySlug === category);
  return <section id="products" className="collection-section" aria-labelledby="collection-title">
    <div className="collection-heading"><div><span className="eyebrow-light"><span className="signal-dot" /> THE COLLECTION / {products.length} SERIES</span><motion.h2 id="collection-title" initial={reduced ? false : { y: 45, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: .8 }}>Find your<br /><em>next canvas.</em></motion.h2></div><div className="collection-heading-note"><span className="collection-asterisk" aria-hidden="true">✳</span><p>Different spaces.<br />Different ambitions.<br />One extraordinary range.</p><Link href="/products" className="inline-arrow-link">The full catalogue <ArrowUpRight size={18} /></Link></div></div>
    <div className="collection-toolbar"><div className="collection-filters" role="group" aria-label="Filter display families"><button type="button" className={category === "all" ? "active" : ""} aria-pressed={category === "all"} onClick={() => setCategory("all")}>All <span>12</span></button>{categories.map(item => <button type="button" key={item.id} onClick={() => setCategory(item.slug)} aria-pressed={category === item.slug} className={category === item.slug ? "active" : ""}>{item.name.replace(" LED Displays", "").replace(" Displays", "").replace(" Kiosks", "")}<span>{products.filter(product => product.categorySlug === item.slug).length}</span></button>)}</div><span className="collection-result" aria-live="polite">{String(visible.length).padStart(2, "0")} / SYSTEMS</span></div>
    <motion.div layout={!reduced} className="product-tile-grid"><AnimatePresence mode="popLayout">{visible.map((product, index) => <ProductTile key={product.id} product={product} index={index} all={category === "all"} />)}</AnimatePresence></motion.div>
    <div className="collection-custom"><span className="custom-cross" aria-hidden="true">+</span><div><span className="eyebrow-light">A VISION ALL YOUR OWN</span><h3>Let&apos;s shape the unexpected.</h3><p>Custom forms, taxi-top LED and variable message signs. Let&apos;s start with your idea.</p></div><MagneticLink href="/quote" className="round-explore round-explore-small" aria-label="Discuss a custom display"><ArrowUpRight size={27} /><span>Let&apos;s<br />talk</span></MagneticLink></div>
  </section>;
}
