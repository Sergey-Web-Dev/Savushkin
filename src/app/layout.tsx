import type { Metadata } from "next";
import localfont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const rotonda = localfont({
  src: [
    {
      path: "../../public/RotondaC-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-rotonda",
});

const fry = localfont({
  src: [
    {
      path: "../../public/omtype - Fry-Pro.otf",
      weight: "400",
    },
  ],
  variable: "--font-fry",
});

export const metadata: Metadata = {
  title: "Облака молока",
  description: "Савушкин Fest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rotonda.variable} ${fry.variable} inter.className`}>
        {children}
      </body>
    </html>
  );
}
