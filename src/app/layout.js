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
    "Reinis Varavs - AI Systems Engineer | Full-Stack & Automation Specialist",
  description:
    "Official portfolio of Reinis Varavs, an AI Systems Engineer and full-stack specialist building automation solutions using OpenAI and modern technologies.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title:
      "Reinis Varavs - AI Systems Engineer | Full-Stack & Automation Specialist",
    description:
      "Explore the official portfolio of Reinis Varavs, an AI Systems Engineer building next-generation automation systems powered by OpenAI and full-stack frameworks.",
    url: "https://reinisvaravs.com",
    images: [
      {
        url: "https://reinisvaravs.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Reinis Varavs Portfolio Preview",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" translate="no">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Reinis Varavs",
              alternateName: "Reinis Vāravs",
              url: "https://reinisvaravs.com",
              jobTitle: "AI Systems Engineer",
              description:
                "Reinis Varavs is an AI Systems Engineer specializing in building automation solutions using OpenAI and modern full-stack technologies.",
            }),
          }}
        />
      </head>
      <body
        className={`${pinyon.variable} ${dorsa.variable} ${bodoni.variable} ${sixCaps.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
