import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hariombuilds.run.place'),
  title: 'Hariom Builds — Websites, Automation & Digital Systems',
  description: 'Hariom Builds creates websites, automation and digital systems that help businesses improve their digital presence and workflows. Code • Create • Automate.',
  keywords: ['web development', 'automation', 'digital systems', 'websites', 'Next.js', 'business solutions'],
  authors: [{ name: 'Hariom Builds' }],
  openGraph: {
    title: 'Hariom Builds — Websites, Automation & Digital Systems',
    description: 'Websites, automation and digital systems built around real business problems.',
    url: 'https://hariombuilds.run.place',
    siteName: 'Hariom Builds',
    images: [{ url: '/assets/images/08_Banner_Cover.png', width: 1200, height: 630, alt: 'Hariom Builds' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hariom Builds — Websites, Automation & Digital Systems',
    description: 'Websites, automation and digital systems built around real business problems.',
    images: ['/assets/images/08_Banner_Cover.png'],
  },
  icons: {
    icon: [{ url: '/assets/images/07_Favicon_H_Small.png', type: 'image/png' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className={plusJakarta.className}>
        {children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fhariombuil4114back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" />
      </body>
    </html>
  );
}
