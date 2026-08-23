'use client';
import React, { useRef, useEffect, useState } from 'react';

const TIMELINE = [
  { year: '2026', phase: 'BUILDS', items: ['Websites', 'Automation', 'Digital Systems'], active: true },
  { year: '2027', phase: 'SYSTEMS', items: ['Repeatable Workflows', 'Packaged Solutions', 'Client Frameworks'], active: false },
  { year: '2028', phase: 'PRODUCTS', items: ['SaaS Tools', 'Business Dashboards', 'Lead Intelligence'], active: false },
  { year: '2029+', phase: 'PLATFORMS', items: ['Multi-tenant Systems', 'API Products', 'Ecosystem'], active: false },
  { year: 'VISION', phase: 'TECHNOLOGY COMPANY', items: ['Scale beyond one person', 'Systems that serve thousands'], active: false },
];

export default function VisionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-idx') || '-1', 10);
            if (idx !== -1) {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, idx]);
                entry.target.classList.add('revealed');
              }, idx * 200);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionRef.current?.querySelectorAll('[data-idx]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
      aria-labelledby="vision-heading"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blob-blue opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal-up" data-idx="0">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 block">The Long Game</span>
          <h2
            id="vision-heading"
            className="text-section-title font-extrabold uppercase text-foreground mb-4"
          >
            FROM BUILDS TO{' '}
            <span className="text-gradient-cyan">PRODUCTS.</span>
          </h2>
          <p className="text-muted-foreground text-lg italic">We are building one system at a time.</p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-4">
          {TIMELINE.map((item, i) => (
            <div
              key={item.phase}
              data-idx={i + 1}
              className="reveal-up glass-card rounded-2xl p-6 gradient-border flex items-start gap-6 group hover:scale-[1.01] transition-transform"
            >
              <div className="flex-shrink-0 text-center min-w-[64px]">
                <span className="text-xs font-extrabold text-primary block">{item.year}</span>
                <div
                  className="mt-2 w-3 h-3 rounded-full mx-auto"
                  style={{
                    background: item.active ? '#00D2FF' : 'rgba(0,210,255,0.2)',
                    boxShadow: item.active ? '0 0 12px rgba(0,210,255,0.6)' : 'none',
                  }}
                  aria-hidden="true"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-base font-extrabold text-foreground mb-2 tracking-tight">{item.phase}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.items.map((it) => (
                    <span
                      key={it}
                      className="text-[10px] font-medium text-muted-foreground px-2 py-1 rounded bg-muted/50 border border-border"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>

              {item.active && (
                <div className="flex-shrink-0">
                  <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary">
                    NOW
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}