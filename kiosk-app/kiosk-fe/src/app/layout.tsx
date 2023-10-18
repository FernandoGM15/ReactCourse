import "./globals.css";
import "react-toastify/ReactToastify.min.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Sidebar from "./components/Sidebar";
import { KioskProvider } from "./context/KioskProvider";
import ModalProduct from "./components/ModalProduct";
import { ToastContainer } from "react-toastify";
import Steps from "./components/Steps";
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
        <KioskProvider>
          <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:1/5">
              <Sidebar />
            </aside>
            <main className="md:w-8/12 xl:w-3/4 2xl:4/5 h-screen overflow-y-auto">
              <div className="p-10">
                <Steps />
                {children}
              </div>
            </main>
          </div>
          <ModalProduct />
          <ToastContainer />
        </KioskProvider>
      </body>
    </html>
  );
}
