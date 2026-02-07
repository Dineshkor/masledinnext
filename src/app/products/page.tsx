"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    ChevronRight,
    Sparkles
} from "lucide-react";

interface Product {
    id: string;
    title: string;
    series: string;
    description: string;
    features: string[];
    applications: string[];
    icon: React.ReactNode;
    gradient: string;
    accentColor: string;
}

const products: Product[] = [
    {
        id: "clarityx",
        title: "ClarityX",
        series: "Professional COB LED Series",
        description: "High-resolution COB LED displays for studios, control rooms, and premium indoor applications. Superior image quality with seamless integration.",
        features: ["COB Technology", "Ultra-High Resolution", "Wide Viewing Angle", "Seamless Splicing"],
        applications: ["Studios", "Control Rooms", "Broadcast Centers", "Command Centers"],
        icon: <Cpu className="w-8 h-8" />,
        gradient: "from-violet-500 to-purple-600",
        accentColor: "violet",
    },
    {
        id: "boardview",
        title: "Clarity BoardView",
        series: "Commercial GOB LED Series",
        description: "Durable GOB LED panels ideal for retail, corporate, and high-traffic venues. Enhanced protection with Glue-On-Board technology.",
        features: ["GOB Protection", "Anti-Collision", "Moisture Resistant", "Easy Maintenance"],
        applications: ["Retail Stores", "Corporate Lobbies", "Shopping Malls", "Exhibitions"],
        icon: <Monitor className="w-8 h-8" />,
        gradient: "from-cyan-500 to-blue-600",
        accentColor: "cyan",
    },
    {
        id: "claritywall",
        title: "ClarityWall",
        series: "DOOH & Outdoor Billboards LED Series",
        description: "Weatherproof LED solutions for billboards, stadiums, and large-format outdoor advertising. Built to withstand extreme conditions.",
        features: ["IP65 Weatherproof", "High Brightness 8000+ nits", "Front/Rear Maintenance", "Anti-UV Coating"],
        applications: ["Billboards", "Stadiums", "Highway Signage", "Building Facades"],
        icon: <Tv className="w-8 h-8" />,
        gradient: "from-orange-500 to-red-600",
        accentColor: "orange",
    },
    {
        id: "optiview",
        title: "Clarity OptiView",
        series: "Economical Outdoor LED Series",
        description: "Cost-effective outdoor LED cabinets designed for signage, hoardings, and general-purpose advertising without compromising quality.",
        features: ["Budget-Friendly", "Quick Installation", "Low Power Consumption", "Robust Build"],
        applications: ["Signage", "Hoardings", "Petrol Stations", "Retail Outdoor"],
        icon: <Sun className="w-8 h-8" />,
        gradient: "from-green-500 to-emerald-600",
        accentColor: "green",
    },
    {
        id: "claritytouch",
        title: "ClarityTouch",
        series: "Interactive All-in-One Series",
        description: "All-in-one LED touch panels for meeting rooms, classrooms, and collaboration spaces. Seamless interactivity for modern workplaces.",
        features: ["Multi-Touch Support", "Built-in Android/Windows", "4K Resolution", "Whiteboard Mode"],
        applications: ["Meeting Rooms", "Classrooms", "Training Centers", "Collaboration Spaces"],
        icon: <TouchpadIcon className="w-8 h-8" />,
        gradient: "from-pink-500 to-rose-600",
        accentColor: "pink",
    },
    {
        id: "clarityflex",
        title: "ClarityFlex",
        series: "Flexible / Customised LED Series",
        description: "Creative bendable LED modules for curved walls, artistic installations, and stage backdrops. Unleash your creative vision.",
        features: ["Bendable Modules", "Custom Shapes", "Lightweight Design", "Creative Freedom"],
        applications: ["Stage Backdrops", "Curved Walls", "Artistic Installations", "Retail Displays"],
        icon: <Spline className="w-8 h-8" />,
        gradient: "from-amber-500 to-yellow-500",
        accentColor: "amber",
    },
    {
        id: "clarityair",
        title: "ClarityAir",
        series: "Outdoor Transparent LED Series",
        description: "Ultra-lightweight transparent LED panels for glass facades, showrooms, and architectural media. See-through brilliance.",
        features: ["Up to 85% Transparency", "Ultra-Lightweight", "Easy Glass Mount", "Wind Resistant"],
        applications: ["Glass Facades", "Showrooms", "Airports", "Retail Windows"],
        icon: <Layers className="w-8 h-8" />,
        gradient: "from-sky-400 to-cyan-500",
        accentColor: "sky",
    },
    {
        id: "visionpro",
        title: "Clarity Vision Pro",
        series: "Professional SMD Outdoor LED Series",
        description: "High-performance SMD LED panels designed for professional outdoor video walls. Cinema-grade visuals in any environment.",
        features: ["SMD Technology", "Wide Color Gamut", "High Refresh Rate", "HDR Support"],
        applications: ["Outdoor Video Walls", "Sports Venues", "Concert Stages", "Theme Parks"],
        icon: <Eye className="w-8 h-8" />,
        gradient: "from-indigo-500 to-blue-600",
        accentColor: "indigo",
    },
];

export default function ProductsPage() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-cyan-400 text-sm font-medium bg-cyan-400/10 rounded-full border border-cyan-400/20">
                            <Sparkles className="w-4 h-4" />
                            LED Display Solutions
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Our Product{" "}
                            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                                Series
                            </span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Explore our comprehensive range of LED display solutions engineered for clarity,
                            flexibility, and unmatched performance across every application.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredId(product.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className="group relative"
                            >
                                <Link href={`/products/${product.id}`}>
                                    {/* Card */}
                                    <div className={`
                  relative h-full rounded-2xl overflow-hidden
                  bg-slate-900/50 border border-slate-800
                  transition-all duration-500
                  ${hoveredId === product.id ? "border-cyan-400/50 scale-[1.02]" : ""}
                `}>
                                        {/* Image/Visual Area */}
                                        <div className={`
                    relative h-48 bg-gradient-to-br ${product.gradient} 
                    flex items-center justify-center overflow-hidden
                  `}>
                                            {/* Animated background pattern */}
                                            <div className="absolute inset-0 opacity-30">
                                                <div className="absolute inset-0" style={{
                                                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                                    backgroundSize: '20px 20px'
                                                }} />
                                            </div>

                                            {/* Icon */}
                                            <motion.div
                                                animate={{
                                                    scale: hoveredId === product.id ? 1.2 : 1,
                                                    rotate: hoveredId === product.id ? 5 : 0,
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="relative z-10 w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white"
                                            >
                                                {product.icon}
                                            </motion.div>

                                            {/* Hover overlay */}
                                            <motion.div
                                                initial={false}
                                                animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                                                className="absolute inset-0 bg-black/40 flex items-center justify-center"
                                            >
                                                <span className="px-4 py-2 bg-white text-slate-950 font-semibold rounded-lg text-sm flex items-center gap-2">
                                                    View Details <ChevronRight className="w-4 h-4" />
                                                </span>
                                            </motion.div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                                {product.title}
                                            </h3>
                                            <p className="text-cyan-400/80 text-sm font-medium mb-3">
                                                {product.series}
                                            </p>
                                            <p className="text-slate-400 text-sm line-clamp-2">
                                                {product.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {product.features.slice(0, 2).map((feature) => (
                                                    <span
                                                        key={feature}
                                                        className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded-md"
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Glow effect on hover */}
                                        {hoveredId === product.id && (
                                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10" />
                                        )}
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProduct(null)}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-2xl bg-slate-900 rounded-2xl overflow-hidden border border-slate-700"
                        >
                            {/* Modal Header */}
                            <div className={`relative h-48 bg-gradient-to-br ${selectedProduct.gradient} flex items-center justify-center`}>
                                <div className="absolute inset-0 opacity-30">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                        backgroundSize: '20px 20px'
                                    }} />
                                </div>
                                <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                                    {selectedProduct.icon}
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8">
                                <h2 className="text-3xl font-bold text-white mb-2">
                                    {selectedProduct.title}
                                </h2>
                                <p className="text-cyan-400 font-medium mb-4">
                                    {selectedProduct.series}
                                </p>
                                <p className="text-slate-300 mb-6">
                                    {selectedProduct.description}
                                </p>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                                        Key Features
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProduct.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="px-3 py-1.5 bg-cyan-400/10 text-cyan-400 rounded-lg text-sm"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Applications */}
                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                                        Applications
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProduct.applications.map((app) => (
                                            <span
                                                key={app}
                                                className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-sm"
                                            >
                                                {app}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-4">
                                    <Link
                                        href="/quote"
                                        className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-bold rounded-xl text-center hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                                    >
                                        Get Quote
                                    </Link>
                                    <button
                                        onClick={() => setSelectedProduct(null)}
                                        className="px-6 py-3 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:bg-slate-800 transition-all cursor-pointer"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA Section */}
            <section className="py-20 relative">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />
                        <div className="relative">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Ready to Transform Your Space?
                            </h2>
                            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                                Our experts will help you choose the perfect LED solution for your requirements.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/quote"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                                >
                                    Request Quote
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="/"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all"
                                >
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
