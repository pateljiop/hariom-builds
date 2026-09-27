import React from 'react';
import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Syne } from 'next/font/google';
import '../styles/tailwind.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hariombuilds.com';
const syne = Syne({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const viewport: Viewport = { width: 'device-width', initialScale: 1, colorScheme: 'dark', themeColor: '#080808' };
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'HariomBuilds — Software, APIs & Automation', template: '%s | HariomBuilds' },
  description: 'Independent solo software studio by Hariom Patel building web platforms, Python automation and data systems.',
  applicationName: 'HariomBuilds', creator: 'Hariom Patel',
  authors: [{ name: 'Hariom Patel', url: 'https://linkedin.com/in/pateljiop' }],
  keywords: ['HariomBuilds','Hariom Patel','Next.js','Python','FastAPI','automation','Cloudflare'],
  alternates: { canonical: '/' },
  openGraph: { title: 'HariomBuilds — Software, APIs & Automation', description: 'Independent software studio by Hariom Patel.', url: SITE_URL, siteName: 'HariomBuilds', images: [{ url: '/assets/images/08_Banner_Cover.png', width: 1200, height: 630, alt: 'HariomBuilds' }], locale: 'en_US', type: 'website' },
  robots: { index: true, follow: true },
  icons: { icon: '/assets/images/07_Favicon_H_Small.png' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${syne.variable} ${mono.variable}`}><body>{children}</body></html>;
}