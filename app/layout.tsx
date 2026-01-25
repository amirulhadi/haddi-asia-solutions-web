import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Haddi Asia Solutions - Your Trusted Partner for Scalable Digital Systems',
  description: 'Premier technology consultancy specializing in digital transformation, AI-enabled platforms, and scalable web systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

