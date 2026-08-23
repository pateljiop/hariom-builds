'use client';
import React, { useRef, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function FounderSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-left, .reveal-fade').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="founder"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
      aria-labelledby="founder-heading">

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] blob-cyan opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-16 gradient-border overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none" aria-hidden="true"
          style={{ background: 'radial-gradient(circle at right, #00D2FF 0%, transparent 70%)' }} />


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Image column */}
            <div className="lg:col-span-4 reveal-left flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-64 rounded-3xl overflow-hidden border-2 border-primary/20 glow-cyan">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1a3a94bbd-1770277206594.png"
                    alt="Hariom, founder of Hariom Builds — developer and systems builder working at desk"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full" />

                </div>
                {/* Badge */}
                <div className="absolute -bottom-4 -right-4 glass px-5 py-3 rounded-2xl border border-primary/20 glow-cyan">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Lead Architect</span>
                </div>
              </div>
            </div>

            {/* Content column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="reveal-up">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 block">The Founder</span>
                <h2
                  id="founder-heading"
                  className="text-section-title font-extrabold uppercase text-foreground">

                  BUILT BY{' '}
                  <span className="text-gradient-cyan">HARIOM.</span>
                </h2>
              </div>

              <blockquote className="reveal-up delay-100 text-xl md:text-2xl font-light text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-6 italic">
                "Hariom Builds started as a one-person technology studio focused on websites, automation and digital systems."
              </blockquote>

              <p className="reveal-up delay-200 text-muted-foreground leading-relaxed">
                The long-term goal is to turn individual builds and experiments into repeatable systems, products and technology that can serve businesses at scale.
              </p>

              {/* Stats */}
              <div className="reveal-up delay-300 grid grid-cols-3 gap-6 pt-4 border-t border-border">
                {[
                { value: '10+', label: 'Projects Built' },
                { value: '5+', label: 'Automation Systems' },
                { value: '100%', label: 'Open to Collaboration' }]?.
                map((stat) =>
                <div key={stat?.label}>
                    <span className="block text-2xl font-extrabold text-primary">{stat?.value}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat?.label}</span>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="reveal-up delay-400 flex flex-wrap gap-4">
                <a
                  href="https://hariom-portfolio.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-all glow-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Visit Hariom's personal portfolio">

                  Meet Hariom →
                </a>
                <a
                  href="https://github.com/hariombuilds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-full font-bold text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="View Hariom Builds on GitHub">

                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}