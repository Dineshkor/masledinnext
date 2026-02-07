"use client";

import { motion } from "framer-motion";
import {
    Building2,
    Laptop,
    ShoppingBag,
    Plane,
    Radio,
    Trophy
} from "lucide-react";

const markets = [
    { name: "Government & Smart City", icon: Building2 },
    { name: "IT & Corporate", icon: Laptop },
    { name: "Retail & Malls", icon: ShoppingBag },
    { name: "Airports & Transportation", icon: Plane },
    { name: "Broadcast & Media", icon: Radio },
    { name: "Stadiums & Venues", icon: Trophy },
];

// Duplicate for seamless infinite scroll
const allMarkets = [...markets, ...markets];

export default function MarketTicker() {
    return (
        <section id="markets" className="py-20 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />

            <div className="relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 px-6"
                >
                    <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                        Industries We Serve
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                        Markets We Illuminate
                    </h2>
                </motion.div>

                {/* Marquee Container */}
                <div className="marquee-container">
                    <div className="marquee-content">
                        {allMarkets.map((market, index) => {
                            const Icon = market.icon;
                            return (
                                <div
                                    key={`${market.name}-${index}`}
                                    className="flex items-center gap-4 mx-8 group cursor-pointer"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-all duration-300">
                                        <Icon className="w-8 h-8 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                                    </div>
                                    <span className="text-lg font-medium text-slate-300 group-hover:text-white whitespace-nowrap transition-colors">
                                        {market.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Gradient overlays for fade effect */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-10" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-10" />
            </div>
        </section>
    );
}
