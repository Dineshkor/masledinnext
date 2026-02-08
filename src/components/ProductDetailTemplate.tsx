"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";
import { Product, getCategoryBySlug, getProductNavigation } from "@/data/productData";

interface ProductDetailTemplateProps {
    product: Product;
}

export default function ProductDetailTemplate({
    product,
}: ProductDetailTemplateProps) {
    const category = getCategoryBySlug(product.categorySlug);
    const { prev, next } = getProductNavigation(product);

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
                        href={`/products/${product.categorySlug}`}
                        className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {category?.name || "Back"}
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className={`pt-32 pb-16 relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-10`} />
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
                            <Link
                                href={`/products/${product.categorySlug}`}
                                className="hover:text-cyan-400 transition-colors"
                            >
                                {category?.name}
                            </Link>
                            <span>/</span>
                            <span className="text-slate-300">{product.name}</span>
                        </div>

                        <div className="text-6xl mb-6">{product.icon}</div>
                        <span className="inline-block px-4 py-2 mb-4 text-cyan-400 text-sm font-medium bg-cyan-400/10 rounded-full border border-cyan-400/20">
                            {product.series}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            {product.name}
                        </h1>
                        <p className="text-xl text-cyan-400 font-medium mb-4">{product.tagline}</p>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-8">{product.description}</p>
                        <Link
                            href="/quote"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                        >
                            Request Quote
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Specs Bar */}
            <section className="py-8 border-y border-slate-800 bg-slate-900/50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {product.specs.map((spec) => (
                            <div key={spec.label} className="text-center">
                                <p className="text-cyan-400 font-bold text-lg">{spec.value}</p>
                                <p className="text-slate-500 text-xs">{spec.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Product Features</h2>
                        <p className="text-slate-400">Advanced technology for superior performance</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {product.features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-colors"
                            >
                                <CheckCircle className="w-8 h-8 text-cyan-400 mb-4" />
                                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                                <p className="text-slate-400 text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <section className="py-20 bg-slate-900/30">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Target Applications</h2>
                        <p className="text-slate-400">Ideal solutions for diverse environments</p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {product.applications.map((app, index) => (
                            <motion.div
                                key={app}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-white font-medium"
                            >
                                {app}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Transform Your Space?
                        </h2>
                        <p className="text-slate-400 mb-8">
                            Get a customized quote for your {product.name} requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/quote"
                                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                            >
                                Get Quote
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Navigation */}
            <section className="py-8 border-t border-slate-800">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex justify-between items-center">
                        {prev ? (
                            <Link
                                href={`/products/${product.categorySlug}/${prev.id}`}
                                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span className="hidden sm:inline">{prev.name}</span>
                                <span className="sm:hidden">Previous</span>
                            </Link>
                        ) : (
                            <div />
                        )}
                        <Link
                            href={`/products/${product.categorySlug}`}
                            className="text-cyan-400 hover:text-cyan-300 font-medium"
                        >
                            All {category?.name}
                        </Link>
                        {next ? (
                            <Link
                                href={`/products/${product.categorySlug}/${next.id}`}
                                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                            >
                                <span className="hidden sm:inline">{next.name}</span>
                                <span className="sm:hidden">Next</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
