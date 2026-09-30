"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    HelpCircle,
    Phone,
    Mail,
    MessageSquare,
    Clock,
    FileQuestion,
    Wrench,
    BookOpen,
    ShieldCheck
} from "lucide-react";
import Footer from "@/components/Footer";

const faqs = [
    {
        question: "What is the typical lead time for LED display orders?",
        answer: "Lead times depend on the display series, configuration and installation scope. Contact our team with your requirements for a project timeline."
    },
    {
        question: "Do you provide installation services?",
        answer: "Installation scope is planned for each project. Tell our team about your site and display requirements to discuss setup and commissioning."
    },
    {
        question: "What warranty do you offer on LED displays?",
        answer: "Warranty coverage depends on the product and your project agreement. Share your quotation or purchase documents with our team to confirm the applicable terms."
    },
    {
        question: "Can displays be customized for specific dimensions?",
        answer: "Many LED series use modular cabinets that can be arranged for different dimensions. The available size and resolution depend on the selected series and site."
    },
    {
        question: "What after-sales support do you provide?",
        answer: "Contact our support team with the display series, site and a description of the issue. They can advise on the service options for your project."
    },
];

const supportOptions = [
    {
        icon: Phone,
        title: "Phone Support",
        description: "Speak directly with our technical experts",
        action: "+91 87438 88577",
        link: "tel:+918743888577",
    },
    {
        icon: Mail,
        title: "Email Support",
        description: "Get detailed responses to your queries",
        action: "masled001@gmail.com",
        link: "mailto:masled001@gmail.com",
    },
    {
        icon: MessageSquare,
        title: "Request Quote",
        description: "Get a customized solution for your project",
        action: "Get Quote",
        link: "/quote",
    },
];

const resources = [
    {
        icon: BookOpen,
        title: "Product Documentation",
        description: "Technical specifications, datasheets, and user manuals",
    },
    {
        icon: Wrench,
        title: "Installation Guides",
        description: "Step-by-step installation and setup instructions",
    },
    {
        icon: ShieldCheck,
        title: "Warranty Information",
        description: "Coverage details and claim procedures",
    },
];

export default function SupportPage() {
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
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 mb-6">
                            <HelpCircle className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Help Center
                        </h1>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Find answers to common questions and get the support you need for your LED display solutions.
                        </p>
                    </motion.div>

                    {/* Support Options */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                    >
                        {supportOptions.map((option) => {
                            const Icon = option.icon;
                            return (
                                <Link
                                    key={option.title}
                                    href={option.link}
                                    className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-400/50 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-4 group-hover:bg-cyan-400/20 transition-colors">
                                        <Icon className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{option.title}</h3>
                                    <p className="text-slate-400 text-sm mb-3">{option.description}</p>
                                    <span className="text-cyan-400 font-medium text-sm">{option.action} →</span>
                                </Link>
                            );
                        })}
                    </motion.div>

                    {/* Business Hours */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center gap-4 mb-16 p-4 rounded-xl bg-slate-900/30 border border-slate-800"
                    >
                        <Clock className="w-5 h-5 text-cyan-400" />
                        <span className="text-slate-300">
                            <strong className="text-white">Business Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM IST
                        </span>
                    </motion.div>

                    {/* FAQs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <FileQuestion className="w-6 h-6 text-cyan-400" />
                            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={faq.question}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.05 }}
                                    className="p-6 rounded-xl bg-slate-900/50 border border-slate-800"
                                >
                                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                                    <p className="text-slate-400">{faq.answer}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Resources */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-8">Resources</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {resources.map((resource) => {
                                const Icon = resource.icon;
                                return (
                                    <div
                                        key={resource.title}
                                        className="p-6 rounded-xl bg-slate-900/30 border border-slate-800"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mb-4">
                                            <Icon className="w-5 h-5 text-cyan-400" />
                                        </div>
                                        <h3 className="text-white font-semibold mb-1">{resource.title}</h3>
                                        <p className="text-slate-500 text-sm">{resource.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
