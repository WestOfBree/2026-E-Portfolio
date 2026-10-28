import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bree-thomas.com";

const description =
  "Brianna Thomas is a freelance web developer in Rhode Island building fast, responsive, SEO-friendly custom websites with Next.js, React, and Tailwind CSS for small businesses and creators.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Brianna Thomas | Freelance Web Developer & Website Designer",
    template: "%s | Brianna Thomas",
  },
  description,
  keywords: [
    "freelance web developer",
    "hire a web developer",
    "website designer",
    "custom website development",
    "Next.js developer",
    "React developer",
    "small business website",
    "Rhode Island web developer",
  ],
  authors: [{ name: "Brianna Thomas" }],
  alternates: { canonical: "/" },
  icons: "/Pumpkin.ico",
  openGraph: {
    type: "website",
    siteName: "Brianna Thomas",
    title: "Brianna Thomas | Freelance Web Developer & Website Designer",
    description,
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Brianna Thomas | Freelance Web Developer & Website Designer",
    description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Brianna Thomas - Web Development",
  url: siteUrl,
  description,
  areaServed: "US",
  serviceType: ["Custom website development", "Web design", "Next.js development"],
  founder: {
    "@type": "Person",
    name: "Brianna Thomas",
    jobTitle: "Freelance Web Developer",
    sameAs: [
      "https://github.com/WestOfBree",
      "https://www.linkedin.com/in/brianna-thomas-78b310b9/",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
