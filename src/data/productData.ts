// Technical figures and product names follow the client catalogue (pages 4–27).
export interface ProductSpec { label: string; value: string }
export interface ProductFeature { title: string; description: string }
export interface Product {
  id: string; name: string; series: string; category: string; categorySlug: string;
  description: string; tagline: string; specs: ProductSpec[]; features: ProductFeature[];
  applications: string[]; icon: string; gradient: string; bgColor: string; images: string[];
}
export interface Category {
  id: string; name: string; slug: string; description: string; icon: string;
  gradient: string; bgColor: string; borderColor: string;
}

export const categories: Category[] = [
  { id: "indoor", name: "Indoor LED Displays", slug: "indoor", description: "Wall-mounted, fine-pitch and flexible LED systems for interior spaces.", icon: "▦", gradient: "from-sky-400 to-blue-600", bgColor: "bg-sky-500/10", borderColor: "border-sky-500/30" },
  { id: "outdoor", name: "Outdoor LED Displays", slug: "outdoor", description: "Weather-ready displays for buildings, billboards and public spaces.", icon: "◫", gradient: "from-blue-500 to-indigo-600", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30" },
  { id: "rental", name: "Rental LED Displays", slug: "rental", description: "Fast-assembly displays for indoor and outdoor events.", icon: "▤", gradient: "from-cyan-400 to-sky-600", bgColor: "bg-cyan-500/10", borderColor: "border-cyan-500/30" },
  { id: "transparent", name: "Transparent LED Displays", slug: "transparent", description: "See-through LED installations for glass and retail environments.", icon: "◇", gradient: "from-sky-400 to-teal-500", bgColor: "bg-teal-500/10", borderColor: "border-teal-500/30" },
  { id: "standee", name: "LED Standee Displays", slug: "standee", description: "Freestanding LED posters for campaigns and customer-facing spaces.", icon: "▯", gradient: "from-blue-400 to-cyan-500", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30" },
  { id: "digital-signage", name: "Digital Signage Kiosks", slug: "digital-signage", description: "Networked Full HD LCD kiosks for information and promotions.", icon: "▣", gradient: "from-teal-400 to-blue-600", bgColor: "bg-teal-500/10", borderColor: "border-teal-500/30" },
];

type Seed = Omit<Product, "category" | "gradient" | "bgColor" | "specs" | "features" | "images"> & {
  specs: Record<string, string>; features: Array<[string, string]>; images: [string, string];
};
function makeProduct(seed: Seed): Product {
  const category = categories.find((item) => item.slug === seed.categorySlug)!;
  return {
    ...seed, category: category.name, gradient: category.gradient, bgColor: category.bgColor,
    specs: Object.entries(seed.specs).map(([label, value]) => ({ label, value })),
    features: seed.features.map(([title, description]) => ({ title, description })),
  };
}

export const products: Product[] = [
  makeProduct({
    id: "bendex", name: "MAS-BendX Series", series: "Flexible indoor LED", categorySlug: "indoor", icon: "◠",
    description: "Soft LED modules for concave, convex, wave and cylindrical installations in premium interior spaces.", tagline: "Shape the space around the screen.", images: ["/catalogue/bendx-main.jpg", "/catalogue/bendx-detail.jpg"],
    specs: { "Pixel Pitch": "P1.53 / P1.86 / P2.5 / P3.07", Brightness: ">600–1,000 nits (by pitch)", "Cabinet Size": "640 × 480 mm", "Cabinet Weight": "Approx. 5.5 kg", Protection: "IP32", "Refresh Rate": "Up to 3,840–4,200 Hz (by pitch)" },
    features: [["Shape-friendly modules", "Soft modules support curves and custom forms."], ["Front access", "Magnetic front service simplifies maintenance."], ["Indoor clarity", "Fine pitch options suit close-viewing installations."]],
    applications: ["Retail interiors", "Galleries", "Corporate experience centres", "Hotels and lobbies", "Trade shows"],
  }),
  makeProduct({
    id: "hd-pro", name: "MAS-HD Pro Series", series: "Indoor LED display", categorySlug: "indoor", icon: "▦",
    description: "Slim modular LED panels for boardrooms, retail environments and indoor signage.", tagline: "Precision for every interior.", images: ["/catalogue/hd-pro-main.jpg", "/catalogue/hd-pro-detail.jpg"],
    specs: { "Pixel Pitch": "P1.25 / P1.53 / P1.86 / P2.5", Brightness: ">600–800 nits (by pitch)", "Cabinet Size": "640 × 480 mm", "Cabinet Weight": "Approx. 5.5 kg", Protection: "IP32", Service: "Front access" },
    features: [["Fine pixel pitch", "Four choices for different viewing distances."], ["Slim panels", "Lightweight cabinets ease interior mounting."], ["Seamless assemblies", "Modular construction supports larger canvases."]],
    applications: ["Boardrooms", "Retail stores", "Showrooms", "Control rooms", "Education"],
  }),
  makeProduct({
    id: "infinity", name: "MAS-Infinity Series", series: "Indoor wall-mount LED", categorySlug: "indoor", icon: "▥",
    description: "Custom-sized indoor LED walls for fixed installations and vivid large-format communication.", tagline: "A wall without limits.", images: ["/catalogue/infinity-main.jpg", "/catalogue/infinity-detail.jpg"],
    specs: { "Pixel Pitch": "P2.5 / P3.07 / P4", Brightness: ">800–1,200 nits (by pitch)", Installation: "Fixed wall mount", "Refresh Rate": "Up to 3,840 Hz", Protection: "IP32", Service: "Front access" },
    features: [["Custom dimensions", "Built to suit the wall and viewing distance."], ["Front service", "Access modules without rear clearance."], ["Seamless display", "Modules join into one continuous visual surface."]],
    applications: ["Corporate offices", "Shopping malls", "Hotels", "Airports", "Studios"],
  }),
  makeProduct({
    id: "ox", name: "MAS-OX Series", series: "Outdoor LED display", categorySlug: "outdoor", icon: "▨",
    description: "Modular high-visibility LED cabinets for billboards, façades, stadiums and public information.", tagline: "Make the city your canvas.", images: ["/catalogue/ox-main.jpg", "/catalogue/ox-detail.jpg"],
    specs: { "Pixel Pitch": "P4 / P6 / P8 / P10", Brightness: ">4,500–6,000 nits (by pitch)", "IP Rating": "IP65", "Cabinet Size": "960 × 960 mm", "Refresh Rate": "3,840 Hz", Service: "Rear access" },
    features: [["Daylight visibility", "Brightness options are matched to viewing distance."], ["Outdoor protection", "IP65-rated cabinets suit exposed installations."], ["Modular size", "Cabinets combine for project-scale screens."]],
    applications: ["Billboards", "Commercial façades", "Stadiums", "Highways", "Public squares"],
  }),
  makeProduct({
    id: "storm", name: "MAS-STROM Series", series: "Outdoor LED display", categorySlug: "outdoor", icon: "▨",
    description: "Rugged magnesium die-cast outdoor cabinets for large, long-running installations.", tagline: "Engineered for the elements.", images: ["/catalogue/strom-main.jpg", "/catalogue/strom-detail.jpg"],
    specs: { "Pixel Pitch": "P2.5 / P3.07 / P4 / P5 / P6.67", Brightness: ">4,500–6,000 nits (by pitch)", "IP Rating": "IP65", "Cabinet Size": "960 × 960 mm", "Refresh Rate": "3,840 Hz", "Cabinet Weight": "Approx. 25 kg" },
    features: [["Rugged cabinet", "Die-cast structure for permanent outdoor screens."], ["IP65 protection", "Built for rain and dust exposure."], ["Multiple pitches", "Select the pitch to suit viewing distance."]],
    applications: ["Highways", "Stadiums", "Building façades", "Transit hubs", "Outdoor events"],
  }),
  makeProduct({
    id: "flexedge", name: "MAS-FlexEdge Series", series: "Curved outdoor LED", categorySlug: "outdoor", icon: "⌁",
    description: "Outdoor LED cabinets that join around corners and curves for architectural display surfaces.", tagline: "Go beyond a flat screen.", images: ["/catalogue/flexedge-main.jpg", "/catalogue/flexedge-detail.jpg"],
    specs: { "Pixel Pitch": "P2.5 / P3.07 / P4 / P6", Brightness: ">4,500–5,500 nits (by pitch)", "IP Rating": "IP65", "Cabinet Size": "960 × 960 mm", Curve: "Approx. −10° to +15° per panel", "Refresh Rate": "3,840 Hz" },
    features: [["Curved joining", "Cabinets follow corners and shaped surfaces."], ["Outdoor ready", "IP65-rated display construction."], ["Custom radius", "Configurations can suit the architecture."]],
    applications: ["Building façades", "Mall exteriors", "Stadium wraps", "Brand walls", "Architectural installations"],
  }),
  makeProduct({
    id: "rx-indoor", name: "MAS-RX Series Indoor", series: "Indoor rental LED", categorySlug: "rental", icon: "▤",
    description: "Quick-lock LED cabinets for indoor stages, exhibitions and temporary large-format screens.", tagline: "Build the moment faster.", images: ["/catalogue/rx-indoor-main.jpg", "/catalogue/rx-indoor-detail.jpg"],
    specs: { "Pixel Pitch": "P2.976 / P3.91", Brightness: ">800 / >1,000 nits (by pitch)", "Cabinet Size": "500 × 500 mm", "Cabinet Weight": "Approx. 6.8 kg", "IP Rating": "IP32", "Refresh Rate": "3,840 Hz" },
    features: [["Quick-lock assembly", "Cabinets join for fast event setup."], ["Portable cabinet", "The 500 mm format suits transport and reuse."], ["Front or rear service", "Flexible access for temporary installations."]],
    applications: ["Stage backdrops", "Concerts", "Exhibitions", "Weddings", "TV studios"],
  }),
  makeProduct({
    id: "eventsmax", name: "MAS-Eventmax Series", series: "Outdoor event LED", categorySlug: "rental", icon: "▤",
    description: "Outdoor-ready modular panels for events, public campaigns and temporary billboards.", tagline: "Scale the spectacle.", images: ["/catalogue/eventmax-main.jpg", "/catalogue/eventmax-detail.jpg"],
    specs: { "Pixel Pitch": "P3.84 / P4.8 / P6", Brightness: ">4,500–5,500 nits (by pitch)", "Cabinet Size": "576 × 576 mm", "Cabinet Weight": "Approx. 9.3–9.5 kg", "IP Rating": "IP65", "Refresh Rate": "Up to 3,840 Hz" },
    features: [["Outdoor events", "High-brightness options for open-air venues."], ["Curve locking", "Panels can form event-friendly shapes."], ["Aluminium cabinet", "Portable construction for repeated setup."]],
    applications: ["Concerts", "Outdoor events", "Weddings", "Brand activations", "Temporary billboards"],
  }),
  makeProduct({
    id: "rx-outdoor", name: "MAS-RX Series Outdoor", series: "Outdoor rental LED", categorySlug: "rental", icon: "▤",
    description: "Compact outdoor rental panels for concerts, festivals and fast-paced event production.", tagline: "Ready when the stage is.", images: ["/catalogue/rx-outdoor-main.jpg", "/catalogue/rx-outdoor-detail.jpg"],
    specs: { "Pixel Pitch": "P2.976 / P3.91 / P4.81", Brightness: ">3,500–4,500 nits (by pitch)", "Cabinet Size": "500 × 500 mm", "Cabinet Weight": "Approx. 6.8 kg", "IP Rating": "IP65", "Refresh Rate": "3,840 Hz" },
    features: [["Fast assembly", "Quick-lock cabinets streamline event builds."], ["Weather-ready", "IP65 construction for outdoor stages."], ["Three pitch options", "Choose for the venue and audience distance."]],
    applications: ["Outdoor concerts", "Festivals", "Sports events", "Roadshows", "Public gatherings"],
  }),
  makeProduct({
    id: "transglow", name: "MAS Trans-Glow Series", series: "Transparent LED display", categorySlug: "transparent", icon: "◇",
    description: "Transparent LED panels that layer moving content over glass while preserving views through the installation.", tagline: "Let the architecture show through.", images: ["/catalogue/trans-glow-main.jpg", "/catalogue/trans-glow-detail.jpg"],
    specs: { "Pixel Pitch": "P3.91–P7.8", Brightness: "3,500–4,500 nits", Transparency: "Up to 75–85%", "Cabinet Size": "500 × 1,000 / 1,000 × 1,000 mm", "IP Rating": "IP43 (indoor)", "Refresh Rate": "3,840 Hz" },
    features: [["See-through display", "Digital content can coexist with the view behind."], ["Glass integration", "Lightweight rails support window and façade concepts."], ["Modular layout", "Cabinets combine for custom areas."]],
    applications: ["Retail windows", "Glass showrooms", "Shopping malls", "Office glass walls", "Exhibition spaces"],
  }),
  makeProduct({
    id: "standpro", name: "MAS-StandPro Series LED", series: "Freestanding LED standee", categorySlug: "standee", icon: "▯",
    description: "A freestanding portrait LED display for retail messaging, promotions and events.", tagline: "A display that stands on its own.", images: ["/catalogue/standpro-main.jpg", "/catalogue/standpro-detail.jpg"],
    specs: { "Pixel Pitch": "P1.53 / P1.86 / P2.5", Brightness: ">600–800 nits (by pitch)", "Screen Size": "640 × 1,920 mm", "Cabinet Weight": "Approx. 35 kg", "IP Rating": "IP43", Service: "Front access" },
    features: [["All-in-one format", "Portrait LED presentation in a standalone frame."], ["Easy content input", "HDMI, LAN, Wi-Fi, cloud and USB are listed in the catalogue."], ["Moveable presence", "Designed for spaces where campaign content changes."]],
    applications: ["Hotel lobbies", "Product launches", "Retail promotions", "Exhibitions", "Airport lounges"],
  }),
  makeProduct({
    id: "signage-kiosk", name: "MAS Signage Kiosk", series: "Full HD network digital signage", categorySlug: "digital-signage", icon: "▣",
    description: "Networked Full HD LCD floor kiosks for information, promotions and customer-facing media.", tagline: "Information with presence.", images: ["/catalogue/kiosk-main.jpg", "/catalogue/kiosk-detail.jpg"],
    specs: { "Display Type": "Full HD LCD signage kiosk", "Screen Sizes": "43 / 50 / 55 / 65 in", Resolution: "1,920 × 1,080", Brightness: "300–400 cd/m² (by size)", Connectivity: "Ethernet / Wi-Fi", Installation: "Floor standing" },
    features: [["Networked playback", "Publish multimedia information to the display."], ["Four sizes", "43, 50, 55 and 65-inch options."], ["Floor-standing format", "A slim kiosk for public and commercial interiors."]],
    applications: ["Retail", "Hospitality", "Information points", "Corporate lobbies", "Exhibitions"],
  }),
];

export function getProductsByCategory(categorySlug: string): Product[] { return products.filter((product) => product.categorySlug === categorySlug); }
export function getProductById(productId: string): Product | undefined { return products.find((product) => product.id === productId); }
export function getCategoryBySlug(slug: string): Category | undefined { return categories.find((category) => category.slug === slug); }
export function getProductNavigation(product: Product): { prev: Product | undefined; next: Product | undefined } {
  const categoryProducts = getProductsByCategory(product.categorySlug);
  const index = categoryProducts.findIndex((item) => item.id === product.id);
  return { prev: index > 0 ? categoryProducts[index - 1] : undefined, next: index < categoryProducts.length - 1 ? categoryProducts[index + 1] : undefined };
}
