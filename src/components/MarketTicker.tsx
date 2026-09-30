"use client";

import Link from "next/link";
const places = [
  { name: "RETAIL", href: "/products/indoor" },
  { name: "LIVE EVENTS", href: "/products/rental" },
  { name: "ARCHITECTURE", href: "/products/outdoor" },
  { name: "PUBLIC SPACES", href: "/products/outdoor" },
];
export default function MarketTicker() {
  return <section id="markets" className="places-section" aria-label="Spaces for MAS LED displays"><div className="places-topline"><span className="eyebrow-light">BUILT FOR THE WORLD YOU MOVE THROUGH</span><span>SPACE / SCALE / POSSIBILITY</span></div><div className="places-marquee"><div>{[0, 1].map(copy => <div className="places-marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{places.map((place, index) => <Link key={place.name} href={place.href} tabIndex={copy === 1 ? -1 : undefined} className={index % 2 ? "outlined" : ""}>{place.name}<span aria-hidden="true">↗</span></Link>)}</div>)}</div></div></section>;
}
