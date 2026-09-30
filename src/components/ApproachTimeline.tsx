"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useReducedMotion from "@/hooks/useMotionPreference";
import { ArrowUpRight } from "lucide-react";
import MagneticLink from "./MagneticLink";

const steps = [
  { title: "Imagine.", description: "The space. The audience. The ambition. We start by understanding what your display needs to achieve.", detail: "BRIEF / ENVIRONMENT / VIEWING DISTANCE" },
  { title: "Shape.", description: "Select the series, the pixel pitch and the configuration that bring your idea into focus.", detail: "FORMAT / DIMENSIONS / CONFIGURATION" },
  { title: "Create.", description: "Plan the installation around the site and bring every part of the display together.", detail: "SITE / ASSEMBLY / COMMISSIONING" },
  { title: "Keep it moving.", description: "Confirm the handover and service arrangements so the next chapter has a clear starting point.", detail: "HANDOVER / PROJECT SUPPORT" },
];
export default function ApproachTimeline() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end .7"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  return <section id="approach" ref={ref} className="creative-process"><div className="process-intro"><span className="eyebrow-light">FROM POSSIBILITY TO PRESENCE</span><h2>Your vision.<br /><em>In motion.</em></h2><motion.span className="process-star" style={{ rotate: reduced ? 0 : rotate }} aria-hidden="true">✳</motion.span><p>A considered path from the first conversation to the first impression.</p><MagneticLink href="/quote" className="process-start">Start with an idea <ArrowUpRight size={20} /></MagneticLink></div><div className="process-steps"><div className="process-track"><motion.span style={{ scaleY: reduced ? 1 : scrollYProgress }} /></div>{steps.map((step, index) => <motion.div key={step.title} className="process-step" initial={reduced ? false : { opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .7 }}><span className="process-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.description}</p><span className="process-detail">{step.detail}</span></div></motion.div>)}</div></section>;
}
