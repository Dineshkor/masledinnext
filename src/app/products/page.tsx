"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { categories } from "@/data/productData";

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
                            Explore our comprehensive range of LED display solutions for every application
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="pb-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Link href={`/products/${category.slug}`}>
                                    <div
                                        onMouseEnter={() => setHoveredId(category.id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                        className={`
                                            group relative p-8 rounded-2xl border transition-all duration-300 cursor-pointer
                                            min-h-[220px] flex flex-col justify-between
                                            ${hoveredId === category.id
                                                ? `${category.bgColor} ${category.borderColor} shadow-xl`
                                                : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                                            }
                                        `}
                                    >
                                        {/* Gradient Background on Hover */}
                                        <div
                                            className={`
                                                absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} 
                                                opacity-0 group-hover:opacity-5 transition-opacity duration-300
                                            `}
                                        />

                                        <div className="relative z-10">
                                            {/* Icon */}
                                            <div
                                                className={`
                                                    w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4
                                                    bg-gradient-to-br ${category.gradient}
                                                    group-hover:scale-110 transition-transform duration-300
                                                    shadow-lg
                                                `}
                                            >
                                                {category.icon}
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                                {category.name}
                                            </h3>
                                            <p className="text-slate-400 text-sm line-clamp-2">
                                                {category.description}
                                            </p>
                                        </div>

                                        {/* Arrow */}
                                        <div className="relative z-10 flex items-center justify-between mt-4 pt-4 border-t border-slate-800/50">
                                            <span className="text-sm text-cyan-400/70 font-medium">
                                                View Products
                                            </span>
                                            <ArrowRight
                                                className={`
                                                    w-5 h-5 transition-all duration-300
                                                    ${hoveredId === category.id
                                                        ? "text-cyan-400 translate-x-0"
                                                        : "text-slate-600 -translate-x-2"
                                                    }
                                                `}
                                            />
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
