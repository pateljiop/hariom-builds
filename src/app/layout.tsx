import React from 'react';
import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Syne } from 'next/font/google';
import '../styles/tailwind.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hariombuild.eu.cc';
const syne = Syne({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#080808',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Hariom Builds | Software Studio, Automation & Web Development',
    template: '%s | Hariom Builds',
  },
  description:
    'Hariom Builds is an independent software studio building modern websites, web applications, Python automation, APIs and custom software.',
  applicationName: 'Hariom Builds',
  creator: 'Hariom Patel',
  authors: [{ name: 'Hariom Patel', url: 'https://linkedin.com/in/pateljiop' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Hariom Builds | Software Studio, Automation & Web Development',
    description:
      'Web development, Python automation, APIs and custom software built by Hariom Builds.',
    url: SITE_URL,
    siteName: 'Hariom Builds',
    images: [
      {
        url: '/assets/images/08_Banner_Cover.png',
        width: 1200,
        height: 630,
        alt: 'Hariom Builds — software, web and automation studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hariom Builds | Software Studio, Automation & Web Development',
    description:
      'Modern websites, automation, APIs and custom software by Hariom Builds.',
    images: ['/assets/images/08_Banner_Cover.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: { icon: '/assets/images/07_Favicon_H_Small.png' },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Hariom Builds',
      url: SITE_URL,
      logo: `${SITE_URL}/assets/images/07_Favicon_H_Small.png`,
      founder: {
        '@type': 'Person',
        name: 'Hariom Patel',
        url: 'https://linkedin.com/in/pateljiop',
      },
      sameAs: [
        'https://github.com/pateljiop',
        'https://linkedin.com/in/pateljiop',
      ],
      knowsAbout: [
        'Web development',
        'Python',
        'Automation',
        'APIs',
        'Custom software',
        'Artificial intelligence',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Hariom Builds',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${mono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
