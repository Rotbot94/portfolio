"use client";
import "./styles/globals.css";
import { Roboto } from "next/font/google";
import { AnimatePresence } from "framer-motion";

const roboto = Roboto({ weight: ["900"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      <html lang="en">
        <body className={`${roboto.className} overflow-hidden`}>
          {children}
        </body>
      </html>
    </AnimatePresence>
  );
}
