import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function ClarityAirPage() {
    return (
        <ProductPageTemplate
            title="ClarityAir"
            series="Outdoor Transparent LED Series"
            tagline="See-Through LED Panels for Architectural Media"
            description="Ultra-lightweight transparent LED panels for glass facades, showrooms, and architectural media. See-through brilliance that blends content with environment."
            heroGradient="from-sky-400 to-cyan-500"
            icon="🪟"
            specs={[
                { label: "Transparency", value: "Up to 85%" },
                { label: "Pixel Pitch", value: "P3.9 - P10" },
                { label: "Weight", value: "<12kg/m²" },
                { label: "IP Rating", value: "IP65" },
                { label: "Wind Load", value: "Resistant" },
                { label: "Install", value: "Glass Mount" },
            ]}
            features={[
                {
                    title: "Up to 85% Transparency",
                    description: "Maintain natural light and visibility while displaying content.",
                },
                {
                    title: "Ultra-Lightweight",
                    description: "Less than 12kg per square meter for easy glass mounting.",
                },
                {
                    title: "Easy Glass Installation",
                    description: "Purpose-built mounting systems for glass facades.",
                },
                {
                    title: "Wind Resistant",
                    description: "Engineered to withstand high wind loads on building exteriors.",
                },
                {
                    title: "High Brightness",
                    description: "6000+ nits for clear visibility even in bright daylight.",
                },
                {
                    title: "Minimal Visual Impact",
                    description: "Nearly invisible when off, stunning when on.",
                },
            ]}
            applications={[
                "Glass Building Facades",
                "Retail Storefronts & Windows",
                "Showrooms & Dealerships",
                "Airport & Station Glass Walls",
                "Shopping Mall Atriums",
                "Modern Architecture Projects",
            ]}
            prevProduct={{ name: "ClarityFlex", slug: "clarityflex" }}
            nextProduct={{ name: "Clarity Vision Pro", slug: "visionpro" }}
        />
    );
}
