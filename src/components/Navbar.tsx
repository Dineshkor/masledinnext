"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const productCategories = [
    { name: "Indoor LED Display", href: "/products/indoor", icon: "🏢" },
    { name: "Outdoor LED Display", href: "/products/outdoor", icon: "🌤️" },
    { name: "Rental LED Display", href: "/products/rental", icon: "🎪" },
    { name: "Transparent LED Display", href: "/products/transparent", icon: "✨" },
    { name: "LED Display Standee", href: "/products/standee", icon: "📺" },
];

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "Markets", href: "/#markets" },
    { name: "Expertise", href: "/#expertise" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${isScrolled || isMobileMenuOpen
                ? "bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-cyan-500/10 border border-slate-800"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                            <span className="text-slate-950 font-bold text-lg">M</span>
                        </div>
                        <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            Mas LED
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            link.hasDropdown ? (
                                <div
                                    key={link.name}
                                    className="relative"
                                    onMouseEnter={() => setIsProductsOpen(true)}
                                    onMouseLeave={() => setIsProductsOpen(false)}
                                >
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium"
                                    >
                                        {link.name}
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`} />
                                    </Link>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {isProductsOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                                            >
                                                <div className="bg-slate-900/95 backdrop-blur-lg border border-slate-700 rounded-xl shadow-xl shadow-black/20 overflow-hidden min-w-[260px]">
                                                    {/* View All Products */}
                                                    <Link
                                                        href="/products"
                                                        className="block px-4 py-3 text-cyan-400 font-medium text-sm border-b border-slate-700 hover:bg-slate-800/50 transition-colors"
                                                    >
                                                        View All Products →
                                                    </Link>

                                                    {/* Categories */}
                                                    <div className="py-2">
                                                        {productCategories.map((category) => (
                                                            <Link
                                                                key={category.name}
                                                                href={category.href}
                                                                className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors text-sm"
                                                            >
                                                                <span className="text-lg">{category.icon}</span>
                                                                <span>{category.name}</span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium"
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link href="/quote">
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-semibold rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow cursor-pointer"
                            >
                                Request Quote
                            </motion.span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-white p-2 cursor-pointer"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden mt-4 pb-4"
                        >
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    link.hasDropdown ? (
                                        <div key={link.name}>
                                            <button
                                                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                                                className="flex items-center justify-between w-full py-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium cursor-pointer"
                                            >
                                                {link.name}
                                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileProductsOpen ? "rotate-180" : ""}`} />
                                            </button>

                                            <AnimatePresence>
                                                {isMobileProductsOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pl-4 py-2 space-y-2 border-l-2 border-slate-700 ml-2">
                                                            <Link
                                                                href="/products"
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="block py-1 text-cyan-400 text-sm font-medium"
                                                            >
                                                                View All Products
                                                            </Link>
                                                            {productCategories.map((category) => (
                                                                <Link
                                                                    key={category.name}
                                                                    href={category.href}
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                    className="flex items-center gap-2 py-1 text-slate-400 hover:text-white text-sm"
                                                                >
                                                                    <span>{category.icon}</span>
                                                                    <span>{category.name}</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="py-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium"
                                        >
                                            {link.name}
                                        </Link>
                                    )
                                ))}
                                <Link
                                    href="/quote"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="mt-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-semibold rounded-lg cursor-pointer text-center"
                                >
                                    Request Quote
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
