'use client';
import React, { useRef, useEffect } from 'react';

const PRINCIPLES = [
  { number: '01', title: 'BUSINESS FIRST', statement: 'Technology should solve a real problem.', detail: 'We don\'t start with tools — we start with understanding the business. The right solution only becomes clear after the right questions.', color: '#007BFF' },
  { number: '02', title: 'CUSTOM WHEN NECESSARY', statement: "Don\'t force a business into a generic template.", detail: 'Some businesses need a WordPress site. Some need a custom system. We build what actually fits — not what\'s easiest to sell.', color: '#00D2FF' },
  { number: '03', title: 'BUILD FOR THE FUTURE', statement: 'A project can become a system, product or platform.', detail: 'Every build is designed with growth in mind. A website today can become a full digital system tomorrow.', color: '#FF2055' },
];

export default function WhySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.querySelectorAll('.reveal-up').forEach((el, i) => setTimeout(() => el.classList.add('revealed'), i * 150));
      });
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why" ref={sectionRef} className="py-24 px-6 relative" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal-up">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 block">The Difference</span>
          <h2 id="why-heading" className="text-section-title font-extrabold uppercase text-foreground">WHY <span className="text-gradient-cyan">HARIOM BUILDS</span></h2>
        </div>

        <div className="space-y-6">
          {PRINCIPLES.map((p, i) => (
            <div key={p.number} className="reveal-up glass-card rounded-2xl p-8 md:p-12 gradient-border group hover:scale-[1.01] transition-transform" style={{ transitionDelay: `${i * 120}ms` }} role="article">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2 flex items-center gap-4"><span className="text-5xl font-extrabold opacity-20 leading-none" style={{ color: p.color }} aria-hidden="true">{p.number}</span></div>
                <div className="md:col-span-4"><span className="text-[9px] font-bold tracking-[0.25em] uppercase block mb-2" style={{ color: p.color }}>{p.title}</span><h3 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight italic">{p.statement}</h3></div>
                <div className="md:col-span-6"><p className="text-muted-foreground leading-relaxed">{p.detail}</p></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-primary/20 glass-card p-8 md:p-10 reveal-up">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-primary">Have a real business problem?</span>
              <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-foreground">Let&apos;s figure out what should actually be built.</h3>
              <p className="mt-3 text-sm text-muted-foreground max-w-2xl">Tell me what is slowing the business down. If a website, automation, or custom system is not the right answer, I&apos;ll say so.</p>
            </div>
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="shrink-0 px-7 py-4 rounded-full bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-all glow-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Discuss a business problem with Hariom">Discuss a Problem <span aria-hidden="true">→</span></button>
          </div>
        </div>
      </div>
    </section>
  );
}
