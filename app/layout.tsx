import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { blackletter, body, display, mono } from "@/lib/fonts";
import { IG, YT, seo, siteUrl } from "@/lib/data";
import { Motion } from "@/components/motion";
import "./globals.css";

const url = siteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: seo.title,
  description: seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "en_CA",
    url,
    siteName: "Vivek Muralidharan",
    title: seo.title,
    description: seo.description,
    images: [{ url: `${url}/og.jpg`, width: 1200, height: 630, type: "image/jpeg", alt: "The Sanity Gazette: Vivek Muralidharan, stand-up comedian" }],
  },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: [`${url}/og.jpg`] },
  other: { "instagram:handle": "@mightbevivek" },
};

export const viewport: Viewport = { themeColor: "#efe9dc" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vivek Muralidharan",
  jobTitle: "Stand-up comedian",
  url,
  image: `${url}/images/portrait.jpg`,
  sameAs: [IG, YT],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA" className={`${blackletter.variable} ${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        {children}
        <Motion />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
