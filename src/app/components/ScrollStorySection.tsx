'use client';
import React, { useEffect, useRef } from 'react';

const STEPS = [
  {
    number: '01',
    label: 'BUSINESS PROBLEM',
    title: 'Every business has a digital bottleneck.',
    description: 'Outdated websites, manual workflows, disconnected systems — the friction that slows growth.',
    color: '#FF2055',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 16h8M16 12v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: '02',
    label: 'DIGITAL SOLUTION',
    title: 'Technology should answer the problem.',
    description: 'Websites and systems built around how the business actually works — not generic templates.',
    color: '#007BFF',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="26" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 10h26" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7" cy="7.5" r="1" fill="currentColor" />
        <circle cx="11" cy="7.5" r="1" fill="currentColor" />
        <path d="M10 15l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 21h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '03',
    label: 'AUTOMATION',
    title: 'Repetitive work becomes a system.',
    description: 'Workflows that run with less manual effort — more output, less friction, more scale.',
    color: '#00D2FF',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="8" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 16h5l2-8h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 16h5l2 8h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '04',
    label: 'GROWTH',
    title: 'Systems that scale as the business grows.',
    description: 'From first launch to product to platform — built to grow beyond its starting point.',
    color: '#00D2FF',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 24l7-8 5 4 7-12 5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 8l4-4-4 0 0 4" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ScrollStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.2 }
    );

    stepsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="py-24 px-6 relative overflow-hidden"
      aria-labelledby="philosophy-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 block">The Philosophy</span>
          <h2
            id="philosophy-heading"
            className="text-section-title font-extrabold uppercase text-foreground mb-6"
          >
            EVERY BUSINESS HAS A{' '}
            <span className="text-gradient-accent">DIGITAL BOTTLENECK.</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            We start with the problem. Then we decide what to build.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" aria-hidden="true" />

          <div className="space-y-6 md:space-y-0">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => { stepsRef.current[i] = el; }}
                className={`reveal-up delay-${(i + 1) * 100} relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
                  i % 2 === 0 ? '' : 'md:[direction:rtl]'
                } mb-8 md:mb-16`}
              >
                <div className={`glass-card p-8 rounded-2xl gradient-border group hover:scale-[1.02] transition-transform ${i % 2 !== 0 ? 'md:[direction:ltr]' : ''}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${step.color}15`, color: step.color }}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-[9px] font-bold tracking-[0.3em] uppercase" style={{ color: step.color }}>
                        {step.label}
                      </span>
                      <div
                        className="text-4xl font-extrabold opacity-10 leading-none"
                        style={{ color: step.color }}
                        aria-hidden="true"
                      >
                        {step.number}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 items-center justify-center z-10"
                  style={{ borderColor: step.color, background: '#0D0F1A' }}
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: step.color }} />
                </div>

                {/* Empty side for alternating layout */}
                <div aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>

        {/* Big statement */}
        <div className="text-center mt-16 pt-16 border-t border-border">
          <p className="text-2xl md:text-4xl font-extrabold text-foreground italic">
            "We start with the problem.{' '}
            <span className="text-gradient-cyan">Then we decide what to build.</span>"
          </p>
        </div>
      </div>
    </section>
  );
}