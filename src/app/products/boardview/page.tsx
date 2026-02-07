import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function BoardViewPage() {
    return (
        <ProductPageTemplate
            title="Clarity BoardView"
            series="Commercial GOB LED Series"
            tagline="Durable LED Panels for High-Traffic Commercial Spaces"
            description="Durable GOB (Glue-On-Board) LED panels ideal for retail, corporate, and high-traffic venues. Enhanced protection with advanced encapsulation technology."
            heroGradient="from-cyan-500 to-blue-600"
            icon="🏢"
            specs={[
                { label: "Pixel Pitch", value: "P1.2 - P2.5" },
                { label: "Brightness", value: "800 nits" },
                { label: "Refresh Rate", value: "3840Hz" },
                { label: "Protection", value: "GOB Coated" },
                { label: "Viewing Angle", value: "160°/160°" },
                { label: "Lifespan", value: "100,000 hrs" },
            ]}
            features={[
                {
                    title: "GOB Protection Technology",
                    description: "Glue-On-Board encapsulation provides superior dust, moisture, and impact protection.",
                },
                {
                    title: "Anti-Collision Design",
                    description: "Robust surface can withstand accidental impacts in busy commercial environments.",
                },
                {
                    title: "Moisture Resistant",
                    description: "IP30 front protection suitable for various indoor environments including humid areas.",
                },
                {
                    title: "Easy Maintenance",
                    description: "Modular design allows for quick panel replacement and minimal downtime.",
                },
                {
                    title: "Seamless Splicing",
                    description: "Precision manufacturing ensures virtually invisible seams between panels.",
                },
                {
                    title: "Energy Efficient",
                    description: "Low power consumption reduces operational costs for large installations.",
                },
            ]}
            applications={[
                "Retail Stores & Shopping Malls",
                "Corporate Lobbies & Reception",
                "Exhibition Halls & Trade Shows",
                "Hotels & Hospitality",
                "Banks & Financial Institutions",
                "Airport Terminals",
            ]}
            prevProduct={{ name: "ClarityX", slug: "clarityx" }}
            nextProduct={{ name: "ClarityWall", slug: "claritywall" }}
        />
    );
}
