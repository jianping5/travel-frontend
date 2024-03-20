import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';
import ThemeProvider from "@/context/ThemeProvider";
import NavMenu from "@/components/header/NavMenu";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Travel",
  description: "Travel Everywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <NavMenu/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}