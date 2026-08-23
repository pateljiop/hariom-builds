import React from 'react';

const SERVICES = [
  { number: '01', title: 'Websites', text: 'Fast, clear websites built to turn attention into enquiries.' },
  { number: '02', title: 'Automation', text: 'Practical workflows that remove repetitive manual work.' },
  { number: '03', title: 'Digital systems', text: 'Connected tools and interfaces built around how a business actually operates.' },
];

export default function HeroSection() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden grid-bg" aria-label="Hero section — Hariom Builds">
      <div className="max-w-7xl mx-auto px-6 w-full pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          <div className="lg:col-span-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary mb-7">
              Independent digital studio · Websites · Automation · Systems
            </p>

            <h1 className="max-w-5xl text-[clamp(3.5rem,8.5vw,8rem)] leading-[.9] tracking-[-.055em] font-extrabold text-foreground">
              Digital work that <span className="text-primary">works.</span>
            </h1>

            <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              <p className="text-xl md:text-2xl leading-[1.35] text-foreground/90 font-medium">
                Websites, automation and digital systems built for businesses that need a better way to operate and grow.
              </p>
              <p className="text-sm md:text-base leading-7 text-muted-foreground max-w-md">
                No template-first thinking. No unnecessary effects. Just thoughtful design, solid engineering and a clear path from problem to finished product.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo('#contact')}
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-[.12em] text-primary-foreground transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Start a project <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </button>
              <button
                onClick={() => scrollTo('#work')}
                className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-sm font-bold uppercase tracking-[.12em] text-foreground hover:border-primary hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                View selected work
              </button>
            </div>
          </div>

          <aside className="lg:col-span-4 border-t border-border pt-5 lg:border-l lg:border-t-0 lg:pl-8" aria-label="Services">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[.28em] text-muted-foreground">What I build</span>
              <span className="text-[10px] font-bold uppercase tracking-[.2em] text-primary">01—03</span>
            </div>
            <div className="divide-y divide-border">
              {SERVICES.map((service) => (
                <div key={service.number} className="py-6 first:pt-0 last:pb-0">
                  <div className="flex gap-5">
                    <span className="text-[10px] font-bold tracking-widest text-primary pt-1">{service.number}</span>
                    <div>
                      <h2 className="text-lg font-bold tracking-tight text-foreground">{service.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-20 lg:mt-28 border-y border-border py-4 flex flex-wrap items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[.2em] text-muted-foreground">
          <span>Design</span><span className="text-border">/</span><span>Development</span><span className="text-border">/</span><span>Automation</span><span className="text-border">/</span><span>Systems</span>
          <span className="text-primary">Available for selected projects</span>
        </div>
      </div>
    </section>
  );
}
