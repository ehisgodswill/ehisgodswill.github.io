import Header from '../components/Header';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ehis Godswill - Software Engineer, Sound Engineer, Electrical Engineer',
  description: 'Developing websites since 2022AD. Intresting character, Get in touch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className +" bg-white dark:bg-gray-900"} >
        <Header />
        {children}
      </body>
    </html>
  )
}
