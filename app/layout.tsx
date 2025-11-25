import "./globals.css";
import { Geist, Geist_Mono, Pacifico, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "remixicon/fonts/remixicon.css";
import type { Metadata } from "next";


const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const poppins = Poppins({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Faithful Morning Devotional",
  description: "Created by WebMasters Nakuru",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${poppins.variable} antialiased bg-gradient-to-br from-orange-50 via-yellow-50 to-white`}
      >
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
