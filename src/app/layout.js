import { Pinyon_Script, Dorsa, Bodoni_Moda, Six_Caps } from "next/font/google";
import "./globals.css";

const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const dorsa = Dorsa({ weight: "400", subsets: ["latin"], display: "swap" });
const bodoni = Bodoni_Moda({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const sixCaps = Six_Caps({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "Reinis Varavs – AI Automation Engineer & Full-Stack Next.js Developer",
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
      "Reinis Varavs – AI Automation Engineer & Full-Stack Next.js Developer",
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
        alt: "Preview of Reinis Varavs – AI Automation Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Reinis Varavs – AI Automation Engineer & Full-Stack Next.js Developer",
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
        className={`${pinyon.variable} ${dorsa.variable} ${bodoni.variable} ${sixCaps.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
