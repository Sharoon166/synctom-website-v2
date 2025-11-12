import { Metadata } from "next";
import PortfolioPageContent from "./portfolio-page-content";

export const metadata: Metadata = {
  title: "Portfolio | Synctom - Creative Projects That Inspire Innovation",
  description:
    "Explore how Synctom's design and technology solutions have empowered businesses to scale, connect, and succeed.",
  keywords: [
    "portfolio",
    "web development",
    "UI/UX design",
    "app development",
    "AI solutions",
    "digital marketing",
    "restaurant management platform",
    "business solutions",
    "React",
    "Next.js",
    "Figma",
    "MongoDB",
    "Express.js",
    "Synctom projects",
  ],
  authors: [{ name: "Synctom" }],
  creator: "Synctom",
  publisher: "Synctom",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://synctom.com/portfolio",
    title: "Portfolio | Synctom - Creative Projects That Inspire Innovation",
    description:
      "Explore how Synctom's design and technology solutions have empowered businesses to scale, connect, and succeed.",
    siteName: "Synctom",
    images: [
      {
        url: "/portfolio-og-image.png",
        width: 1200,
        height: 630,
        alt: "Synctom Portfolio - Creative Projects That Inspire Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Synctom - Creative Projects That Inspire Innovation",
    description:
      "Explore how Synctom's design and technology solutions have empowered businesses to scale, connect, and succeed.",
    images: ["/portfolio-og-image.png"],
    creator: "@synctom",
  },
  alternates: {
    canonical: "https://synctom.com/portfolio",
  },
  category: "Technology",
};

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
