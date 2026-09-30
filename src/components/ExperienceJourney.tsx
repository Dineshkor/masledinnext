"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, MotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import useReducedMotion from "@/hooks/useMotionPreference";
import { ArrowUpRight } from "lucide-react";

const chapters = [
  { title: "Wrap the", accent: "city.", ghost: "CITY", name: "Architecture", image: "/catalogue/flexedge-main.jpg", alt: "Curved LED screen on a building corner", description: "Follow the building. Break the frame. Turn an everyday facade into a landmark.", category: "Outdoor LED", href: "/products/outdoor", spec: "IP65", specLabel: "OUTDOOR PROTECTION", tag: "MAS / FLEXEDGE" },
  { title: "Own the", accent: "moment.", ghost: "LIVE", name: "Live experiences", image: "/catalogue/rx-outdoor-main.jpg", alt: "Large LED screen at an outdoor live event", description: "When the lights go down, your story takes over. Built for the energy of live experiences.", category: "Rental LED", href: "/products/rental", spec: "500 × 500", specLabel: "MM / RX CABINET FORMAT", tag: "MAS / RX OUTDOOR" },
  { title: "Let space", accent: "breathe.", ghost: "OPEN", name: "Transparency", image: "/catalogue/trans-glow-main.jpg", alt: "Transparent LED display in a glass retail space", description: "Keep the view. Add the vision. Light and architecture share the same canvas.", category: "Transparent LED", href: "/products/transparent", spec: "75–85%", specLabel: "UP TO / TRANSPARENCY", tag: "MAS / TRANS-GLOW" },
];

function Chapter({ chapter, index, progress, reduced, active }: { chapter: typeof chapters[number]; index: number; progress: MotionValue<number>; reduced: boolean; active: boolean }) {
  const start = index / 3;
  const end = (index + 1) / 3;
  const clipPath = useTransform(progress, (value) => {
    if (index === 0) return "inset(0%)";
    const enter = Math.max(0, Math.min(1, (value - start + .035) / .09));
    const edge = (1 - enter) * 100;
    return `polygon(${Math.min(100, edge * 1.12)}% 0, 100% 0, 100% 100%, ${edge}% 100%)`;
  });
  const scale = useTransform(progress, [start, end], [1.13, 1]);
  const y = useTransform(progress, [start, end], [28, -28]);
  const ghostX = useTransform(progress, [start, end], [70, -70]);
  return (
    <motion.article className={`experience-chapter chapter-${index}`} style={reduced ? undefined : { clipPath, pointerEvents: active ? "auto" : "none" }} inert={!reduced && !active} aria-labelledby={`chapter-title-${index}`}>
      <motion.div className="experience-image" style={reduced ? undefined : { scale }}><Image src={chapter.image} alt={chapter.alt} fill sizes="100vw" priority={index === 0} /></motion.div>
      <div className="experience-shade" />
      <motion.span className="experience-ghost" aria-hidden="true" style={reduced ? undefined : { x: ghostX }}>{chapter.ghost}</motion.span>
      <div className="experience-topline"><span>0{index + 1} / A DIFFERENT KIND OF CANVAS</span><span>{chapter.tag}</span></div>
      <motion.div className="experience-copy" style={reduced ? undefined : { y }}>
        <span className="eyebrow-light">{chapter.name}</span>
        <h2 id={`chapter-title-${index}`}>{chapter.title}<br /><em>{chapter.accent}</em></h2>
        <div className="experience-bottom-copy"><p>{chapter.description}</p><Link href={chapter.href} className="experience-cta">Explore {chapter.category} <ArrowUpRight size={23} /></Link></div>
      </motion.div>
      <div className="experience-spec"><strong>{chapter.spec}</strong><span>{chapter.specLabel}</span></div>
    </motion.article>
  );
}

export default function ExperienceJourney() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const reduced = !!useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (value) => setActive(Math.min(2, Math.floor(value * 3))));
  const goTo = (index: number) => {
    if (!ref.current) return;
    const top = window.scrollY + ref.current.getBoundingClientRect().top;
    const distance = ref.current.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + distance * (index / 3 + .06), behavior: reduced ? "instant" : "smooth" });
  };
  return (
    <section id="experience" ref={ref} className={`experience-journey ${reduced ? "experience-static" : ""}`} aria-label="Display applications">
      <div className="experience-sticky">
        {chapters.map((chapter, index) => <Chapter key={chapter.name} chapter={chapter} index={index} progress={scrollYProgress} reduced={reduced} active={active === index} />)}
        {!reduced && <nav className="experience-navigation" aria-label="Experience chapters">{chapters.map((chapter, index) => <button key={chapter.name} type="button" className={active === index ? "active" : ""} aria-current={active === index ? "step" : undefined} onClick={() => goTo(index)}><span>0{index + 1}</span>{chapter.name}</button>)}<div className="experience-progress"><motion.span style={{ scaleX: scrollYProgress }} /></div></nav>}
      </div>
    </section>
  );
}
