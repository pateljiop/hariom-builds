'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import UniverseExperience from './components/UniverseExperience';
import '../styles/universe.css';

export default function HomePage() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return;

    const lenis = new Lenis({ duration: 0.9, smoothWheel: true, syncTouch: false });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <UniverseExperience />;
}
