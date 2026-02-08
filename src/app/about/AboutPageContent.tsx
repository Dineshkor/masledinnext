"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Award, Users, Globe, Zap, Shield, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Projects Delivered" },
    { value: "50+", label: "Cities Served" },
    { value: "24/7", label: "Support Available" },
];

const values = [
    {
        icon: <Award className="w-8 h-8" />,
        title: "Quality Excellence",
        description: "We never compromise on quality, using only premium LED components and rigorous testing to ensure lasting performance.",
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Customer First",
        description: "Every solution is tailored to our client's unique needs, with dedicated support from consultation to installation.",
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Innovation Driven",
        description: "We continuously adopt cutting-edge LED technology to deliver the most advanced display solutions available.",
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Reliability",
        description: "Our products are built to last, backed by comprehensive warranties and responsive after-sales service.",
    },
];

const team = [
    {
        role: "Leadership",
        description: "Experienced professionals with decades of combined expertise in LED technology and display solutions.",
    },
    {
        role: "Technical Team",
        description: "Skilled engineers specializing in LED integration, custom installations, and system optimization.",
    },
    {
        role: "Sales & Support",
        description: "Dedicated consultants ready to understand your needs and provide tailored solutions.",
    },
];

export default function AboutPageContent() {
    return (
        <main className="min-h-screen bg-slate-950">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                <div className="max-w-6xl mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <span className="inline-block px-4 py-2 mb-6 text-cyan-400 text-sm font-medium bg-cyan-400/10 rounded-full border border-cyan-400/20">
                            About MAS LED
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Illuminating Ideas,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
                                Delivering Excellence
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                            MAS LED is a leading provider of premium LED display solutions,
                            transforming spaces with cutting-edge visual technology across India and beyond.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 border-y border-slate-800 bg-slate-900/50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <p className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</p>
                                <p className="text-slate-400 text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-slate-400">
                                <p>
                                    Founded with a vision to revolutionize visual communication, MAS LED has grown
                                    from a small team of LED enthusiasts to one of India&apos;s most trusted LED display providers.
                                </p>
                                <p>
                                    We specialize in a comprehensive range of LED solutions — from ultra-fine pitch
                                    indoor displays for corporate environments to high-brightness outdoor billboards,
                                    flexible curved installations, transparent displays for modern architecture, and
                                    quick-deploy rental solutions for events.
                                </p>
                                <p>
                                    Our commitment to quality, innovation, and customer satisfaction has made us the
                                    preferred partner for businesses, event organizers, and institutions across the country.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/20">
                                <Target className="w-10 h-10 text-cyan-400 mb-4" />
                                <h3 className="text-white font-semibold mb-2">Our Mission</h3>
                                <p className="text-slate-400 text-sm">
                                    To deliver world-class LED display solutions that empower businesses to communicate effectively.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20">
                                <Eye className="w-10 h-10 text-purple-400 mb-4" />
                                <h3 className="text-white font-semibold mb-2">Our Vision</h3>
                                <p className="text-slate-400 text-sm">
                                    To be India&apos;s most innovative and customer-centric LED display company.
                                </p>
                            </div>
                            <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/20">
                                <Heart className="w-10 h-10 text-amber-400 mb-4" />
                                <h3 className="text-white font-semibold mb-2">Our Promise</h3>
                                <p className="text-slate-400 text-sm">
                                    Premium quality products, transparent pricing, professional installation, and reliable after-sales support — every time.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-slate-900/30">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-colors text-center"
                            >
                                <div className="w-16 h-16 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 mx-auto mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                                <p className="text-slate-400 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Why Choose MAS LED?
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            We go beyond just selling LED displays
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-400 flex items-center justify-center mx-auto mb-4">
                                <Globe className="w-8 h-8 text-slate-950" />
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-2">Pan-India Presence</h3>
                            <p className="text-slate-400 text-sm">
                                With installations across 50+ cities, we bring LED excellence to every corner of India.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-400 flex items-center justify-center mx-auto mb-4">
                                <Headphones className="w-8 h-8 text-slate-950" />
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-2">Dedicated Support</h3>
                            <p className="text-slate-400 text-sm">
                                24/7 technical support and quick response times ensure your displays are always running.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-400 flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-slate-950" />
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-2">Certified Quality</h3>
                            <p className="text-slate-400 text-sm">
                                All products meet international quality standards with comprehensive warranties.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-slate-900/30">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Team
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            A passionate team dedicated to bringing your vision to life
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.role}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-10 h-10 text-cyan-400" />
                                </div>
                                <h3 className="text-white font-semibold text-lg mb-2">{member.role}</h3>
                                <p className="text-slate-400 text-sm">{member.description}</p>
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
                            Ready to Work With Us?
                        </h2>
                        <p className="text-slate-400 mb-8">
                            Let&apos;s discuss how MAS LED can transform your space with stunning visual solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/quote"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                            >
                                Get a Quote
                                <ArrowRight className="w-5 h-5" />
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

            <Footer />
        </main>
    );
}
