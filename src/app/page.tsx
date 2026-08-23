import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ScrollStorySection from './components/ScrollStorySection';
import SolutionsSection from './components/SolutionsSection';
import WorkSection from './components/WorkSection';
import LabsSection from './components/LabsSection';
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
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <Header />

      <main id="main-content">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Scroll Story / Philosophy */}
        <ScrollStorySection />

        {/* 3. Solutions */}
        <SolutionsSection />

        {/* 4. Work */}
        <WorkSection />

        {/* 5. Labs */}
        <LabsSection />

        {/* 6. Technology */}
        <TechOrbitSection />

        {/* 7. Process */}
        <ProcessSection />

        {/* 8. Why Hariom Builds */}
        <WhySection />

        {/* 9. Founder */}
        <FounderSection />

        {/* 10. Vision */}
        <VisionSection />

        {/* 11. Social */}
        <SocialSection />

        {/* 12. Contact */}
        <ContactSection />
      </main>

      <Footer />

      {/* Easter egg */}
      <EasterEgg />

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Hariom Builds',
            url: 'https://hariombuilds.run.place',
            logo: "https://img.rocket.new/generatedImages/rocket_gen_img_12a9e7e84-1774425142774.png",
            description: 'Hariom Builds creates websites, automation and digital systems that help businesses improve their digital presence and workflows.',
            sameAs: [
            'https://github.com/hariombuilds',
            'https://linkedin.com/company/hariombuilds',
            'https://instagram.com/hariombuilds']

          })
        }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Hariom Builds — Websites, Automation & Digital Systems',
            url: 'https://hariombuilds.run.place',
            description: 'Websites, automation and digital systems built around real business problems.'
          })
        }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Hariom Builds',
            applicationCategory: 'BusinessApplication',
            offers: {
              '@type': 'Offer',
              description: 'Websites, automation and digital systems for businesses'
            }
          })
        }} />

    </>);

}