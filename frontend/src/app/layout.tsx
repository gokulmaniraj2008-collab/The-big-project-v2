import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://youragency.com'),
  title: {
    default: 'The Big Project — Digital Agency',
    template: '%s | The Big Project',
  },
  description: 'We build stunning websites, brands, and marketing campaigns for forward-thinking brands.',
  keywords: ['digital agency', 'web development', 'branding', 'marketing'],
  authors: [{ name: 'Goku', url: 'https://github.com/goku' }],
  creator: 'Goku',
  publisher: 'The Big Project',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: 'The Big Project — Digital Agency',
    description: 'We build stunning websites, brands, and marketing campaigns.',
    siteName: 'The Big Project',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Big Project Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Big Project — Digital Agency',
    description: 'We build stunning websites, brands, and marketing campaigns.',
    images: ['/og-image.jpg'],
    creator: '@yourhandle',
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
