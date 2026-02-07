import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function ClarityTouchPage() {
    return (
        <ProductPageTemplate
            title="ClarityTouch"
            series="Interactive All-in-One Series"
            tagline="Smart Touch LED Panels for Modern Collaboration"
            description="All-in-one LED touch panels for meeting rooms, classrooms, and collaboration spaces. Seamless interactivity for modern workplaces and educational institutions."
            heroGradient="from-pink-500 to-rose-600"
            icon="👆"
            specs={[
                { label: "Screen Size", value: "65\" - 110\"" },
                { label: "Resolution", value: "4K UHD" },
                { label: "Touch Points", value: "40 Points" },
                { label: "Response", value: "<8ms" },
                { label: "OS", value: "Android/Win" },
                { label: "Connectivity", value: "Wi-Fi/LAN" },
            ]}
            features={[
                {
                    title: "Multi-Touch Support",
                    description: "40-point touch capability enables multiple users to interact simultaneously.",
                },
                {
                    title: "Built-in Android/Windows",
                    description: "Integrated computing power eliminates the need for external devices.",
                },
                {
                    title: "4K Resolution",
                    description: "Ultra-high definition display for crisp text and detailed visuals.",
                },
                {
                    title: "Whiteboard Mode",
                    description: "Built-in digital whiteboard with annotation and collaboration tools.",
                },
                {
                    title: "Wireless Casting",
                    description: "Screen mirroring from any device without cables.",
                },
                {
                    title: "Video Conferencing Ready",
                    description: "Compatible with Zoom, Teams, and other major platforms.",
                },
            ]}
            applications={[
                "Corporate Meeting Rooms",
                "Educational Classrooms",
                "Training Centers",
                "Collaboration Spaces",
                "Interactive Kiosks",
                "Command & Control Centers",
            ]}
            prevProduct={{ name: "Clarity OptiView", slug: "optiview" }}
            nextProduct={{ name: "ClarityFlex", slug: "clarityflex" }}
        />
    );
}
