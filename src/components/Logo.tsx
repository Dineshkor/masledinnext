import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function Logo({ size = "md" }: LogoProps) {
  const height = size === "sm" ? 32 : size === "lg" ? 56 : 40;
  return (
    <Link href="/" aria-label="MAS LED home" className="inline-flex items-center bg-white p-1.5">
      <Image src="/logo.jpg" alt="MAS LED Screens" width={Math.round(height * 2.45)} height={height} className="w-auto object-contain" style={{ height }} />
    </Link>
  );
}
