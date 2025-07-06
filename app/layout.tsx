import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Brian Benwah - AI Developer & App Builder',
    template: '%s | Brian Benwah'
  },
  description: 'Personal blog about AI development, app building, and technology insights. Follow my journey as I build apps and share how I use AI in public.',
  keywords: ['AI development', 'app building', 'technology', 'programming', 'artificial intelligence', 'software development'],
  authors: [{ name: 'Brian Benwah' }],
  creator: 'Brian Benwah',
  publisher: 'Brian Benwah',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://brianbenwah.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brianbenwah.com',
    title: 'Brian Benwah - AI Developer & App Builder',
    description: 'Personal blog about AI development, app building, and technology insights.',
    siteName: 'Brian Benwah',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Brian Benwah - AI Developer & App Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brian Benwah - AI Developer & App Builder',
    description: 'Personal blog about AI development, app building, and technology insights.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
} 