import React from "react"
import type { Metadata, Viewport } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { Cormorant_Garamond, JetBrains_Mono, Josefin_Sans as V0_Font_Josefin_Sans, Vollkorn as V0_Font_Vollkorn } from 'next/font/google'

// Initialize fonts
const _josefinSans = V0_Font_Josefin_Sans({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700"] })
const _vollkorn = V0_Font_Vollkorn({ subsets: ['latin'], weight: ["400","500","600","700","800","900"] })

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Reference Codex',
  description: 'A public-domain reference library for artists. Explore curated images from Wikimedia Commons across categories like anatomy, mechanical, fossils, and more.',
  keywords: ['reference', 'art', 'artists', 'public domain', 'wikimedia', 'inspiration', 'visual reference'],
  authors: [{ name: 'enzorossipintos', url: 'https://instagram.com/enzorossipintos' }],
  openGraph: {
    title: 'Reference Codex',
    description: 'A public-domain reference library for artists',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f4f0' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1916' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${jetbrainsMono.variable} font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
