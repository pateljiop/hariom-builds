import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';
import '../styles/brand-refresh.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hariombuilds.run.place';
const SITE_NAME = 'Hariom Builds';
const DESCRIPTION = 'Hariom Builds creates websites, automation and digital systems that solve real business problems and improve how businesses work online.';
const OG_IMAGE = '/assets/images/08_Banner_Cover.png';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['300','400','500','600','700','800'], variable: '--font-plus-jakarta', display: 'swap' });

export const viewport: Viewport = { width: 'device-width', initialScale: 1, colorScheme: 'dark', themeColor: '#07080a' };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Hariom Builds — Websites, Automation & Digital Systems', template: '%s | Hariom Builds' },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  generator: 'Next.js',
  keywords: ['Hariom Builds','web development','business websites','website development','automation','business automation','digital systems','Next.js','freelance web developer'],
  authors: [{ name: 'Hariom Patel', url: 'https://linkedin.com/in/pateljiop' }],
  creator: 'Hariom Patel', publisher: SITE_NAME, category: 'technology',
  alternates: { canonical: '/' },
  openGraph: { title: 'Hariom Builds — Websites, Automation & Digital Systems', description: DESCRIPTION, url: SITE_URL, siteName: SITE_NAME, images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Hariom Builds — Websites, Automation & Digital Systems' }], locale: 'en_US', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Hariom Builds — Websites, Automation & Digital Systems', description: DESCRIPTION, images: [OG_IMAGE] },
  icons: { icon: [{ url: '/assets/images/07_Favicon_H_Small.png', type: 'image/png' }] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={plusJakarta.variable}><body className={plusJakarta.className}>{children}
    <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fhariombuil4114back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
    <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" />
  </body></html>;
}
