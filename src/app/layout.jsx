import {
  Pinyon_Script,
  Dorsa,
  Bodoni_Moda,
  Six_Caps,
  Poppins,
} from "next/font/google";
import "./globals.css";

// Pinyon Script - Available weights: 400
// Used in: hero.css for main title
const pinyon = Pinyon_Script({
  weight: "400", // Only weight available for this font
  subsets: ["latin"],
  display: "swap",
});

// Dorsa - Available weights: 400
// Used in: hero.css, about.css, work.css for headings
const dorsa = Dorsa({
  weight: "400", // Only weight available for this font
  subsets: ["latin"],
  display: "swap",
});

// Bodoni Moda - Available weights: 400, 500, 600, 700, 800, 900
// Used in: hero.css, about.css, header.css, footer.css, work.css
// Actually used weights: 400, 600 (weight 100 not available for this font)
const bodoni = Bodoni_Moda({
  weight: ["400", "600"], // Removed unused weights: 500, 700, 800, 900
  subsets: ["latin"],
  display: "swap",
});

// Six Caps - Available weights: 400
// Used in: work.css for specific headings
const sixCaps = Six_Caps({
  weight: "400", // Only weight available for this font
  subsets: ["latin"],
  display: "swap",
});

// Poppins - Available weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
// Used in: header.css for navigation
// Actually used weights: 400 (default)
const poppins = Poppins({
  weight: "400", // Removed unused weights: 100, 200, 300, 500, 600, 700, 800, 900
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // Primary title for search results and browser tabs
  title: "Reinis Varavs | AI Automation Engineer & Full-Stack Developer",

  // Comprehensive description for search snippets
  description:
    "Reinis Varavs is an AI automation engineer and full-stack developer from Latvia. Founder of SetInbound.com - AI voice receptionist platform. Specializing in AI voice systems, automation workflows, and scalable web applications.",

  // Keywords for search engines (still relevant for some platforms)
  keywords:
    "Reinis Varavs, Reinis Vāravs, AI automation engineer, AI automation developer, full-stack developer, AI voice systems, automation consultant, Latvia developer, OpenAI developer, Make.com automation, SetInbound founder, AI receptionist",

  // Canonical URL and base configuration
  metadataBase: new URL("https://reinisvaravs.com"),
  alternates: {
    canonical: "/",
  },

  // Search engine crawling instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      noimageindex: false,
    },
  },

  // Favicon and app icons
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },

  // Open Graph for social media sharing
  openGraph: {
    title: "Reinis Varavs | AI Automation Engineer & Full-Stack Developer",
    description:
      "AI automation engineer and full-stack developer from Latvia. Founder of SetInbound.com - AI voice receptionist platform. Building intelligent systems with OpenAI, Make.com, and modern web technologies.",
    url: "https://reinisvaravs.com",
    siteName: "Reinis Varavs Portfolio",
    locale: "en_US",
    type: "website",
  },

  // Twitter Card optimization
  twitter: {
    card: "summary",
    title: "Reinis Varavs | AI Automation Engineer & Full-Stack Developer",
    description:
      "AI automation engineer and full-stack developer from Latvia. Specializing in AI voice systems, automation workflows, and scalable web applications.",
    creator: "@reinisvaravs",
    site: "@reinisvaravs",
  },

  // Structured data for rich snippets
  other: {
    "application-ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Reinis Varavs",
      alternateName: ["Reinis Vāravs", "Reinis Roberts Vāravs"],
      url: "https://reinisvaravs.com",
      jobTitle: "AI Automation Engineer",
      description:
        "AI automation engineer and full-stack developer specializing in intelligent systems, voice AI, and automation workflows. Founder of SetInbound.com.",
      nationality: "Latvian",
      knowsAbout: [
        "AI Automation",
        "Full-Stack Development",
        "OpenAI Integration",
        "Voice AI Systems",
        "Make.com Automation",
        "Next.js Development",
        "Discord Bot Development",
        "E-commerce Development",
        "AI Voice Receptionists",
        "Business Automation",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "AI Automation Engineer",
        description:
          "Building intelligent automation systems and AI-powered applications",
      },
      worksFor: {
        "@type": "Organization",
        name: "SetInbound",
        url: "https://setinbound.com",
        description: "AI voice receptionist platform",
      },
      founderOf: {
        "@type": "Organization",
        name: "SetInbound",
        url: "https://setinbound.com",
        description:
          "AI voice receptionist platform for appointment-based businesses",
      },
      sameAs: [
        "https://github.com/reinisvaravs",
        "https://www.instagram.com/reinisvaravs/",
        "https://setinbound.com",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "LV",
        addressRegion: "Latvia",
      },
    }),

    // Additional meta tags for better SEO
    author: "Reinis Varavs",
    language: "en",
    "geo.region": "LV",
    "geo.country": "Latvia",
    distribution: "global",
    rating: "general",
    "revisit-after": "7 days",
    "google-site-verification": "", // Add your verification code if you have one
  },

  // Viewport and mobile optimization
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },

  // Theme color for mobile browsers
  themeColor: "#131313",

  // Apple-specific meta tags
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Reinis Varavs",
  },

  // Microsoft-specific meta tags
  msapplication: {
    tileColor: "#131313",
    tileImage: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" translate="no">
      <body
        className={`${pinyon.variable} ${poppins.variable} ${dorsa.variable} ${bodoni.variable} ${sixCaps.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
