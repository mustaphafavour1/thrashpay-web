import type { Metadata } from "next";
import { Syne, Teachers } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const teachers = Teachers({
  variable: "--font-teachers",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TrashPay — Turning Waste Into Value",
  description:
    "TrashPay connects households, waste packers, and recycling companies on one platform — turning everyday waste into steady income and clean communities.",
  keywords: ["waste management", "recycling", "sustainability", "Nigeria", "TrashPay"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${teachers.variable}`}>
      <body className="min-h-screen bg-dark text-offwhite overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
