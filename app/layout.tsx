import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "nasdas-dev | Innovation in Progress",
  description: "Pioneering the future of running technology. Exciting projects coming soon.",
  keywords: "nasdas-dev, technology, innovation, software development",
  authors: [{ name: "nasdas-dev" }],
  openGraph: {
    title: "nasdas-dev | Innovation in Progress",
    description: "Pioneering the future of running technology. Exciting projects coming soon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
