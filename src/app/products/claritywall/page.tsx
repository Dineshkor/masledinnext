import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function ClarityWallPage() {
    return (
        <ProductPageTemplate
            title="ClarityWall"
            series="DOOH & Outdoor Billboards LED Series"
            tagline="Weatherproof LED Solutions for Large-Format Outdoor Advertising"
            description="Weatherproof LED solutions for billboards, stadiums, and large-format outdoor advertising. Built to withstand extreme conditions while delivering stunning visuals."
            heroGradient="from-orange-500 to-red-600"
            icon="🏟️"
            specs={[
                { label: "Pixel Pitch", value: "P4 - P10" },
                { label: "Brightness", value: "8000+ nits" },
                { label: "IP Rating", value: "IP65/IP54" },
                { label: "Refresh Rate", value: "3840Hz" },
                { label: "Operating Temp", value: "-40°C to 50°C" },
                { label: "Viewing Distance", value: "5m - 100m+" },
            ]}
            features={[
                {
                    title: "IP65 Weatherproof",
                    description: "Full protection against dust, rain, and harsh weather conditions for 24/7 operation.",
                },
                {
                    title: "Ultra High Brightness",
                    description: "8000+ nits ensures perfect visibility even in direct sunlight.",
                },
                {
                    title: "Front/Rear Maintenance",
                    description: "Flexible maintenance access options for various installation scenarios.",
                },
                {
                    title: "Anti-UV Coating",
                    description: "Special coating protects LEDs from UV degradation and color fading.",
                },
                {
                    title: "Wide Temperature Range",
                    description: "Operates reliably from -40°C to 50°C for any climate.",
                },
                {
                    title: "Smart Brightness Control",
                    description: "Automatic brightness adjustment based on ambient light conditions.",
                },
            ]}
            applications={[
                "Highway & Roadside Billboards",
                "Stadium & Arena Displays",
                "Building Facades & Landmarks",
                "Transportation Hubs",
                "Digital Out-of-Home Advertising",
                "Large Public Venues",
            ]}
            prevProduct={{ name: "Clarity BoardView", slug: "boardview" }}
            nextProduct={{ name: "Clarity OptiView", slug: "optiview" }}
        />
    );
}
