"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="relative pt-24 pb-8">
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                                <span className="text-slate-950 font-bold text-lg">M</span>
                            </div>
                            <span className="text-xl font-bold text-white">Mas LED</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Premium B2B LED display solutions engineered for impact. Transform your spaces with next-generation visual technology.
                        </p>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Youtube].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-400/20 hover:text-cyan-400 transition-all cursor-pointer"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Products", href: "/products" },
                                { name: "Markets", href: "/#markets" },
                                { name: "About Us", href: "/#expertise" },
                                { name: "Case Studies", href: "/#approach" },
                                { name: "Get Quote", href: "/quote" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Support */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Help Center", href: "/support" },
                                { name: "Privacy Policy", href: "/privacy" },
                                { name: "Terms of Service", href: "/terms" },
                                { name: "Warranty", href: "/warranty" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                                <span className="text-slate-400 text-sm">
                                    Mastech Advertising Solutions Pvt Ltd<br />
                                    1st Floor, Wegmans Business Park,<br />
                                    Plot No 3, Knowledge Park-3,<br />
                                    Gautam Buddha Nagar, Greater Noida,<br />
                                    UP-201306
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                                <a
                                    href="mailto:masled001@gmail.com"
                                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                                >
                                    masled001@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                                <a
                                    href="tel:+918743888577"
                                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                                >
                                    +91 87438 88577
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm">
                            © {currentYear} Mas LED India Pvt Ltd. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">
                                Terms
                            </Link>
                            <Link href="/support" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">
                                Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
