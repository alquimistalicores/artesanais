import React from "react"
import type { Metadata, Viewport } from 'next'
import { Cinzel, Raleway } from 'next/font/google'

import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Alquimista Licores | Elixires Artesanais',
  description:
    'Transformamos ingredientes naturais em elixires artesanais. Licores inspirados na alquimia medieval, produzidos em pequenos lotes com ingredientes selecionados.',
}

export const viewport: Viewport = {
  themeColor: '#1a1209',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cinzel.variable} ${raleway.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
