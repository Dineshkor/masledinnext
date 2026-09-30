"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import useReducedMotion from "@/hooks/useMotionPreference";
import { ArrowUpRight } from "lucide-react";

const words = "Great experiences start with a single pixel. Every detail shapes the way people see your world.".split(" ");
function RevealWord({ word, index, progress, reduced }: { word: string; index: number; progress: MotionValue<number>; reduced: boolean }) {
  const opacity = useTransform(progress, [index / words.length * .75, index / words.length * .75 + .12], [.17, 1]);
  return <motion.span style={{ opacity: reduced ? 1 : opacity }}>{word}{" "}</motion.span>;
}
export default function FeatureSection() {
  const ref = useRef<HTMLElement>(null);
  const reduced = !!useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start .85", "end .35"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 4]);
  return <section id="expertise" ref={ref} className="pixel-manifesto" aria-labelledby="manifesto-title"><div className="manifesto-topline"><span className="eyebrow-light">THE DIFFERENCE IS IN THE DETAIL</span><span>MAS / OUR THINKING</span></div><div className="manifesto-grid"><div><h2 id="manifesto-title">{words.map((word, index) => <RevealWord key={`${word}-${index}`} word={word} index={index} progress={scrollYProgress} reduced={reduced} />)}</h2><Link href="/about" className="manifesto-link">Meet MAS LED <ArrowUpRight size={23} /></Link></div><motion.div className="manifesto-object" style={reduced ? undefined : { y: imageY, rotate }}><span className="object-coordinate">THE BUILDING BLOCK / HD PRO</span><div className="manifesto-product-image"><Image src="/catalogue/hd-pro-detail.jpg" alt="Front and rear views of the MAS HD Pro modular LED cabinet" fill sizes="(max-width: 800px) 90vw, 35vw" /></div><span className="object-cross object-cross-one">+</span><span className="object-cross object-cross-two">+</span><div className="manifesto-object-caption"><strong>Small detail.<br />Extraordinary potential.</strong><span>640 × 480 MM<br />MODULAR CABINET</span></div></motion.div></div><div className="manifesto-credentials"><span>QUALITY CREDENTIALS</span>{["ISO 9001:2015", "RoHS", "MSME", "CE", "BIS"].map(item => <span key={item}>{item}</span>)}</div></section>;
}
