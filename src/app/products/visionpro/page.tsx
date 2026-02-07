import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function VisionProPage() {
    return (
        <ProductPageTemplate
            title="Clarity Vision Pro"
            series="Professional SMD Outdoor LED Series"
            tagline="Cinema-Grade Outdoor Video Walls"
            description="High-performance SMD LED panels designed for professional outdoor video walls. Cinema-grade visuals in any environment with superior color and contrast."
            heroGradient="from-indigo-500 to-blue-600"
            icon="🎬"
            specs={[
                { label: "Pixel Pitch", value: "P2.5 - P6" },
                { label: "Brightness", value: "7000+ nits" },
                { label: "Refresh Rate", value: "7680Hz" },
                { label: "Color Depth", value: "16-bit" },
                { label: "HDR", value: "HDR10+" },
                { label: "IP Rating", value: "IP65" },
            ]}
            features={[
                {
                    title: "SMD Technology",
                    description: "Surface-mount LEDs deliver superior image quality and reliability.",
                },
                {
                    title: "Wide Color Gamut",
                    description: "Extended color range for vibrant, true-to-life visuals.",
                },
                {
                    title: "High Refresh Rate",
                    description: "7680Hz ensures perfect capture on any camera system.",
                },
                {
                    title: "HDR Support",
                    description: "HDR10+ compatibility for stunning dynamic range.",
                },
                {
                    title: "16-bit Color Processing",
                    description: "Smooth gradients and precise color reproduction.",
                },
                {
                    title: "Professional Grade",
                    description: "Built to broadcast and cinema industry standards.",
                },
            ]}
            applications={[
                "Outdoor Video Walls",
                "Sports Venues & Stadiums",
                "Concert & Event Stages",
                "Theme Parks & Attractions",
                "Outdoor Cinemas",
                "Premium DOOH Networks",
            ]}
            prevProduct={{ name: "ClarityAir", slug: "clarityair" }}
        />
    );
}
