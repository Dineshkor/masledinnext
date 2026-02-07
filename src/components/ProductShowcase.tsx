"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Monitor, Sun, Layers, Spline, TouchpadIcon, Eye, Tv } from "lucide-react";

interface Product {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
}

const products: Product[] = [
    {
        id: "boardview",
        title: "Clarity BoardView",
        subtitle: "Commercial GOB LED",
        description: "Premium indoor commercial displays with GOB (Glue-On-Board) technology for enhanced durability and visual clarity.",
        icon: <Monitor className="w-8 h-8" />,
        features: ["Indoor/Commercial", "High Durability", "Crystal Clear"],
    },
    {
        id: "wall",
        title: "ClarityWall",
        subtitle: "DOOH & Outdoor Billboards",
        description: "High-brightness outdoor LED solutions designed for digital out-of-home advertising with superior visibility.",
        icon: <Tv className="w-8 h-8" />,
        features: ["High Brightness", "Weather Resistant", "24/7 Operation"],
    },
    {
        id: "air",
        title: "Clarity Air",
        subtitle: "Transparent LED Series",
        description: "Revolutionary transparent LED technology for stunning architectural installations and retail displays.",
        icon: <Layers className="w-8 h-8" />,
        features: ["Architectural", "Lightweight", "See-Through"],
    },
    {
        id: "flex",
        title: "Clarity Flex",
        subtitle: "Flexible/Curved LED",
        description: "Bendable LED modules for creative curved installations, cylinders, and unique architectural shapes.",
        icon: <Spline className="w-8 h-8" />,
        features: ["Creative Installations", "Curved Designs", "Modular"],
    },
    {
        id: "touch",
        title: "Clarity Touch",
        subtitle: "Interactive All-in-One",
        description: "Interactive LED displays perfect for education, corporate presentations, and collaborative environments.",
        icon: <TouchpadIcon className="w-8 h-8" />,
        features: ["Education", "Corporate", "Multi-Touch"],
    },
    {
        id: "vision-pro",
        title: "Clarity Vision Pro",
        subtitle: "Professional SMD Outdoor",
        description: "Cinema-grade outdoor LED with exceptional color accuracy and professional-level performance.",
        icon: <Eye className="w-8 h-8" />,
        features: ["Cinematic", "Color Accurate", "Professional"],
    },
    {
        id: "optiview",
        title: "Clarity OptiView",
        subtitle: "Economical Outdoor Solution",
        description: "Cost-effective outdoor LED solution without compromising on quality and reliability.",
        icon: <Sun className="w-8 h-8" />,
        features: ["Budget-Friendly", "Reliable", "Outdoor Ready"],
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
                        The Clarity Series
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
                            {/* Icon */}
                            <div className={`
                w-14 h-14 rounded-xl flex items-center justify-center mb-4
                transition-all duration-300
                ${hoveredId === product.id
                                    ? "bg-gradient-to-br from-cyan-500 to-cyan-400 text-slate-950"
                                    : "bg-slate-800 text-cyan-400"}
              `}>
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
                                <div className="flex flex-wrap gap-2">
                                    {product.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="px-3 py-1 text-xs font-medium bg-cyan-400/10 text-cyan-400 rounded-full"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Hover indicator */}
                            {hoveredId !== product.id && (
                                <p className="text-slate-500 text-sm mt-2">Hover to learn more →</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
