"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import useReducedMotion from "@/hooks/useMotionPreference";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { categories } from "@/data/productData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 35);
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") { setMenu(false); setProductsOpen(false); } };
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("keydown", escape);
    return () => { window.removeEventListener("scroll", scroll); window.removeEventListener("keydown", escape); };
  }, []);
  const close = () => { setMenu(false); setProductsOpen(false); };
  return <header className={`mas-header ${scrolled ? "is-scrolled" : ""} ${menu ? "menu-open" : ""}`}>
    <motion.nav initial={reduced ? false : { opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="mas-nav" aria-label="Main navigation">
      <Link href="/" className="mas-brand" aria-label="MAS LED home" onClick={close}><Image src="/logo.jpg" alt="MAS LED Screens" width={120} height={46} priority /><span>LIGHT WITHOUT<br />LIMITS.</span></Link>
      <div className="mas-nav-desktop"><div className="nav-range" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}><Link href="/products" className="nav-text-link">The range</Link><button type="button" aria-label="Show product families" aria-expanded={productsOpen} aria-controls="desktop-product-menu" onClick={() => setProductsOpen(!productsOpen)}><ChevronDown size={14} /></button><AnimatePresence>{productsOpen && <motion.div id="desktop-product-menu" className="nav-product-dropdown" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: .2 }}><span>FIND YOUR CANVAS</span><div>{categories.map((category, index) => <Link href={`/products/${category.slug}`} key={category.slug} onClick={close}><small>0{index + 1}</small>{category.name}<ArrowUpRight size={17} /></Link>)}</div></motion.div>}</AnimatePresence></div><Link href="/#experience" className="nav-text-link">Experiences</Link><Link href="/about" className="nav-text-link">About MAS</Link><Link href="/contact" className="nav-text-link">Contact</Link></div>
      <Link href="/quote" className="nav-project-link"><span>Let&apos;s build something</span><ArrowUpRight size={19} /></Link>
      <button type="button" className="mas-menu-toggle" aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} aria-controls="mobile-navigation" onClick={() => setMenu(!menu)}>{menu ? <X size={26} /> : <Menu size={26} />}</button>
    </motion.nav>
    <AnimatePresence>{menu && <motion.div id="mobile-navigation" className="mas-mobile-menu" initial={reduced ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}><Link href="/products" onClick={close}>The range <ArrowUpRight /></Link><div className="mobile-family-links">{categories.map(category => <Link key={category.slug} href={`/products/${category.slug}`} onClick={close}>{category.name}</Link>)}</div><Link href="/#experience" onClick={close}>Experiences <ArrowUpRight /></Link><Link href="/about" onClick={close}>About MAS <ArrowUpRight /></Link><Link href="/contact" onClick={close}>Contact <ArrowUpRight /></Link><Link href="/quote" onClick={close} className="mobile-project-link">Start a project <ArrowUpRight /></Link></motion.div>}</AnimatePresence>
  </header>;
}
