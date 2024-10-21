"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import LoaderWrapper from '../components/LoaderWrapper'; // Adjust the path if needed
import { Suspense } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <LoaderWrapper>
            {children}
          </LoaderWrapper>
        </Suspense>
      </body>
    </html>
  );
}
