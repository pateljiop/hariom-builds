import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ScrollStorySection from './components/ScrollStorySection';
import SolutionsSection from './components/SolutionsSection';
import WorkSection from './components/WorkSection';
import LabsSection from './components/LabSection';
import TechOrbitSection from './components/TechOrbitSection';
import ProcessSection from './components/ProcessSection';
import WhySection from './components/WhySection';
import FounderSection from './components/FounderSection';
import VisionSection from './components/VisionSection';
import SocialSection from './components/SocialSection';
import ContactSection from './components/ContactSection';
import EasterEgg from './components/EasterEgg';

export default function HomePage() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Header />

      <main id="main-content">
        <HeroSection />
        <ScrollStorySection />
        <SolutionsSection />
        <WorkSection />
        <LabsSection />
        <TechOrbitSection />
        <ProcessSection />
        <WhySection />
        <FounderSection />
        <VisionSection />
        <SocialSection />
        <ContactSection />
      </main>

      <Footer />
      <EasterEgg />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Hariom Builds',
            url: 'https://hariombuilds.run.place',
            description:
              'Hariom Builds creates websites, automation and digital systems that help businesses improve their digital presence and workflows.',
            sameAs: [
              'https://github.com/pateljiop',
              'https://linkedin.com/in/pateljiop',
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Hariom Builds — Websites, Automation & Digital Systems',
            url: 'https://hariombuilds.run.place',
            description:
              'Websites, automation and digital systems built around real business problems.',
          }),
        }}
      />
    </>
  );
}
