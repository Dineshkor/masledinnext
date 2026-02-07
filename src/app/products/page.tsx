"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import {
    ArrowLeft,
    ArrowRight,
    Monitor,
    Tv,
    Layers,
    Spline,
    TouchpadIcon,
    Eye,
    Sun,
    Cpu,
} from "lucide-react";

interface Product {
    id: string;
    title: string;
    series: string;
    description: string;
    features: string[];
    icon: React.ReactNode;
    gradient: string;
    bgColor: string;
}

const products: Product[] = [
    {
        id: "clarityx",
        title: "ClarityX",
        series: "Professional COB LED Series",
        description: "Ultra-premium COB LED for studios, control rooms, and broadcast centers.",
        features: ["P0.625-P1.87", "7680Hz Refresh", "15000:1 Contrast"],
        icon: <Cpu className="w-7 h-7" />,
        gradient: "from-violet-500 to-purple-600",
        bgColor: "bg-violet-500/10",
    },
    {
        id: "boardview",
        title: "Clarity BoardView",
        series: "Commercial GOB LED Series",
        description: "Durable GOB panels for retail, corporate, and high-traffic venues.",
        features: ["GOB Protection", "Anti-Collision", "IP30 Front"],
        icon: <Monitor className="w-7 h-7" />,
        gradient: "from-cyan-500 to-blue-600",
        bgColor: "bg-cyan-500/10",
    },
    {
        id: "claritywall",
        title: "ClarityWall",
        series: "DOOH & Outdoor LED Series",
        description: "Weatherproof LED for billboards, stadiums, and large outdoor displays.",
        features: ["8000+ nits", "IP65 Rated", "-40°C to 50°C"],
        icon: <Tv className="w-7 h-7" />,
        gradient: "from-orange-500 to-red-600",
        bgColor: "bg-orange-500/10",
    },
    {
        id: "optiview",
        title: "Clarity OptiView",
        series: "Economical Outdoor Series",
        description: "Cost-effective outdoor LED for signage and general advertising.",
        features: ["Budget-Friendly", "Quick Install", "Low Power"],
        icon: <Sun className="w-7 h-7" />,
        gradient: "from-green-500 to-emerald-600",
        bgColor: "bg-green-500/10",
    },
    {
        id: "claritytouch",
        title: "ClarityTouch",
        series: "Interactive All-in-One Series",
        description: "Touch LED panels for meeting rooms, classrooms, and collaboration.",
        features: ["40-Point Touch", "4K UHD", "Built-in OS"],
        icon: <TouchpadIcon className="w-7 h-7" />,
        gradient: "from-pink-500 to-rose-600",
        bgColor: "bg-pink-500/10",
    },
    {
        id: "clarityflex",
        title: "ClarityFlex",
        series: "Flexible LED Series",
        description: "Bendable LED modules for curved walls and creative installations.",
        features: ["≥500mm Bend", "Lightweight", "Custom Shapes"],
        icon: <Spline className="w-7 h-7" />,
        gradient: "from-amber-500 to-yellow-500",
        bgColor: "bg-amber-500/10",
    },
    {
        id: "clarityair",
        title: "ClarityAir",
        series: "Transparent LED Series",
        description: "See-through LED panels for glass facades and architectural media.",
        features: ["85% Transparent", "<12kg/m²", "IP65"],
        icon: <Layers className="w-7 h-7" />,
        gradient: "from-sky-400 to-cyan-500",
        bgColor: "bg-sky-500/10",
    },
    {
        id: "visionpro",
        title: "Clarity Vision Pro",
        series: "Professional SMD Outdoor Series",
        description: "Cinema-grade outdoor video walls for professional installations.",
        features: ["HDR10+", "7680Hz", "16-bit Color"],
        icon: <Eye className="w-7 h-7" />,
        gradient: "from-indigo-500 to-blue-600",
        bgColor: "bg-indigo-500/10",
    },
];

export default function ProductsPage() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-slate-950">
            {/* Navbar */}
            <nav className="fixed top-4 left-4 right-4 z-50 glass rounded-2xl">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                            <span className="text-slate-950 font-bold text-lg">M</span>
                        </div>
                        <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            Mas LED
                        </span>
                    </Link>
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-12">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            LED Display{" "}
                            <span className="text-cyan-400">Solutions</span>
                        </h1>
                        <p className="text-slate-400 max-w-xl mx-auto">
                            Explore our 8 product series engineered for every application
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid - Cleaner 2-column layout */}
            <section className="pb-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Link href={`/products/${product.id}`}>
                                    <div
                                        onMouseEnter={() => setHoveredId(product.id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                        className={`
                                            group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer
                                            ${hoveredId === product.id
                                                ? "bg-slate-800/80 border-cyan-500/50 shadow-lg shadow-cyan-500/10"
                                                : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                                            }
                                        `}
                                    >
                                        <div className="flex items-start gap-5">
                                            {/* Icon */}
                                            <div className={`
                                                shrink-0 w-14 h-14 rounded-xl flex items-center justify-center
                                                bg-gradient-to-br ${product.gradient} text-white
                                                group-hover:scale-110 transition-transform duration-300
                                            `}>
                                                {product.icon}
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between mb-1">
                                                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                                                        {product.title}
                                                    </h3>
                                                    <ArrowRight className={`
                                                        w-4 h-4 transition-all duration-300
                                                        ${hoveredId === product.id
                                                            ? "text-cyan-400 translate-x-0 opacity-100"
                                                            : "text-slate-600 -translate-x-2 opacity-0"
                                                        }
                                                    `} />
                                                </div>
                                                <p className="text-cyan-400/70 text-sm font-medium mb-2">
                                                    {product.series}
                                                </p>
                                                <p className="text-slate-400 text-sm mb-3 line-clamp-1">
                                                    {product.description}
                                                </p>

                                                {/* Feature Tags */}
                                                <div className="flex flex-wrap gap-2">
                                                    {product.features.map((feature) => (
                                                        <span
                                                            key={feature}
                                                            className="px-2.5 py-1 text-xs bg-slate-800/80 text-slate-300 rounded-md"
                                                        >
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-20">
                <div className="max-w-3xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 text-center"
                    >
                        <h2 className="text-2xl font-bold text-white mb-3">
                            Need Help Choosing?
                        </h2>
                        <p className="text-slate-400 mb-6">
                            Our experts will recommend the perfect solution for your project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                href="/quote"
                                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                            >
                                Get Quote
                            </Link>
                            <Link
                                href="/contact"
                                className="px-6 py-3 border border-slate-600 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
