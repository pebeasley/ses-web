import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/features/layout/Navbar";
import Footer from "@/features/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://southernedgeservices.com"),
  title: {
    default: "Southern Edge Services",
    template: "%s | Southern Edge Services",
  },
  description:
    "Local computer support, networking, Wi-Fi, security system setup, and troubleshooting for homes and businesses in Southern Alabama.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Southern Edge Services",
    description:
      "Local computer support, networking, Wi-Fi, security system setup, and troubleshooting for homes and businesses in Southern Alabama.",
    url: "/",
    siteName: "Southern Edge Services",
    images: [
      {
        url: "/hero-it-services.jpg",
        width: 1200,
        height: 630,
        alt: "Southern Edge Services local IT support",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Southern Edge Services",
    description:
      "Local computer support, networking, Wi-Fi, security system setup, and troubleshooting for homes and businesses in Southern Alabama.",
    images: ["/hero-it-services.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex flex-col flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
