import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/layout/PageTransition";

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
        <div className="fixed inset-0 -z-10 opacity-70">
          <div className="absolute -left-16 top-10 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute bottom-0 right-[-10%] h-80 w-96 rounded-full bg-[#7ae9ff]/10 blur-[90px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,223,255,0.08),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(0,255,224,0.06),transparent_40%)]" />
        </div>
        <PageTransition>
          <div className="relative z-10 flex min-h-screen flex-col">{children}</div>
        </PageTransition>
      </body>
    </html>
  );
}
