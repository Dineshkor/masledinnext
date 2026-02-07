"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="grid-background" />
                <div className="glow-orb glow-orb-1" />
                <div className="glow-orb glow-orb-2" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block px-4 py-2 mb-6 text-cyan-400 text-sm font-medium bg-cyan-400/10 rounded-full border border-cyan-400/20">
                        Premium B2B LED Solutions
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                >
                    <span className="text-white">Next-Gen LED Displays</span>
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                        That Inspire.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10"
                >
                    Beyond displays — We engineer solutions that drive business impact.
                    <br className="hidden md:block" />
                    Powered by <span className="text-cyan-400 font-semibold">Mas LED</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/products">
                        <MagneticButton>
                            <span className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all inline-block">
                                Explore Products
                            </span>
                        </MagneticButton>
                    </Link>
                    <Link href="/contact" className="px-8 py-4 border border-slate-700 text-white font-semibold rounded-xl hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all">
                        Contact Us
                    </Link>
                </motion.div>

                {/* Feature Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-16 relative"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            { icon: "☀️", title: "Ultra Bright", value: "8000+ nits", desc: "Daylight visible" },
                            { icon: "🛡️", title: "Weatherproof", value: "IP65 Rated", desc: "All-weather durability" },
                            { icon: "⚡", title: "Energy Efficient", value: "40% Savings", desc: "Lower power consumption" },
                            { icon: "🎨", title: "True Colors", value: "HDR Ready", desc: "Vivid color accuracy" },
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 + index * 0.1 }}
                                className="group p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all cursor-default"
                            >
                                <div className="text-3xl mb-3">{feature.icon}</div>
                                <h3 className="text-white font-semibold text-sm mb-1">{feature.title}</h3>
                                <p className="text-cyan-400 font-bold text-lg">{feature.value}</p>
                                <p className="text-slate-500 text-xs mt-1">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    {/* Decorative glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-cyan-500/5 rounded-3xl blur-3xl -z-10" />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
}
