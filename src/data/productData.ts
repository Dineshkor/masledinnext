// Centralized product data for MAS LED products

export interface ProductSpec {
    label: string;
    value: string;
}

export interface ProductFeature {
    title: string;
    description: string;
}

export interface Product {
    id: string;
    name: string;
    series: string;
    category: string;
    categorySlug: string;
    description: string;
    tagline: string;
    specs: ProductSpec[];
    features: ProductFeature[];
    applications: string[];
    icon: string;
    gradient: string;
    bgColor: string;
    images: string[];
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    icon: string;
    gradient: string;
    bgColor: string;
    borderColor: string;
}

// Categories matching the user's structure
export const categories: Category[] = [
    {
        id: "indoor",
        name: "Indoor LED Display",
        slug: "indoor",
        description: "High-resolution LED displays designed for indoor environments including retail, corporate, and entertainment venues.",
        icon: "🏢",
        gradient: "from-blue-500 to-blue-700",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/30",
    },
    {
        id: "outdoor",
        name: "Outdoor LED Display",
        slug: "outdoor",
        description: "Weatherproof, high-brightness LED displays built for outdoor advertising, stadiums, and public spaces.",
        icon: "🌤️",
        gradient: "from-orange-400 to-orange-600",
        bgColor: "bg-orange-500/10",
        borderColor: "border-orange-500/30",
    },
    {
        id: "rental",
        name: "Rental LED Display",
        slug: "rental",
        description: "Portable, quick-assembly LED solutions ideal for events, concerts, exhibitions, and temporary installations.",
        icon: "🎪",
        gradient: "from-green-500 to-green-700",
        bgColor: "bg-green-500/10",
        borderColor: "border-green-500/30",
    },
    {
        id: "transparent",
        name: "Transparent LED Display",
        slug: "transparent",
        description: "See-through LED panels for glass facades, retail windows, and architectural media installations.",
        icon: "✨",
        gradient: "from-purple-500 to-purple-700",
        bgColor: "bg-purple-500/10",
        borderColor: "border-purple-500/30",
    },
    {
        id: "standee",
        name: "LED Display Standee",
        slug: "standee",
        description: "Freestanding LED poster displays for retail, exhibitions, and point-of-sale advertising.",
        icon: "📺",
        gradient: "from-yellow-500 to-amber-600",
        bgColor: "bg-yellow-500/10",
        borderColor: "border-yellow-500/30",
    },
];

// All products organized by category
export const products: Product[] = [
    // Indoor LED Display Products
    {
        id: "infinity",
        name: "MAS-Infinity Series",
        series: "Premium Fine Pitch Indoor LED",
        category: "Indoor LED Display",
        categorySlug: "indoor",
        description: "Ultra-fine pixel pitch LED displays delivering exceptional image quality for control rooms, boardrooms, and premium indoor applications.",
        tagline: "Infinite Clarity, Limitless Possibilities",
        icon: "💎",
        gradient: "from-blue-400 to-blue-600",
        bgColor: "bg-blue-500/10",
        images: ["/MasBoard.png", "/MasBoard_1.png"],
        specs: [
            { label: "Pixel Pitch", value: "P0.9 - P1.5" },
            { label: "Brightness", value: "≥800 nits" },
            { label: "Refresh Rate", value: "3840Hz" },
            { label: "Contrast", value: "10000:1" },
            { label: "Viewing Angle", value: "160°/160°" },
            { label: "Cabinet Size", value: "600×337.5mm" },
        ],
        features: [
            { title: "Ultra Fine Pitch", description: "Pixel pitch as low as P0.9 for crystal-clear visuals at close viewing distances." },
            { title: "HDR Support", description: "High Dynamic Range content support for vibrant, lifelike colors." },
            { title: "Front Serviceability", description: "Easy front maintenance design reduces installation space requirements." },
            { title: "Low Power Consumption", description: "Energy-efficient design with common cathode technology." },
            { title: "Seamless Splicing", description: "Ultra-narrow bezels for virtually seamless large-format displays." },
            { title: "Wide Color Gamut", description: "Covers 110% NTSC for accurate color reproduction." },
        ],
        applications: [
            "Control Rooms",
            "Corporate Boardrooms",
            "Broadcast Studios",
            "Command Centers",
            "Premium Retail",
            "Museums & Galleries",
        ],
    },
    {
        id: "hd-pro",
        name: "MAS-HD Pro Series",
        series: "Commercial Indoor LED Display",
        category: "Indoor LED Display",
        categorySlug: "indoor",
        description: "Professional-grade indoor LED displays optimized for commercial installations with excellent price-performance ratio.",
        tagline: "Professional Quality, Commercial Value",
        icon: "📊",
        gradient: "from-blue-500 to-cyan-600",
        bgColor: "bg-cyan-500/10",
        images: ["/MasBoard.png", "/MasBoard_1.png"],
        specs: [
            { label: "Pixel Pitch", value: "P1.5 - P2.5" },
            { label: "Brightness", value: "≥1000 nits" },
            { label: "Refresh Rate", value: "1920Hz" },
            { label: "Contrast", value: "5000:1" },
            { label: "Viewing Angle", value: "140°/140°" },
            { label: "Cabinet Size", value: "640×480mm" },
        ],
        features: [
            { title: "Commercial Grade", description: "Designed for 24/7 commercial operation with high reliability." },
            { title: "Easy Installation", description: "Modular design enables quick installation and maintenance." },
            { title: "Auto Brightness", description: "Ambient light sensor for automatic brightness adjustment." },
            { title: "Wide Compatibility", description: "Works with various input sources including HDMI, DVI, SDI." },
            { title: "Lightweight Design", description: "Slim cabinet design reduces structural load requirements." },
            { title: "Smart Control", description: "Cloud-based remote management and monitoring." },
        ],
        applications: [
            "Shopping Malls",
            "Hotel Lobbies",
            "Conference Rooms",
            "Retail Stores",
            "Airports",
            "Corporate Offices",
        ],
    },
    {
        id: "cob",
        name: "MAS-COB Series",
        series: "Chip-on-Board LED Technology",
        category: "Indoor LED Display",
        categorySlug: "indoor",
        description: "Next-generation COB LED technology offering superior protection, durability, and image quality for demanding environments.",
        tagline: "Next-Gen COB Technology",
        icon: "🔬",
        gradient: "from-violet-500 to-purple-600",
        bgColor: "bg-violet-500/10",
        images: ["/MasXCOB.png", "/MasXCOB_1.png"],
        specs: [
            { label: "Pixel Pitch", value: "P0.6 - P1.2" },
            { label: "Brightness", value: "≥600 nits" },
            { label: "Refresh Rate", value: "7680Hz" },
            { label: "Contrast", value: "20000:1" },
            { label: "Protection", value: "IP30 Front" },
            { label: "MTBF", value: ">100,000 hrs" },
        ],
        features: [
            { title: "COB Technology", description: "Chip-on-Board packaging for enhanced durability and reliability." },
            { title: "Anti-Collision", description: "Robust surface withstands impacts without LED damage." },
            { title: "No Moiré Effect", description: "Optical design eliminates moiré patterns in camera capture." },
            { title: "Wide Viewing Angle", description: "180° viewing angle with consistent color at all angles." },
            { title: "Touch Resistant", description: "Protected surface suitable for interactive applications." },
            { title: "Extended Lifespan", description: "Superior heat dissipation extends LED lifetime." },
        ],
        applications: [
            "Broadcast Studios",
            "Virtual Production",
            "Control Centers",
            "Premium Conference Rooms",
            "Medical Imaging",
            "Simulation Centers",
        ],
    },
    {
        id: "bendex",
        name: "MAS-Bendex Series",
        series: "Flexible Curved Indoor LED",
        category: "Indoor LED Display",
        categorySlug: "indoor",
        description: "Flexible LED modules enabling creative curved and irregular shaped displays for unique architectural installations.",
        tagline: "Bend the Rules of Display",
        icon: "🌀",
        gradient: "from-pink-500 to-rose-600",
        bgColor: "bg-pink-500/10",
        images: ["/MasFlex.png", "/MasFlex-1.png"],
        specs: [
            { label: "Pixel Pitch", value: "P1.8 - P3.0" },
            { label: "Brightness", value: "≥1200 nits" },
            { label: "Bend Radius", value: "≥500mm" },
            { label: "Weight", value: "<8kg/m²" },
            { label: "Flexibility", value: "Concave/Convex" },
            { label: "Cabinet", value: "Soft Module" },
        ],
        features: [
            { title: "Flexible Modules", description: "Soft PCB design allows bending for curved installations." },
            { title: "Custom Shapes", description: "Create cylinders, waves, and irregular display shapes." },
            { title: "Lightweight", description: "Ultra-light design for easy installation on various surfaces." },
            { title: "Magnetic Assembly", description: "Quick magnetic mounting system for fast setup." },
            { title: "Uniform Curvature", description: "Consistent image quality across curved surfaces." },
            { title: "Indoor Rated", description: "Designed for interior architectural applications." },
        ],
        applications: [
            "Curved Video Walls",
            "Cylindrical Displays",
            "Exhibition Booths",
            "Retail Installations",
            "Architectural Features",
            "Stage Design",
        ],
    },

    // Outdoor LED Display Products
    {
        id: "ox",
        name: "MAS-OX Series",
        series: "High Brightness Outdoor LED",
        category: "Outdoor LED Display",
        categorySlug: "outdoor",
        description: "High-brightness outdoor LED displays designed for maximum visibility in direct sunlight, ideal for billboards and large-format advertising.",
        tagline: "Outdoor Excellence, Maximum Impact",
        icon: "☀️",
        gradient: "from-orange-500 to-red-600",
        bgColor: "bg-orange-500/10",
        images: ["/MasWall.png", "/MasWall_1.png"],
        specs: [
            { label: "Pixel Pitch", value: "P4 - P10" },
            { label: "Brightness", value: "≥8000 nits" },
            { label: "Refresh Rate", value: "3840Hz" },
            { label: "IP Rating", value: "IP65/IP54" },
            { label: "Temperature", value: "-40°C to 50°C" },
            { label: "Viewing Distance", value: "5m - 100m" },
        ],
        features: [
            { title: "High Brightness", description: "8000+ nits ensures visibility even in direct sunlight." },
            { title: "Weatherproof", description: "IP65 rated front and IP54 rear for all-weather operation." },
            { title: "Wide Temperature", description: "Operates reliably from -40°C to 50°C." },
            { title: "Energy Saving", description: "Smart power management reduces electricity costs." },
            { title: "Easy Maintenance", description: "Front and rear accessible module design." },
            { title: "Anti-UV", description: "UV-resistant materials prevent color fading." },
        ],
        applications: [
            "Highway Billboards",
            "Building Facades",
            "Stadium Displays",
            "Outdoor Advertising",
            "Transportation Hubs",
            "Public Squares",
        ],
    },
    {
        id: "storm",
        name: "MAS-Storm Series",
        series: "Rugged All-Weather Outdoor LED",
        category: "Outdoor LED Display",
        categorySlug: "outdoor",
        description: "Heavy-duty outdoor LED displays engineered for extreme weather conditions and harsh environments.",
        tagline: "Built to Weather Any Storm",
        icon: "⛈️",
        gradient: "from-slate-600 to-slate-800",
        bgColor: "bg-slate-500/10",
        images: ["/MasVision.png", "/MasVision_1.png"],
        specs: [
            { label: "Pixel Pitch", value: "P3.9 - P8" },
            { label: "Brightness", value: "≥6500 nits" },
            { label: "IP Rating", value: "IP68/IP65" },
            { label: "Wind Load", value: "120 km/h" },
            { label: "Humidity", value: "10%-95% RH" },
            { label: "Salt Spray", value: "1000hrs" },
        ],
        features: [
            { title: "IP68 Protection", description: "Fully waterproof and dustproof for extreme conditions." },
            { title: "Corrosion Resistant", description: "Salt spray tested for coastal installations." },
            { title: "High Wind Resistance", description: "Engineered to withstand winds up to 120 km/h." },
            { title: "Lightning Protection", description: "Built-in surge protection against lightning strikes." },
            { title: "Smart Cooling", description: "Intelligent thermal management system." },
            { title: "Remote Diagnostics", description: "Real-time monitoring and fault detection." },
        ],
        applications: [
            "Coastal Installations",
            "Industrial Areas",
            "Marine Environments",
            "Extreme Climates",
            "Sports Stadiums",
            "Mining Sites",
        ],
    },
    {
        id: "flexedge",
        name: "MAS-FlexEdge Series",
        series: "Slim Outdoor LED Display",
        category: "Outdoor LED Display",
        categorySlug: "outdoor",
        description: "Slim-profile outdoor LED displays combining elegant design with robust outdoor performance for modern architectural integration.",
        tagline: "Elegant Outdoor Solutions",
        icon: "🏙️",
        gradient: "from-teal-500 to-emerald-600",
        bgColor: "bg-teal-500/10",
        images: ["/MasOptiView.png", "/MasOptiView_1.png"],
        specs: [
            { label: "Pixel Pitch", value: "P2.5 - P6" },
            { label: "Brightness", value: "≥5500 nits" },
            { label: "Cabinet Depth", value: "75mm" },
            { label: "IP Rating", value: "IP65/IP54" },
            { label: "Weight", value: "<28kg/panel" },
            { label: "Power", value: "<350W/m²" },
        ],
        features: [
            { title: "Ultra Slim", description: "Only 75mm depth for sleek architectural integration." },
            { title: "Lightweight", description: "Reduced weight minimizes structural requirements." },
            { title: "Quick Lock", description: "Tool-free panel installation and removal." },
            { title: "Energy Efficient", description: "Low power consumption for reduced operating costs." },
            { title: "Quiet Operation", description: "Fanless cooling design for noise-sensitive areas." },
            { title: "Wide Format", description: "Available in various aspect ratios." },
        ],
        applications: [
            "Building Wraps",
            "Retail Storefronts",
            "Transit Shelters",
            "Urban Furniture",
            "Parking Structures",
            "Shopping Centers",
        ],
    },

    // Rental LED Display Products
    {
        id: "rx-indoor",
        name: "MAS-RX Series Indoor",
        series: "Quick-Setup Rental LED",
        category: "Rental LED Display",
        categorySlug: "rental",
        description: "Fast-deploying indoor rental LED displays designed for events, concerts, and temporary installations with minimal setup time.",
        tagline: "Setup Fast, Impress Faster",
        icon: "🎭",
        gradient: "from-green-500 to-emerald-600",
        bgColor: "bg-green-500/10",
        images: ["/MasTouch.png", "/MasTouch_1.png"],
        specs: [
            { label: "Pixel Pitch", value: "P2.6 - P3.9" },
            { label: "Brightness", value: "≥1200 nits" },
            { label: "Cabinet Size", value: "500×500mm" },
            { label: "Weight", value: "7.5kg/panel" },
            { label: "Setup Time", value: "<30 sec/panel" },
            { label: "Curve", value: "±10°" },
        ],
        features: [
            { title: "Quick Lock System", description: "Patent quick-lock mechanism for 30-second panel connection." },
            { title: "Lightweight Magnesium", description: "Die-cast magnesium alloy cabinet for easy handling." },
            { title: "Curve Capable", description: "Supports concave and convex curved configurations." },
            { title: "Hot Swappable", description: "Replace modules on-the-fly without powering down." },
            { title: "Hanging & Stacking", description: "Versatile rigging options for any venue." },
            { title: "Flight Case Ready", description: "Designed for standard flight case packaging." },
        ],
        applications: [
            "Concerts & Tours",
            "Corporate Events",
            "Trade Shows",
            "Award Ceremonies",
            "Fashion Shows",
            "Live Productions",
        ],
    },
    {
        id: "eventsmax",
        name: "MAS-EventsMax Series",
        series: "Outdoor Rental LED",
        category: "Rental LED Display",
        categorySlug: "rental",
        description: "Rugged outdoor rental LED displays built for festivals, sports events, and large-scale outdoor gatherings.",
        tagline: "Maximum Impact at Any Event",
        icon: "🎪",
        gradient: "from-lime-500 to-green-600",
        bgColor: "bg-lime-500/10",
        images: ["/MasTouch.png", "/MasTouch_1.png"],
        specs: [
            { label: "Pixel Pitch", value: "P3.9 - P5.9" },
            { label: "Brightness", value: "≥5500 nits" },
            { label: "IP Rating", value: "IP65" },
            { label: "Cabinet Size", value: "500×1000mm" },
            { label: "Weight", value: "14kg/panel" },
            { label: "Wind Load", value: "80 km/h" },
        ],
        features: [
            { title: "Outdoor Ready", description: "IP65 rated for rain, dust, and outdoor conditions." },
            { title: "High Brightness", description: "5500+ nits for daylight visibility." },
            { title: "Rapid Assembly", description: "Ground support and hanging systems included." },
            { title: "Transport Optimized", description: "Dolly and flight case solutions available." },
            { title: "Power Efficient", description: "Dual power supply with auto-switching." },
            { title: "Easy Maintenance", description: "Tool-free module replacement on-site." },
        ],
        applications: [
            "Music Festivals",
            "Sports Events",
            "Outdoor Concerts",
            "Public Celebrations",
            "Political Rallies",
            "Outdoor Cinema",
        ],
    },

    // Transparent LED Display Products
    {
        id: "transglow",
        name: "MAS-TransGlow Series",
        series: "See-Through LED Display",
        category: "Transparent LED Display",
        categorySlug: "transparent",
        description: "High-transparency LED displays that blend digital content with physical environments for stunning glass facade applications.",
        tagline: "See Through, Stand Out",
        icon: "🪟",
        gradient: "from-purple-400 to-violet-600",
        bgColor: "bg-purple-500/10",
        images: ["/MasAir.png", "/MasAir_1.png"],
        specs: [
            { label: "Pixel Pitch", value: "P3.9 - P10" },
            { label: "Transparency", value: "≥85%" },
            { label: "Brightness", value: "≥5500 nits" },
            { label: "Weight", value: "<12kg/m²" },
            { label: "IP Rating", value: "IP43" },
            { label: "Thickness", value: "<15mm" },
        ],
        features: [
            { title: "High Transparency", description: "Up to 85% transparency maintains natural lighting." },
            { title: "Ultra Lightweight", description: "Less than 12kg/m² reduces structural load." },
            { title: "Invisible from Inside", description: "LED strips are nearly invisible from interior view." },
            { title: "Easy Retrofit", description: "Installs on existing glass without structural changes." },
            { title: "Energy Saving", description: "Natural daylight reduces lighting costs." },
            { title: "Creative Freedom", description: "Custom sizes and shapes available." },
        ],
        applications: [
            "Glass Facades",
            "Retail Windows",
            "Shopping Malls",
            "Auto Showrooms",
            "Airports & Stations",
            "Office Buildings",
        ],
    },

    // LED Display Standee Products
    {
        id: "standpro",
        name: "MAS-StandPro Series",
        series: "Freestanding LED Poster",
        category: "LED Display Standee",
        categorySlug: "standee",
        description: "Elegant freestanding LED poster displays for retail, exhibitions, and point-of-sale advertising with plug-and-play simplicity.",
        tagline: "Stand Alone, Stand Out",
        icon: "🎯",
        gradient: "from-amber-400 to-orange-500",
        bgColor: "bg-amber-500/10",
        images: ["/MasOptiView.png", "/MasOptiView_1.png"],
        specs: [
            { label: "Pixel Pitch", value: "P1.8 - P2.5" },
            { label: "Screen Sizes", value: "43\" / 55\" / 65\"" },
            { label: "Brightness", value: "≥1000 nits" },
            { label: "Thickness", value: "<35mm" },
            { label: "Storage", value: "8GB Built-in" },
            { label: "Connectivity", value: "WiFi/LAN/USB" },
        ],
        features: [
            { title: "Plug & Play", description: "Simple setup with built-in media player." },
            { title: "Ultra Slim", description: "Sleek design less than 35mm thick." },
            { title: "Cloud Managed", description: "Remote content management via web portal." },
            { title: "Movable Design", description: "Casters included for easy repositioning." },
            { title: "Anti-Glare Screen", description: "Clear visibility from any angle." },
            { title: "Multi-Format", description: "Supports images, video, and web content." },
        ],
        applications: [
            "Retail Stores",
            "Exhibition Booths",
            "Hotel Lobbies",
            "Restaurant Menus",
            "Real Estate Displays",
            "Showrooms",
        ],
    },
];

// Helper functions
export function getProductsByCategory(categorySlug: string): Product[] {
    return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductById(productId: string): Product | undefined {
    return products.find((p) => p.id === productId);
}

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find((c) => c.slug === slug);
}

export function getProductNavigation(product: Product): {
    prev: Product | undefined;
    next: Product | undefined;
} {
    const categoryProducts = getProductsByCategory(product.categorySlug);
    const currentIndex = categoryProducts.findIndex((p) => p.id === product.id);
    return {
        prev: currentIndex > 0 ? categoryProducts[currentIndex - 1] : undefined,
        next: currentIndex < categoryProducts.length - 1 ? categoryProducts[currentIndex + 1] : undefined,
    };
}
