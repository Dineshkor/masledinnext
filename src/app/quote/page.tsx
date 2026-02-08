"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowLeft,
    Send,
    User,
    Mail,
    Phone,
    Building2,
    MessageSquare,
    CheckCircle,
    AlertCircle,
    Loader2
} from "lucide-react";

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    projectType: string;
    message: string;
}

const projectTypes = [
    "Commercial Indoor Display",
    "Outdoor Billboard/DOOH",
    "Transparent LED",
    "Flexible/Curved LED",
    "Interactive Display",
    "Stadium/Venue Display",
    "Other",
];

export default function QuotePage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        // Format the message for WhatsApp
        const message = `*New Quote Request*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || "Not provided"}
*Company:* ${formData.company || "Not provided"}
*Project Type:* ${formData.projectType}

*Project Details:*
${formData.message}`;

        // WhatsApp number (remove spaces and special chars)
        const phoneNumber = "918743888577"; // +91 87438 88577

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, "_blank");

        // Show success
        setStatus("success");
        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            projectType: "",
            message: "",
        });
    };

    return (
        <main className="min-h-screen bg-slate-950 pt-8 pb-16">
            {/* Background effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-4xl mx-auto px-6">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-cyan-400/10 rounded-full border border-cyan-400/20">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                            <span className="text-slate-950 font-bold text-sm">M</span>
                        </div>
                        <span className="text-cyan-400 text-sm font-medium">Mas LED</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Request a Quote
                    </h1>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Tell us about your project and our team will get back to you within 24 hours with a customized solution.
                    </p>
                </motion.div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-10"
                >
                    {status === "success" ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-12"
                        >
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                <CheckCircle className="w-10 h-10 text-green-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-3">Thank You!</h2>
                            <p className="text-slate-400 mb-6">
                                Your quote request has been submitted successfully. Our team will contact you shortly.
                            </p>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Home
                            </Link>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Error Message */}
                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400"
                                >
                                    <AlertCircle className="w-5 h-5 shrink-0" />
                                    <span className="text-sm">{errorMessage}</span>
                                </motion.div>
                            )}

                            {/* Name & Email Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                        Full Name *
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                        Email Address *
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@company.com"
                                            className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Phone & Company Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 99407 98107"
                                            className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                                        Company Name
                                    </label>
                                    <div className="relative">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Acme Corporation"
                                            className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Project Type */}
                            <div>
                                <label htmlFor="projectType" className="block text-sm font-medium text-slate-300 mb-2">
                                    Project Type *
                                </label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all cursor-pointer appearance-none"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "right 1rem center",
                                        backgroundSize: "1.5em 1.5em",
                                    }}
                                >
                                    <option value="" disabled className="bg-slate-800">
                                        Select project type
                                    </option>
                                    {projectTypes.map((type) => (
                                        <option key={type} value={type} className="bg-slate-800">
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                    Project Details *
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell us about your project requirements, dimensions, location, timeline..."
                                        className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all resize-none"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={status === "loading"}
                                whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                                whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                                className="w-full py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Opening WhatsApp...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Send on WhatsApp
                                    </>
                                )}
                            </motion.button>

                            <p className="text-center text-slate-500 text-sm">
                                By submitting, you agree to our{" "}
                                <Link href="#" className="text-cyan-400 hover:underline">
                                    Privacy Policy
                                </Link>
                            </p>
                        </form>
                    )}
                </motion.div>
            </div>
        </main>
    );
}
