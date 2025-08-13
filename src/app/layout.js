import {
  Pinyon_Script,
  Dorsa,
  Bodoni_Moda,
  Six_Caps,
  Poppins,
} from "next/font/google";
import "./globals.css";

const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const dorsa = Dorsa({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const bodoni = Bodoni_Moda({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const sixCaps = Six_Caps({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Reinis Varavs - Software Engineer",
  description:
    "I like programming and integrating AI into my work. Currently, I mainly use JavaScript and n8n. I program chatbots, AI agents, and automation systems.",
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
      noimageindex: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Reinis Varavs - Software Engineer",
    description:
      "I like programming and integrating AI into my work. Currently, I mainly use JavaScript and n8n. I program chatbots, AI agents, and automation systems.",
    url: "https://reinisvaravs.com",
    siteName: "Reinis Varavs Portfolio",
    locale: "en_US",
    type: "website",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Reinis Varavs - Software Engineer",
    description:
      "I like programming and integrating AI into my work. Currently, I mainly use JavaScript and n8n. I program chatbots, AI agents, and automation systems.",
    images: [],
    creator: "@reinisvaravs",
  },
  other: {
    "application-ld+json": {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Reinis Varavs",
      alternateName: "Reinis Vāravs",
      url: "https://reinisvaravs.com",
      jobTitle: "Software Engineer",
      description:
        "I like programming and integrating AI into my work. Currently, I mainly use JavaScript and n8n. I program chatbots, AI agents, and automation systems.",
      sameAs: [
        "https://github.com/reinisvaravs",
        "https://www.instagram.com/reinisvaravs",
      ],
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" translate="no">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${pinyon.variable} ${poppins.variable} ${dorsa.variable} ${bodoni.variable} ${sixCaps.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
