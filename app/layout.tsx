import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
})

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
      <body className={`${dmSans.variable} font-sans`}>{children}</body>
    </html>
  )
}

