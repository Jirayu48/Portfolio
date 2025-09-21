import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio TCAS",
  description: "ระบบ Portfolio สำหรับ TCAS",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ Navbar fix อยู่ด้านบน */}
        <header className="fixed top-0 left-0 w-full z-50 bg-blue-600 shadow">
          <Navbar />
        </header>

        {/* ✅ main ขยับลงมา ไม่โดน Navbar บัง */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
