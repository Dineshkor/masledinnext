import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function OptiViewPage() {
    return (
        <ProductPageTemplate
            title="Clarity OptiView"
            series="Economical Outdoor LED Series"
            tagline="Cost-Effective Outdoor LED for Signage & Advertising"
            description="Cost-effective outdoor LED cabinets designed for signage, hoardings, and general-purpose advertising without compromising on quality."
            heroGradient="from-green-500 to-emerald-600"
            icon="💰"
            specs={[
                { label: "Pixel Pitch", value: "P6 - P16" },
                { label: "Brightness", value: "6000+ nits" },
                { label: "IP Rating", value: "IP65" },
                { label: "Power", value: "Low Consumption" },
                { label: "Cabinet", value: "Steel/Aluminum" },
                { label: "Best Value", value: "✓" },
            ]}
            features={[
                {
                    title: "Budget-Friendly",
                    description: "Optimized design delivers excellent performance at competitive pricing.",
                },
                {
                    title: "Quick Installation",
                    description: "Standardized cabinet design enables rapid deployment and setup.",
                },
                {
                    title: "Low Power Consumption",
                    description: "Energy-efficient components reduce long-term operational costs.",
                },
                {
                    title: "Robust Build Quality",
                    description: "Industrial-grade construction ensures durability and longevity.",
                },
                {
                    title: "Easy Content Management",
                    description: "Compatible with all major content management systems.",
                },
                {
                    title: "Reliable Performance",
                    description: "Proven technology delivers consistent results in all conditions.",
                },
            ]}
            applications={[
                "Outdoor Signage & Hoardings",
                "Petrol Station Displays",
                "Retail Outdoor Advertising",
                "Small Business Signage",
                "Temple & Religious Venues",
                "Government Announcements",
            ]}
            prevProduct={{ name: "ClarityWall", slug: "claritywall" }}
            nextProduct={{ name: "ClarityTouch", slug: "claritytouch" }}
        />
    );
}
