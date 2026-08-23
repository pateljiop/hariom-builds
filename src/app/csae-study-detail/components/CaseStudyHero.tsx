'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function CaseStudyHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef?.current;
    if (!el) return;
    setTimeout(() => {
      el?.querySelectorAll('.reveal-up')?.forEach((node, i) => {
        setTimeout(() => node?.classList?.add('revealed'), i * 120);
      });
    }, 100);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[70vh] flex items-end overflow-hidden pt-24"
      aria-label="Case study hero">

      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <AppImage
          src="https://images.unsplash.com/photo-1680964509418-dc4530c0e066"
          alt="Dark industrial roofing construction site with dramatic low-light atmosphere, deep shadows, steel and concrete textures"
          fill
          priority
          sizes="100vw"
          className="object-cover" />

        {/* Scrim — dark text requires light scrim, but white text on dark image needs dark scrim */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(13,15,26,0.92) 0%, rgba(13,15,26,0.6) 50%, rgba(13,15,26,0.3) 100%)' }} />

      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16 relative z-10 w-full">
        {/* Back link */}
        <div className="mb-8 reveal-up">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">

            <span aria-hidden="true">←</span>
            Back to Work
          </Link>
        </div>

        {/* Category + title */}
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-6 reveal-up">
            <span className="tech-tag">Web</span>
            <span className="tech-tag">Next.js</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Tailwind</span>
          </div>

          <h1 className="text-hero-lg font-extrabold uppercase text-foreground mb-6 reveal-up delay-100">
            ROOFING WEBSITE{' '}
            <span className="text-gradient-cyan">CONCEPT</span>
          </h1>

          {/* Narrative */}
          <div className="flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-widest reveal-up delay-200">
            <span className="text-muted-foreground">No clear online presence</span>
            <span className="text-primary" aria-hidden="true">→</span>
            <span className="text-foreground">Service-focused landing page</span>
            <span className="text-primary" aria-hidden="true">→</span>
            <span className="text-primary">Visitors understand services immediately</span>
          </div>
        </div>
      </div>
    </section>);

}