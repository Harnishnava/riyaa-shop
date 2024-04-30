import { Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import Nav from "@/app/components/nav";
import "./globals.css";
import Image from "next/image";
import Footer from "./components/footer";
const inter = Playfair_Display({
  subsets: ["latin"],
  weight: "600",
});

export const metadata: Metadata = {
  title: "Riyaa shop",
  description: "Unlock Radiant Beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-300 via-indigo-200 to-pink-300">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
