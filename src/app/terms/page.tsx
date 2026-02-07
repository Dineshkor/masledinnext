"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, CheckCircle, XCircle, AlertTriangle, Scale, Gavel } from "lucide-react";
import Footer from "@/components/Footer";

const sections = [
    {
        icon: CheckCircle,
        title: "Acceptance of Terms",
        content: `By accessing and using the Mas LED website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, users, and others who access or use our services.`
    },
    {
        icon: Scale,
        title: "Use of Services",
        content: `You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:

• Use our services in any way that violates applicable laws or regulations
• Attempt to gain unauthorized access to any part of our services
• Interfere with or disrupt the integrity or performance of our services
• Transmit any malicious code or harmful content
• Impersonate any person or entity`
    },
    {
        icon: FileText,
        title: "Intellectual Property",
        content: `All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Mas LED and is protected by intellectual property laws.

You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.`
    },
    {
        icon: AlertTriangle,
        title: "Disclaimer of Warranties",
        content: `Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied.

We do not warrant that:
• Our services will be uninterrupted or error-free
• Defects will be corrected
• Our services are free of viruses or harmful components`
    },
    {
        icon: XCircle,
        title: "Limitation of Liability",
        content: `To the maximum extent permitted by law, Mas LED shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:

• Your use or inability to use our services
• Any unauthorized access to your data
• Any interruption or cessation of our services
• Any errors or omissions in our content`
    },
    {
        icon: Gavel,
        title: "Governing Law",
        content: `These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.

Any disputes arising from these terms shall be resolved in the courts of Greater Noida, Uttar Pradesh, India.`
    },
];

export default function TermsPage() {
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
                            <FileText className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Terms of Service
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
                            Welcome to Mas LED. These Terms of Service govern your use of our website and services. Please read these terms carefully before using our services.
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
                        <h3 className="text-xl font-bold text-white mb-2">Need Clarification?</h3>
                        <p className="text-slate-400 mb-4">
                            If you have any questions about these Terms, please contact us.
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
