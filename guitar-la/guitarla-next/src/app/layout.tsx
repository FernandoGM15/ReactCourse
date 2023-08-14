import "./globals.css";
import "normalize.css";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

/** @description Metadata for the SEO */
export const metadata: Metadata = {
  title: "Create Next App",
  description: "GuitarLA - Guitars selling and music blog",
};

/** @description Imported font by google */
const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
