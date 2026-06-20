import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UNEEB UR REHMAN | AI Solutions Expert | Digital Marketing Lead | IT Specialist',
  description:
    'Premium portfolio of Uneeb Ur Rehman - IT Specialist, AI Solutions Expert, Digital Marketing Lead, and Production Director. Empowering businesses through technology, AI, and innovation.',
  keywords: [
    'IT Specialist',
    'AI Solutions',
    'Digital Marketing',
    'Production Director',
    'Event Management',
    'Web Development',
    'Pakistan',
    'Peshawar',
  ],
  authors: [{ name: 'Uneeb Ur Rehman', url: 'https://uneeb49.com' }],
  creator: 'Uneeb Ur Rehman',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://uneeb49.com',
    title: 'UNEEB UR REHMAN | Premium Portfolio',
    description: 'Empowering Businesses Through Technology, AI, Digital Marketing, and Multimedia Innovation.',
    siteName: 'Uneeb Ur Rehman Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNEEB UR REHMAN | Premium Portfolio',
    description: 'AI Solutions | IT Expert | Digital Marketing Lead | Production Director',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} bg-gradient-dark text-white overflow-x-hidden antialiased`}
      >
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />
        </div>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
