import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Base Dev',
  description: 'Updating the Internet with a new development platform',
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

