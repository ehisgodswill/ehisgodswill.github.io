"use client"
import Header from '@/components/header';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import Footer from '@/components/footer';
import AnimatedPage from './animated';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ehis Godswill - Developer, Sound Engineer, Electrical Engineer',
  description: 'Developing websites since 2022AD. Intresting character, Get in touch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 2000);
  })
  return (
    <html lang="en">
      <body className={inter.className}>
          <AnimatedPage />
        {show && <>
          <Header />
          {children}
          <Footer />
        </>}
      </body>
    </html>
  )
}
