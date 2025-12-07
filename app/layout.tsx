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

export const metadata: Metadata = {
  title: "Ateliux | SaaS e experiencias digitais em ciano",
  description:
    "A Ateliux cria SaaS, sites institucionais, ecommerce e landing pages de alta conversao com performance e visual ciano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020308] text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
