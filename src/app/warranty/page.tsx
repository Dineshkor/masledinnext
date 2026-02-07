"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ShieldCheck,
    CheckCircle,
    Clock,
    Wrench,
    AlertTriangle,
    Phone,
    FileText
} from "lucide-react";
import Footer from "@/components/Footer";

const warrantyFeatures = [
    {
        icon: Clock,
        title: "3-Year Standard Warranty",
        description: "All Mas LED products come with a comprehensive 3-year warranty covering manufacturing defects, component failures, and workmanship issues."
    },
    {
        icon: Wrench,
        title: "On-Site Service",
        description: "Our certified technicians provide on-site repair and maintenance services across India, ensuring minimal downtime for your operations."
    },
    {
        icon: ShieldCheck,
        title: "Extended Warranty Options",
        description: "Extend your coverage up to 5 years with our extended warranty plans. Annual Maintenance Contracts (AMC) also available for comprehensive support."
    },
];

const coverage = [
    "LED module failures and dead pixels",
    "Power supply and driver board defects",
    "Control system malfunctions",
    "Cabinet and frame structural issues",
    "Connectivity and signal processing problems",
    "Factory calibration deviations",
];

const exclusions = [
    "Physical damage from accidents or mishandling",
    "Damage from improper installation",
    "Natural disasters (floods, lightning, earthquakes)",
    "Unauthorized modifications or repairs",
    "Normal wear and cosmetic damage",
    "Damage from power surges without proper protection",
];

export default function WarrantyPage() {
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

            {/* Hero */}
            <section className="pt-32 pb-16">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 mb-6">
                            <ShieldCheck className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Warranty & Support
                        </h1>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            We stand behind the quality of our LED displays with comprehensive warranty coverage and dedicated support services.
                        </p>
                    </motion.div>

                    {/* Warranty Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                    >
                        {warrantyFeatures.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={feature.title}
                                    className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-center"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-7 h-7 text-cyan-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm">{feature.description}</p>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Coverage Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* What's Covered */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <CheckCircle className="w-6 h-6 text-green-400" />
                                <h2 className="text-xl font-bold text-white">What&apos;s Covered</h2>
                            </div>
                            <ul className="space-y-3">
                                {coverage.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 shrink-0" />
                                        <span className="text-slate-300 text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* What's Not Covered */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <AlertTriangle className="w-6 h-6 text-amber-400" />
                                <h2 className="text-xl font-bold text-white">Exclusions</h2>
                            </div>
                            <ul className="space-y-3">
                                {exclusions.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <AlertTriangle className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                                        <span className="text-slate-300 text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Claim Process */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 mb-16"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <FileText className="w-6 h-6 text-cyan-400" />
                            <h2 className="text-xl font-bold text-white">How to File a Warranty Claim</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { step: "1", title: "Contact Us", desc: "Call or email our support team" },
                                { step: "2", title: "Provide Details", desc: "Share product info and issue" },
                                { step: "3", title: "Diagnosis", desc: "Our technicians assess the issue" },
                                { step: "4", title: "Resolution", desc: "Repair, replace, or on-site fix" },
                            ].map((item) => (
                                <div key={item.step} className="text-center">
                                    <div className="w-10 h-10 rounded-full bg-cyan-400 text-slate-950 font-bold flex items-center justify-center mx-auto mb-3">
                                        {item.step}
                                    </div>
                                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-center p-8 rounded-2xl bg-cyan-400/10 border border-cyan-400/20"
                    >
                        <Phone className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Need Warranty Support?</h3>
                        <p className="text-slate-400 mb-6">Our support team is ready to help you.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+918743888577"
                                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                            >
                                Call +91 87438 88577
                            </a>
                            <Link
                                href="/support"
                                className="px-6 py-3 border border-slate-600 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all"
                            >
                                Visit Help Center
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
