'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/layout";
import { SessionProvider } from 'next-auth/react';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 font-sans antialiased text-gray-900">
     <SessionProvider>
     <div id="portal-root"></div> 
        <Layout />
        {children}
     </SessionProvider>
      
      </body>
    </html>
  );
}
