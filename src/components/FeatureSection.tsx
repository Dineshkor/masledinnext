"use client";

import { motion } from "framer-motion";
import { MapPin, Wrench, Shield, Settings } from "lucide-react";

const features = [
    {
        icon: MapPin,
        title: "Nationwide Execution",
        description: "Pan-India presence with expert teams deployed across all major cities for seamless project delivery.",
    },
    {
        icon: Wrench,
        title: "Complete Project Ownership",
        description: "End-to-end solutions from initial design consultation to installation and after-sales support.",
    },
    {
        icon: Shield,
        title: "Quality Assurance",
        description: "CE, RoHS, BIS, FCC certified with ISO 9001, 14001, and 50001 compliance for world-class standards.",
    },
    {
        icon: Settings,
        title: "Customization",
        description: "Modular configurations tailored to your exact size, resolution, and brightness requirements.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function FeatureSection() {
    return (
        <section id="expertise" className="py-24 relative">
            {/* Background accent */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
                        Why Mas LED?
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        We don&apos;t just sell displays — we deliver complete LED solutions backed by expertise and commitment.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                className="group p-8 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-400/20 transition-colors">
                                        <Icon className="w-7 h-7 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { value: "500+", label: "Projects Delivered" },
                        { value: "50+", label: "Cities Covered" },
                        { value: "100%", label: "Client Satisfaction" },
                        { value: "24/7", label: "Support Available" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="text-center p-6 rounded-xl bg-slate-900/50 border border-slate-800"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">
                                {stat.value}
                            </div>
                            <div className="text-slate-400 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
