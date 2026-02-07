"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Eye, Database, Lock, UserCheck, Globe } from "lucide-react";
import Footer from "@/components/Footer";

const sections = [
    {
        icon: Database,
        title: "Information We Collect",
        content: `We collect information you provide directly to us, such as when you request a quote, contact us, or subscribe to our newsletter. This may include:
    
• Name and contact information (email, phone, address)
• Company name and job title
• Project requirements and specifications
• Communication preferences`
    },
    {
        icon: Eye,
        title: "How We Use Your Information",
        content: `We use the information we collect to:

• Respond to your inquiries and provide customer support
• Process and fulfill your quote requests
• Send you technical notices and support messages
• Communicate about products, services, and promotions
• Improve our website and services`
    },
    {
        icon: Lock,
        title: "Information Security",
        content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:

• SSL encryption for data transmission
• Secure data storage with access controls
• Regular security audits and updates
• Employee training on data protection`
    },
    {
        icon: UserCheck,
        title: "Your Rights",
        content: `You have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate information
• Request deletion of your personal information
• Opt-out of marketing communications
• Lodge a complaint with a supervisory authority`
    },
    {
        icon: Globe,
        title: "Cookies & Tracking",
        content: `We use cookies and similar tracking technologies to:

• Remember your preferences
• Analyze website traffic and usage
• Improve user experience

You can control cookie settings through your browser preferences.`
    },
];

export default function PrivacyPolicyPage() {
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
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 mb-6">
                            <Shield className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-slate-400">
                            Last updated: February 2026
                        </p>
                    </motion.div>

                    {/* Intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="prose prose-invert max-w-none mb-12"
                    >
                        <p className="text-slate-300 text-lg leading-relaxed">
                            At Mas LED, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                    </motion.div>

                    {/* Sections */}
                    <div className="space-y-8">
                        {sections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * (index + 2) }}
                                    className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0">
                                            <Icon className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-white mb-3">
                                                {section.title}
                                            </h2>
                                            <p className="text-slate-400 whitespace-pre-line leading-relaxed">
                                                {section.content}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-center"
                    >
                        <h3 className="text-xl font-bold text-white mb-2">Questions?</h3>
                        <p className="text-slate-400 mb-4">
                            If you have any questions about this Privacy Policy, please contact us.
                        </p>
                        <Link
                            href="/quote"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
