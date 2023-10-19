import "./globals.css";
import "react-toastify/ReactToastify.min.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { ToastContainer } from "react-toastify";
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffee home",
  description: "Coffee kiosk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
