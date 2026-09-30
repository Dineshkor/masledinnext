"use client";

import { useRef } from "react";
import Link from "next/link";
import useReducedMotion from "@/hooks/useMotionPreference";

type Props = { href: string; children: React.ReactNode; className?: string; "aria-label"?: string };
export default function MagneticLink({ href, children, className = "", "aria-label": label }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reducedMotion = useReducedMotion();
  const reset = () => { if (ref.current) ref.current.style.transform = "translate(0, 0)"; };
  return <Link ref={ref} href={href} className={`magnetic-link ${className}`} aria-label={label} onPointerMove={(event) => {
    if (reducedMotion || event.pointerType !== "mouse" || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    ref.current.style.transform = `translate(${(event.clientX - bounds.left - bounds.width / 2) * .18}px, ${(event.clientY - bounds.top - bounds.height / 2) * .18}px)`;
  }} onPointerLeave={reset} onBlur={reset}>{children}</Link>;
}
