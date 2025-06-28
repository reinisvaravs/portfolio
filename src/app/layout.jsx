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
  title:
    "Reinis Varavs - AI Automation Engineer & Full-Stack Next.js Developer",
  description:
    "Reinis Varavs builds advanced AI automation systems and full-stack web platforms using Next.js, OpenAI, and scalable tools like Make.com. Founder, engineer, and systems builder.",
  metadataBase: new URL("https://reinisvaravs.com"),
  alternates: {
    canonical: "/",
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
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title:
      "Reinis Varavs - AI Automation Engineer & Full-Stack Next.js Developer",
    description:
      "Explore the portfolio of Reinis Varavs, a systems-focused engineer building AI automations and full-stack applications using Next.js, OpenAI, and modern cloud tooling.",
    url: "https://reinisvaravs.com",
    siteName: "Reinis Varavs Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://reinisvaravs.com/preview.png", // swap image contents as needed
        width: 1200,
        height: 630,
        alt: "Preview of Reinis Varavs - AI Automation Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Reinis Varavs - AI Automation Engineer & Full-Stack Next.js Developer",
    description:
      "Custom AI automations and full-stack Next.js systems for modern businesses. Built with OpenAI, Make.com, Vercel, and scalable web frameworks.",
    images: ["https://reinisvaravs.com/preview.png"],
    creator: "@reinisvaravs",
  },
  other: {
    "application-ld+json": {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Reinis Varavs",
      alternateName: "Reinis Vāravs",
      url: "https://reinisvaravs.com",
      jobTitle: "AI Automation Engineer",
      description:
        "Reinis Varavs is an AI systems engineer and full-stack developer helping businesses unlock scale through automation using Next.js, OpenAI, and modern frameworks.",
      sameAs: [
        "https://github.com/reinisvaravs",
        "https://www.instagram.com/reinisvaravs/",
      ],
    },
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
