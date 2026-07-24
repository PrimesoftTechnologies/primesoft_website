import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { myCustomFont } from "./fonts";
import { Navigation } from "./navigation";
export const metadata: Metadata = {
  title: "PrimeSoft Technologies",
  description: "PrimeSoft Technologies is a leading software development company specializing in innovative solutions for businesses worldwide. With a team of skilled professionals, we deliver cutting-edge software products and services that drive growth and success for our clients.",
  icons: {
    icon: [{ url: "/images/primesoft-logo-transparent.png", type: "image/png" }],
    shortcut: "/images/primesoft-logo-transparent.png",
    apple: "/images/primesoft-logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${myCustomFont.className}`}>
      <body className={` antialiased`}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
