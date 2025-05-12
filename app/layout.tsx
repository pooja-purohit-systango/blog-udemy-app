import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/layout";

export const metadata: Metadata = {
  title: "Pooja's Blog",
  description: "A blog about modern web development, React, and Next.js.",
  keywords: ["React", "Next.js", "JavaScript", "Frontend", "Web Development"],
  authors: [{ name: "Pooja" }],
  creator: "Pooja",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Pooja's Blog",
    description: "Explore featured and latest posts about React, Next.js, and more.",
    url: "https://your-domain.com",
    siteName: "Pooja's Blog",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pooja's Blog",
    description: "Frontend tutorials and articles on React and Next.js",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 font-sans antialiased text-gray-900">
      <div id="portal-root"></div> {/* Add this line */}
        <Layout />
        {children}
      </body>
    </html>
  );
}
