"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClipboardList, Compass, Rocket, HeartHandshake } from "lucide-react";

const steps = [
    {
        icon: ClipboardList,
        title: "Project Requirements",
        description: "Comprehensive site surveys, environment analysis, and pixel pitch planning to define optimal specifications.",
    },
    {
        icon: Compass,
        title: "Design & Engineering",
        description: "Custom layout designs, structural engineering, and technical drawings tailored to your space.",
    },
    {
        icon: Rocket,
        title: "Execution & Installation",
        description: "Factory-tested systems, professional installation, and on-site calibration for perfect performance.",
    },
    {
        icon: HeartHandshake,
        title: "Service & Support",
        description: "Operator training, preventive maintenance programs, and comprehensive warranty coverage.",
    },
];

export default function ApproachTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="approach" className="py-24 relative" ref={containerRef}>
            {/* Background accent */}
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto px-6 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                        Our Process
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
                        Our Approach
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A systematic methodology ensuring excellence at every stage of your LED project.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Background Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2" />

                    {/* Animated Progress Line */}
                    <motion.div
                        className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-cyan-400 to-cyan-500 -translate-x-1/2 origin-top"
                        style={{ height: lineHeight }}
                    />

                    {/* Steps */}
                    <div className="space-y-12">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Icon Circle */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                                        <div className="w-16 h-16 rounded-full bg-slate-950 border-4 border-cyan-400/30 flex items-center justify-center">
                                            <Icon className="w-7 h-7 text-cyan-400" />
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${isEven ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                                        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-400/30 transition-colors">
                                            <div className="text-cyan-400 text-sm font-medium mb-2">
                                                Step {index + 1}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-slate-400">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Spacer for the other side */}
                                    <div className="hidden md:block md:w-[calc(50%-4rem)]" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
