import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseStudyHero from './components/CaseStudyHero';
import CaseStudyContent from './components/CaseStudyContent';

export const metadata: Metadata = {
  title: 'Roofing Website Concept — Case Study | Hariom Builds',
  description: 'How Hariom Builds designed a high-converting website concept for a local roofing business — turning visitors into quote requests.',
  openGraph: {
    title: 'Roofing Website Concept — Case Study | Hariom Builds',
    description: 'A case study in business-first web design: from no online presence to a service-focused site that communicates immediately.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function CaseStudyDetailPage() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Header />
      <main id="main-content">
        <CaseStudyHero />
        <CaseStudyContent />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Roofing Website Concept — Case Study',
            url: 'https://hariombuilds.run.place/case-study-detail',
            description: 'Case study: Hariom Builds designs a roofing business website concept.',
            isPartOf: { '@type': 'WebSite', name: 'Hariom Builds', url: 'https://hariombuilds.run.place' },
          }),
        }}
      />
    </>
  );
}