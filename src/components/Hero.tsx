"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight, MoveRight } from "lucide-react";
import LedCanvas from "./LedCanvas";

const categories = [
    { label: "Indoor", href: "/products/indoor" },
    { label: "Outdoor", href: "/products/outdoor" },
    { label: "Rental", href: "/products/rental" },
    { label: "Transparent", href: "/products/transparent" },
];

export default function Hero() {
    return (
        <section className="light-hero" aria-labelledby="hero-title">
            <div className="light-hero-ambient" aria-hidden="true" />
            <div className="light-hero-inner">
                <div className="light-hero-grid">
                    <div className="light-hero-copy">
                        <p className="light-hero-eyebrow"><span /> PREMIUM B2B LED SOLUTIONS</p>
                        <h1 id="hero-title">
                            Every pixel.<br />
                            <span>A possibility.</span>
                        </h1>
                        <p className="light-hero-description">
                            Turn spaces into experiences with LED displays
                            engineered to bring your biggest ideas to life.
                        </p>
                        <div className="light-hero-actions">
                            <Link href="/products" className="light-hero-primary">
                                Explore displays <ArrowUpRight size={19} aria-hidden="true" />
                            </Link>
                            <Link href="/contact" className="light-hero-secondary">
                                Let’s talk <MoveRight size={18} aria-hidden="true" />
                            </Link>
                        </div>
                        <div className="light-hero-note">
                            <span className="light-hero-note-line" aria-hidden="true" />
                            <p>Your vision. Our engineering.<br /><span>Extraordinary, together.</span></p>
                        </div>
                    </div>
                    <LedCanvas />
                </div>
                <div className="light-hero-footer">
                    <div className="light-hero-applications">
                        <span className="light-hero-applications-label">A DISPLAY FOR EVERY AMBITION</span>
                        <div>
                            {categories.map(({ label, href }) => (
                                <Link href={href} key={label}>{label}<ArrowUpRight size={12} aria-hidden="true" /></Link>
                            ))}
                        </div>
                    </div>
                    <Link href="#products" className="light-hero-scroll">
                        Discover what’s possible <ArrowDown size={15} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
