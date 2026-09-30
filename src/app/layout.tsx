import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://masledinnext.vercel.app"),
  title: {
    default: "MAS LED Display Screens",
    template: "%s | MAS LED Display Screens"
  },
  description: "MAS LED display systems for indoor, outdoor, rental, transparent and digital signage projects. Explore catalogue-backed specifications and discuss your project.",
  keywords: [
    "LED display",
    "LED screen",
    "MAS LED",
    "LED display India",
    "indoor LED display",
    "outdoor LED display",
    "transparent LED",
    "rental LED screen",
    "digital signage",
    "LED billboard",
    "commercial LED display",
    "LED video wall",
    "LED display manufacturer India",
    "B2B LED solutions",
    "LED display Greater Noida",
    "LED screen supplier",
  ],
  authors: [{ name: "MAS LED", url: "https://masledinnext.vercel.app" }],
  creator: "MAS LED",
  publisher: "Mastech Advertising Solutions Pvt Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://masledinnext.vercel.app",
    siteName: "MAS LED",
    title: "MAS LED | Premium LED Display Solutions in India",
    description: "Explore MAS LED display systems for indoor, outdoor, rental, transparent and digital signage projects.",
    images: [
      {
        url: "/catalogue/flexedge-main.jpg",
        width: 980,
        height: 391,
        alt: "MAS LED outdoor curved display installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAS LED | Premium LED Display Solutions in India",
    description: "MAS LED display systems for indoor, outdoor, rental and transparent projects.",
    images: ["/catalogue/flexedge-main.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
  category: "technology",
};

// JSON-LD Structured Data for Organization
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MAS LED",
  legalName: "Mastech Advertising Solutions Pvt Ltd",
  url: "https://masledinnext.vercel.app",
  logo: "https://masledinnext.vercel.app/logo.png",
  description: "LED display systems for indoor, outdoor, rental, transparent and digital signage projects.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1st Floor, Wegmans Business Park, Plot No 3, Knowledge Park-3",
    addressLocality: "Greater Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201306",
    addressCountry: "IN"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8743888577",
    contactType: "sales",
    email: "masled001@gmail.com",
    availableLanguage: ["English", "Hindi"]
  },
  sameAs: [
    // Add your social media links here
    // "https://www.facebook.com/masled",
    // "https://www.instagram.com/masled",
    // "https://www.linkedin.com/company/masled"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://masledinnext.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#050b12] text-white">
        {children}
      </body>
    </html>
  );
}
