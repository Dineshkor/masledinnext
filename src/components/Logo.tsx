"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    size?: "sm" | "md" | "lg";
    showText?: boolean;
}

export default function Logo({ size = "md", showText = true }: LogoProps) {
    const sizeClasses = {
        sm: "h-8",
        md: "h-10",
        lg: "h-12",
    };

    return (
        <Link href="/" className="flex items-center gap-2 group">
            <Image
                src="/logo.png"
                alt="Mas LED Logo"
                width={size === "sm" ? 100 : size === "md" ? 120 : 140}
                height={size === "sm" ? 32 : size === "md" ? 40 : 48}
                className={`${sizeClasses[size]} w-auto object-contain`}
                priority
            />
            {showText && (
                <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors sr-only">
                    Mas LED
                </span>
            )}
        </Link>
    );
}

/* 
 * ===========================================
 * REVERT INSTRUCTIONS - If you don't like this
 * ===========================================
 * 
 * Replace the content between the <Link> tags with:
 * 
 * <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
 *   <span className="text-slate-950 font-bold text-lg">M</span>
 * </div>
 * <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
 *   Mas LED
 * </span>
 * 
 * ===========================================
 */
