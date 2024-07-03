// app\layout.js
import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arnold Twala | Portfolio',
  description: 'Arnold Twala is a software developer based in Mankweng, South Africa. He is passionate about building software that improves the lives of people.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
