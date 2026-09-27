'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import BootSequence from './components/BootSequence';
import HeroSection from './components/HeroSection';
import ServicesBento from './components/ServicesBento';
import MeetBuilder from './components/MeetBuilder';
import SystemsBlueprint from './components/SystemsBlueprint';
import ProjectsSection from './components/ProjectsSection';
import DevTerminal from './components/DevTerminal';
import TechMatrix from './components/TechMatrix';
import PricingTiers from './components/PricingTiers';
import Footer from './components/Footer';

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false });
    let frame = 0;
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(frame); lenis.destroy(); };
  }, []);

  return (
    <>
      <BootSequence />
      <header className="studio-nav">
        <div className="studio-shell nav-inner-new">
          <a href="#hero" className="nav-brand-new">HARIOM<span>BUILDS</span></a>
          <nav>
            <a href="#services">Services</a><a href="#builder">Builder</a><a href="#systems">Systems</a><a href="#projects">Work</a><a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="mailto:ahuzahariom@gmail.com?subject=HariomBuilds%20Intro">LET'S BUILD <span>↗</span></a>
        </div>
      </header>
      <main>
        <HeroSection /><ServicesBento /><MeetBuilder /><SystemsBlueprint /><ProjectsSection /><DevTerminal /><TechMatrix /><PricingTiers />
      </main>
      <Footer />
    </>
  );
}