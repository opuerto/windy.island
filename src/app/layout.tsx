import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Toolbar from '@/app/components/Toolbar/Toolbar';
import Footer from '@/app/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Awesome app',
  description: 'Created by Oscar Puerto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toolbar />
        {children}
        <div className="footer">
          <Footer />
        </div>
      </body>
    </html>
  )
}
