'use client';
import React from 'react';

const SERVICES = [
  { number: '01', title: 'Websites', text: 'High-converting websites and landing pages that make a business look credible and give visitors a clear next step.' },
  { number: '02', title: 'Automation', text: 'Lean workflows that remove repetitive work, connect tools and keep day-to-day operations moving.' },
  { number: '03', title: 'Digital systems', text: 'Custom tools and interfaces built around the way a business actually operates.' },
];

export default function HeroSection() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative overflow-hidden border-b border-border" aria-label="Hariom Builds digital studio">
      <div className="absolute inset-0 pointer-events-none hero-ambient" aria-hidden="true" />
      <div className="relative max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-10 pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-20">
        <div className="flex items-center gap-3 mb-10 lg:mb-14">
          <span className="h-px w-8 bg-primary" />
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.26em] text-primary">Independent digital studio</p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-14 lg:gap-20 items-end">
          <div>
            <h1 className="max-w-[980px] text-[clamp(4rem,8.4vw,8.8rem)] leading-[0.84] tracking-[-0.065em] font-extrabold text-foreground">
              We build digital
              <br />
              <span className="text-primary">systems that work.</span>
            </h1>
            <div className="mt-10 lg:mt-12 max-w-3xl">
              <p className="text-xl sm:text-2xl lg:text-[1.65rem] leading-[1.35] tracking-[-0.02em] text-foreground/90">Websites, automation and custom digital systems for businesses that want to look credible, work smarter and grow.</p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => scrollTo('#contact')} className="group inline-flex items-center gap-4 rounded-full bg-primary px-7 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(199,255,61,.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">Start a project <span className="text-base transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></button>
              <button onClick={() => scrollTo('#work')} className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-foreground/40 hover:bg-foreground/[.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">Selected builds <span aria-hidden="true">↗</span></button>
            </div>
          </div>

          <aside className="lg:mb-1" aria-label="What Hariom Builds offers">
            <div className="border-t border-border pt-5">
              <div className="flex items-center justify-between mb-7"><span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">What Hariom Builds</span><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">01 — 03</span></div>
              <div>{SERVICES.map((service, index) => <div key={service.number} className={`group py-5 ${index !== SERVICES.length - 1 ? 'border-b border-border' : ''}`}><div className="flex gap-5"><span className="text-[10px] font-bold tracking-[0.15em] text-primary pt-1">{service.number}</span><div><h2 className="text-base sm:text-lg font-bold tracking-[-0.015em] text-foreground">{service.title}</h2><p className="mt-2 text-[13px] leading-6 text-muted-foreground">{service.text}</p></div></div></div>)}</div>
            </div>
          </aside>
        </div>

        <div className="mt-20 lg:mt-28 flex items-center justify-between border-t border-border pt-5">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Strategy · Design · Development · Systems</span>
          <button onClick={() => scrollTo('#solutions')} className="hidden sm:flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">Explore the studio <span className="text-primary">↓</span></button>
        </div>
      </div>
    </section>
  );
}
