"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import useReducedMotion from "@/hooks/useMotionPreference";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import MagneticLink from "./MagneticLink";

const LedWallScene = dynamic(() => import("./LedWallScene"), { ssr: false });
const modes = ["Flow", "Pulse", "Signal"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [mode, setMode] = useState(0);
  const [sceneReady, setSceneReady] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const artY = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <section ref={ref} className="immersive-hero" aria-labelledby="hero-title">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-coordinate hero-coordinate-top"><span className="signal-dot" /> VISUAL SYSTEMS / GREATER NOIDA, IN <span>28.4744° N · 77.5040° E</span></div>
      <motion.div className="sculpture-stage" style={{ y: reduceMotion ? 0 : artY }}>
        <div className={`sculpture-fallback ${sceneReady ? "is-loaded" : ""}`} data-mode={mode} aria-hidden="true"><span /><span /><span /></div>
        <LedWallScene mode={mode} onReady={() => setSceneReady(true)} />
        <div className="sculpture-annotation"><span className="annotation-cross">+</span> MODULAR BY DESIGN<br /><span>LIMITLESS BY NATURE</span></div>
      </motion.div>
      <motion.div className="immersive-hero-copy" style={{ y: reduceMotion ? 0 : titleY }}>
        <p className="hero-pretitle">We turn spaces into experiences.</p>
        <h1 id="hero-title" aria-label="Light without limits.">
          {["Light", "without", "limits."].map((word, index) => (
            <span className={`hero-word-mask hero-word-${index}`} key={word} aria-hidden="true"><motion.span initial={reduceMotion ? false : { y: "110%", rotate: 4 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: .95, delay: .16 + index * .13, ease: [.22, 1, .36, 1] }}>{word}</motion.span></span>
          ))}
        </h1>
        <div className="hero-intro-row"><p>From a single pixel to an entire skyline.<br />LED displays that make people <em>look again.</em></p><MagneticLink href="/products" className="round-explore" aria-label="Explore MAS LED displays"><ArrowUpRight size={28} /><span>Explore<br />displays</span></MagneticLink></div>
      </motion.div>
      <div className="hero-right-caption"><span>01 / THE ART OF ATTENTION</span><p>Shape it. Scale it.<br />Make it impossible to ignore.</p><Link href="/quote" className="inline-arrow-link">Build your vision <MoveUpRight size={17} /></Link></div>
      <div className="hero-floor"><a href="#experience" className="hero-scroll-invitation"><span className="scroll-line"><ArrowDown size={15} /></span> SCROLL TO FEEL THE DIFFERENCE</a><div className="scene-controls"><span>CHANGE THE LIGHT</span>{modes.map((name, index) => <button type="button" key={name} aria-pressed={mode === index} onClick={() => setMode(index)} className={mode === index ? "active" : ""}>{name}</button>)}</div></div>
    </section>
  );
}
