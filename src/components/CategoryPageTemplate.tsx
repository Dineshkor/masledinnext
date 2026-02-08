"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { Category, Product } from "@/data/productData";

interface CategoryPageTemplateProps {
    category: Category;
    products: Product[];
}

export default function CategoryPageTemplate({
    category,
    products,
}: CategoryPageTemplateProps) {
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
                        href="/products"
                        className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        All Categories
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className={`pt-32 pb-12 relative overflow-hidden`}>
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-10`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                <div className="max-w-6xl mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        {/* Breadcrumb */}
                        <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-6">
                            <Link href="/products" className="hover:text-cyan-400 transition-colors">
                                Products
                            </Link>
                            <span>/</span>
                            <span className="text-slate-300">{category.name}</span>
                        </div>

                        <div className="text-6xl mb-6">{category.icon}</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {category.name}
                        </h1>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            {category.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="pb-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Link href={`/products/${category.slug}/${product.id}`}>
                                    <div
                                        className={`
                                            group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer
                                            bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80
                                            hover:shadow-lg hover:shadow-cyan-500/10
                                        `}
                                    >
                                        <div className="flex items-start gap-5">
                                            {/* Icon */}
                                            <div
                                                className={`
                                                    shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl
                                                    bg-gradient-to-br ${product.gradient} 
                                                    group-hover:scale-110 transition-transform duration-300
                                                `}
                                            >
                                                {product.icon}
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between mb-1">
                                                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                                                        {product.name}
                                                    </h3>
                                                    <ArrowRight
                                                        className={`
                                                            w-4 h-4 transition-all duration-300
                                                            text-slate-600 group-hover:text-cyan-400 
                                                            -translate-x-2 group-hover:translate-x-0 
                                                            opacity-0 group-hover:opacity-100
                                                        `}
                                                    />
                                                </div>
                                                <p className="text-cyan-400/70 text-sm font-medium mb-2">
                                                    {product.series}
                                                </p>
                                                <p className="text-slate-400 text-sm mb-3 line-clamp-2">
                                                    {product.description}
                                                </p>

                                                {/* Feature Tags */}
                                                <div className="flex flex-wrap gap-2">
                                                    {product.specs.slice(0, 3).map((spec) => (
                                                        <span
                                                            key={spec.label}
                                                            className="px-2.5 py-1 text-xs bg-slate-800/80 text-slate-300 rounded-md"
                                                        >
                                                            {spec.value}
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
                        className={`p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border ${category.borderColor} text-center`}
                    >
                        <h2 className="text-2xl font-bold text-white mb-3">
                            Need Help Choosing?
                        </h2>
                        <p className="text-slate-400 mb-6">
                            Our experts will recommend the perfect {category.name.toLowerCase()} for your project.
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
