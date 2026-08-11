import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nikhil Kushwaha | Full Stack Developer",

  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and modern web applications. Explore my experience, projects, and technical work.",

  keywords: [
    "Nikhil Kushwaha",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Web Developer",
  ],
  openGraph: {
    title: "Nikhil Kushwaha | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and modern web applications.",
    type: "website",
    url: "https://your-domain.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nikhil Kushwaha — Full Stack Developer",
      },
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
      className="h-full antialiased"
    >
      <body className={`${plusJakartaSans.variable} ${jetBrainsMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
