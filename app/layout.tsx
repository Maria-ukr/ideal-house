import type { Metadata } from "next";
import { Montaga, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const montaga = Montaga({
  variable: "--font-montaga",
  subsets: ["latin"],
  weight: ["400"],
});

const ptfuturaFont = localFont({
  src: [
    {
      path: "../fonts/FuturaLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/FuturaRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/FuturaMedium.woff2",
      weight: "500",
      style: "normal",
    }
  ],
  variable: "--font-ptfutura",
})

export const metadata: Metadata = {
  title: "Ideal house",
  description: "Created project by https://github.com/Maria-ukr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", ptfuturaFont.variable, montaga.variable, "font-mono", jetbrainsMono.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
