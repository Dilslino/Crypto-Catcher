import type { Metadata } from 'next'
import { HeaderButtons } from './components/header-buttons'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crypto Catcher',
  description: 'Crypto and Web3 Platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0F172A]">
        <HeaderButtons />
        {children}
      </body>
    </html>
  )
}
