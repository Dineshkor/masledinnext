import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function ClarityFlexPage() {
    return (
        <ProductPageTemplate
            title="ClarityFlex"
            series="Flexible / Customised LED Series"
            tagline="Bendable LED Modules for Creative Installations"
            description="Creative bendable LED modules for curved walls, artistic installations, and stage backdrops. Unleash your creative vision with flexible display solutions."
            heroGradient="from-amber-500 to-yellow-500"
            icon="🎭"
            specs={[
                { label: "Pixel Pitch", value: "P1.8 - P4" },
                { label: "Bend Radius", value: "≥500mm" },
                { label: "Module Weight", value: "Ultra-Light" },
                { label: "Setup", value: "Magnetic" },
                { label: "Shapes", value: "Custom" },
                { label: "Installation", value: "Modular" },
            ]}
            features={[
                {
                    title: "Bendable Modules",
                    description: "Flexible panels can curve to fit any architectural design.",
                },
                {
                    title: "Custom Shapes",
                    description: "Create circles, waves, spheres, and any imaginable form.",
                },
                {
                    title: "Lightweight Design",
                    description: "Ultra-light modules enable installation on any surface.",
                },
                {
                    title: "Magnetic Assembly",
                    description: "Quick magnetic installation for fast setup and changes.",
                },
                {
                    title: "Seamless Curves",
                    description: "Smooth transitions between panels even on curved surfaces.",
                },
                {
                    title: "Creative Freedom",
                    description: "No limits to your display design imagination.",
                },
            ]}
            applications={[
                "Stage Backdrops & Concerts",
                "Curved Architectural Walls",
                "Artistic Installations",
                "Retail Display Design",
                "Museum & Gallery Exhibits",
                "Immersive Experiences",
            ]}
            prevProduct={{ name: "ClarityTouch", slug: "claritytouch" }}
            nextProduct={{ name: "ClarityAir", slug: "clarityair" }}
        />
    );
}
