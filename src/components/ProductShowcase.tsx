"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Monitor, Sun, Layers, Spline, TouchpadIcon, Eye, Tv, ArrowRight } from "lucide-react";

interface Product {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    link: string;
}

const products: Product[] = [
    {
        id: "infinity",
        title: "MAS-Infinity Series",
        subtitle: "Premium Fine Pitch Indoor LED",
        description: "Ultra-fine pixel pitch LED displays delivering exceptional image quality for control rooms and boardrooms.",
        icon: <Monitor className="w-8 h-8" />,
        features: ["Indoor/Commercial", "P0.9 - P1.5", "Crystal Clear"],
        link: "/products/indoor/infinity",
    },
    {
        id: "ox",
        title: "MAS-OX Series",
        subtitle: "High Brightness Outdoor LED",
        description: "High-brightness outdoor LED displays designed for maximum visibility in direct sunlight.",
        icon: <Tv className="w-8 h-8" />,
        features: ["8000+ nits", "IP65 Rated", "24/7 Operation"],
        link: "/products/outdoor/ox",
    },
    {
        id: "transglow",
        title: "MAS-TransGlow Series",
        subtitle: "Transparent LED Display",
        description: "See-through LED panels that blend digital content with physical environments.",
        icon: <Layers className="w-8 h-8" />,
        features: ["85% Transparent", "Lightweight", "Glass Facades"],
        link: "/products/transparent/transglow",
    },
    {
        id: "bendex",
        title: "MAS-Bendex Series",
        subtitle: "Flexible Curved Indoor LED",
        description: "Flexible LED modules enabling creative curved and irregular shaped displays.",
        icon: <Spline className="w-8 h-8" />,
        features: ["Curved Designs", "≥500mm Bend", "Modular"],
        link: "/products/indoor/bendex",
    },
    {
        id: "rx-indoor",
        title: "MAS-RX Series Indoor",
        subtitle: "Quick-Setup Rental LED",
        description: "Fast-deploying indoor rental LED displays designed for events and concerts.",
        icon: <TouchpadIcon className="w-8 h-8" />,
        features: ["Events", "Quick Setup", "Lightweight"],
        link: "/products/rental/rx-indoor",
    },
    {
        id: "storm",
        title: "MAS-Storm Series",
        subtitle: "Rugged All-Weather Outdoor LED",
        description: "Heavy-duty outdoor LED displays engineered for extreme weather conditions.",
        icon: <Eye className="w-8 h-8" />,
        features: ["IP68 Rated", "120 km/h Wind", "All-Weather"],
        link: "/products/outdoor/storm",
    },
    {
        id: "standpro",
        title: "MAS-StandPro Series",
        subtitle: "Freestanding LED Poster",
        description: "Elegant freestanding LED poster displays for retail and exhibitions.",
        icon: <Sun className="w-8 h-8" />,
        features: ["Plug & Play", "Portable", "Cloud Managed"],
        link: "/products/standee/standpro",
    },
];

export default function ProductShowcase() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section id="products" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                        Our Products
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
                        The MAS LED Series
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Engineered for excellence, designed for impact. Explore our premium range of LED display solutions.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredId(product.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`
                led-card relative rounded-2xl p-6 bg-slate-900/50 backdrop-blur-sm cursor-pointer
                ${hoveredId === product.id ? "scale-[1.02]" : ""}
                transition-all duration-300
              `}
                        >
                            <Link href={product.link}>
                                {/* Icon */}
                                <div className={`
                w-14 h-14 rounded-xl flex items-center justify-center mb-4
                transition-all duration-300
                ${hoveredId === product.id
                                        ? "bg-gradient-to-br from-cyan-500 to-cyan-400 text-slate-950"
                                        : "bg-slate-800 text-cyan-400"}`}>
                                    {product.icon}
                                </div>

                                {/* Title & Subtitle */}
                                <h3 className="text-xl font-bold text-white mb-1">{product.title}</h3>
                                <p className="text-cyan-400 text-sm font-medium mb-3">{product.subtitle}</p>

                                {/* Description - Revealed on hover */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: hoveredId === product.id ? "auto" : 0,
                                        opacity: hoveredId === product.id ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-slate-400 text-sm mb-4">{product.description}</p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {product.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="px-3 py-1 text-xs font-medium bg-cyan-400/10 text-cyan-400 rounded-full"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* View Product Link */}
                                    <div className="flex items-center gap-1 text-cyan-400 text-sm font-medium">
                                        View Product <ArrowRight className="w-4 h-4" />
                                    </div>
                                </motion.div>

                                {/* Hover indicator */}
                                {hoveredId !== product.id && (
                                    <p className="text-slate-500 text-sm mt-2">Hover to learn more →</p>
                                )}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Products Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                    >
                        View All Products
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
