"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    MapPin,
    Phone,
    Mail,
    Clock,
    Building2,
    MessageSquare
} from "lucide-react";
import Footer from "@/components/Footer";

const contactInfo = [
    {
        icon: Building2,
        title: "Office Address",
        content: "Mastech Advertising Solutions Pvt Ltd\n1st Floor, Wegmans Business Park,\nPlot No 3, Knowledge Park-3,\nGautam Buddha Nagar, Greater Noida,\nUP-201306",
    },
    {
        icon: Phone,
        title: "Phone",
        content: "+91 87438 88577",
        link: "tel:+918743888577",
    },
    {
        icon: Mail,
        title: "Email",
        content: "masled001@gmail.com",
        link: "mailto:masled001@gmail.com",
    },
    {
        icon: Clock,
        title: "Business Hours",
        content: "Monday - Saturday\n9:00 AM - 6:00 PM IST",
    },
];

export default function ContactPage() {
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
            <section className="pt-32 pb-8">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 mb-6">
                            <MapPin className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Contact Us
                        </h1>
                        <p className="text-slate-400 max-w-xl mx-auto">
                            Get in touch with our team for inquiries, quotes, and support. We&apos;re here to help you find the perfect LED solution.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="order-2 lg:order-1"
                        >
                            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-lg bg-slate-900">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.123456789!2d77.5089!3d28.4744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9c8e8e8e8e8%3A0x8e8e8e8e8e8e8e8e!2sWegmans%20Business%20Park%2C%20Knowledge%20Park%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full"
                                    title="Mas LED Office Location"
                                />
                            </div>
                            <div className="mt-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                                    <div>
                                        <p className="text-white font-medium">Wegmans Business Park</p>
                                        <p className="text-slate-400 text-sm">Knowledge Park-3, Greater Noida, UP-201306</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="order-1 lg:order-2 space-y-4"
                        >
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                const ContentWrapper = info.link ? "a" : "div";

                                return (
                                    <motion.div
                                        key={info.title}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                    >
                                        <ContentWrapper
                                            href={info.link}
                                            className={`block p-5 rounded-xl bg-slate-900/50 border border-slate-800 ${info.link ? "hover:border-cyan-400/50 hover:bg-slate-900 transition-all cursor-pointer" : ""
                                                }`}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0">
                                                    <Icon className="w-6 h-6 text-cyan-400" />
                                                </div>
                                                <div>
                                                    <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                                                    <p className="text-slate-400 text-sm whitespace-pre-line">{info.content}</p>
                                                </div>
                                            </div>
                                        </ContentWrapper>
                                    </motion.div>
                                );
                            })}

                            {/* CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="pt-4"
                            >
                                <Link
                                    href="/quote"
                                    className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                                >
                                    <MessageSquare className="w-5 h-5" />
                                    Request a Quote
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
