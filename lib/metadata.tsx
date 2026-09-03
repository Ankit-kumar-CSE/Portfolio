/**
 * Metadatas
 */

import type { Metadata } from "next";

const metadataInfos: Metadata = {
  title: "Ankit kumar Portfolio | Software Developer",
  description:
    "Portfolio of Ankit kumar, software engineer passionate about web development, artificial intelligence, and SAP systems. Explore my projects, skills, and professional experience.",
  keywords: [
    "Ankit kumar",
    "web developer",
    "portfolio",
    "Next.js",
    "React",
    "artificial intelligence",
    "SAP development",
    "DevOps",
    "Python",
    "TypeScript",
    "C++",
    "software engineer",
  ],
  authors: [{ name: "Ankit kumar", url: "https://github.com/Ankit-kumar-CSE" }],
  creator: "Ankit kumar",
  publisher: "Ankit kumar",
  openGraph: {
    title: "Ankit kumar Portfolio | Software Developer",
    description:
      "Discover the portfolio of Ankit kumar: web apps with Next.js, AI projects using Python, low-level and SAP development, and DevOps tools.",
    url: "",
    siteName: "Ankit kumar Portfolio",
    images: [
      {
        url: "https://raseraa0.github.io/preview.png", // Replace with your real image URL
        width: 1856,
        height: 928,
        alt: "Preview of Ankit kumar's developer portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "favicon.png", //TODO etre sur licon marche
  },
  metadataBase: new URL("https://raseraa0.github.io"),
};

export default metadataInfos;