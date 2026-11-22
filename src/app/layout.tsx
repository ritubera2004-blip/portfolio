import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ||
  "https://ritubera2004-blip.github.io";
const SITE_URL = `${SITE_ORIGIN}${process.env.NEXT_PUBLIC_BASE_PATH || ""}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ritu Bera — MBA | Marketing & Brand Strategy Portfolio",
    template: "%s · Ritu Bera",
  },
  description:
    "Ritu Bera is an MBA student at Lovely Professional University specializing in Marketing with a minor in Operations. Building brands, understanding people, creating business impact. Featured project: SILVAT — from unbranded to branded.",
  keywords: [
    "Ritu Bera",
    "MBA Marketing",
    "Brand Management",
    "Marketing Strategy",
    "Consumer Behaviour",
    "Business Development",
    "LPU MBA",
    "SILVAT",
    "Marketing Portfolio",
    "Operations Minor",
  ],
  authors: [{ name: "Ritu Bera" }],
  creator: "Ritu Bera",
  publisher: "Ritu Bera",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Ritu Bera — Building Brands. Understanding People. Creating Business Impact.",
    description:
      "MBA student specializing in Marketing & Operations. A portfolio of brand thinking, consumer insight and entrepreneurial execution — featuring the SILVAT branding case study.",
    url: SITE_URL,
    siteName: "Ritu Bera Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ritu Bera — MBA | Marketing Major | Operations Minor",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritu Bera — MBA Marketing & Brand Portfolio",
    description:
      "Building brands. Understanding people. Creating business impact. An MBA student's professional portfolio.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
        <SonnerToaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}
