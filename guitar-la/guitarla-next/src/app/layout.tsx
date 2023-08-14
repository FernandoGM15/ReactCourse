import "./globals.css";
import "normalize.css";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { ParentPropsI } from "@/interfaces/parent-props.interfaces";

/** @description Metadata for the SEO */
export const metadata: Metadata = {
  title: "GuitarLA - Home",
  description: "GuitarLA - Guitars selling and music blog",
};

/** @description Imported font by google */
const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }: ParentPropsI) {
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
