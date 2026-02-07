import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function ClarityXPage() {
    return (
        <ProductPageTemplate
            title="ClarityX"
            series="Professional Flip Chip COB LED Series"
            tagline="Ultra-Premium Indoor LED for Broadcast & Control Rooms"
            description="High-resolution COB LED displays featuring advanced Flip Chip technology for studios, control rooms, and premium indoor applications. Superior image quality with seamless integration."
            heroGradient="from-violet-500 to-purple-600"
            icon="💎"
            specs={[
                { label: "Pixel Pitch", value: "P0.625 - P1.87" },
                { label: "Brightness", value: "≥1200 nits" },
                { label: "Refresh Rate", value: "7680Hz" },
                { label: "Contrast", value: "15000:1" },
                { label: "Viewing Angle", value: "170°/170°" },
                { label: "Color Gamut", value: "DCI-P3" },
            ]}
            features={[
                {
                    title: "Flip Chip COB Technology",
                    description: "No wire bonding for robust protection, excellent stability, and longer lifespan.",
                },
                {
                    title: "Extreme Fine Pitch Range",
                    description: "Available from P0.625 up to P1.87 for razor-sharp visuals at any distance.",
                },
                {
                    title: "Common Cathode Design",
                    description: "Advanced circuit design that significantly reduces power consumption and improves efficiency.",
                },
                {
                    title: "Ultra High Refresh Rate",
                    description: "7680Hz refresh rate ensures flicker-free, smooth performance for broadcast content.",
                },
                {
                    title: "Standard 16:9 Ratio",
                    description: "Enables seamless 2K, 4K, and 8K video wall construction without scaling issues.",
                },
                {
                    title: "Wide Color Gamut Support",
                    description: "Supports DCI-P3 color gamut for accurate and lifelike color reproduction.",
                },
            ]}
            applications={[
                "Control Rooms & Command Centers",
                "Corporate Boardrooms & Lobbies",
                "Broadcast Studios & Newsrooms",
                "Virtual Production & xR Stages",
                "High-Resolution Public Displays",
                "Medical Imaging Centers",
            ]}
            nextProduct={{ name: "Clarity BoardView", slug: "boardview" }}
        />
    );
}
