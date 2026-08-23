'use client';
import React, { useRef, useEffect, useState } from 'react';

const STAGES = [
  { number: '01', title: 'DISCOVER', description: 'Understand the business, its goals, and how it currently operates.', color: '#00D2FF' },
  { number: '02', title: 'IDENTIFY', description: 'Find the specific bottleneck or problem worth solving.', color: '#007BFF' },
  { number: '03', title: 'PLAN', description: 'Determine what should actually be built — and what should not.', color: '#00D2FF' },
  { number: '04', title: 'DESIGN', description: 'Create the experience or system architecture.', color: '#007BFF' },
  { number: '05', title: 'BUILD', description: 'Develop and integrate with the chosen technology stack.', color: '#00D2FF' },
  { number: '06', title: 'TEST', description: 'Check performance, responsiveness, and real usability.', color: '#007BFF' },
  { number: '07', title: 'LAUNCH', description: 'Deploy to production with proper infrastructure.', color: '#00D2FF' },
  { number: '08', title: 'IMPROVE', description: 'Learn from real usage and iterate toward better outcomes.', color: '#FF2055' },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStage, setActiveStage] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = stagesRef.current.findIndex((el) => el === entry.target);
            if (idx !== -1) {
              setTimeout(() => {
                entry.target.classList.add('revealed');
                setActiveStage((prev) => Math.max(prev, idx));
              }, idx * 150);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    stagesRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[600px] blob-blue opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 block">How We Work</span>
          <h2
            id="process-heading"
            className="text-section-title font-extrabold uppercase text-foreground mb-4"
          >
            FROM PROBLEM{' '}
            <span className="text-gradient-cyan">TO PRODUCT</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md">
            Eight stages with a clear throughline: understand the business before writing a single line of code.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px"
            aria-hidden="true"
          >
            {/* Glowing segment that travels */}
            <div
              ref={lineRef}
              className="absolute top-0 left-0 w-full transition-all duration-700"
              style={{
                height: `${Math.max(0, (activeStage + 1) / STAGES.length) * 100}%`,
                background: 'linear-gradient(180deg, #00D2FF 0%, #007BFF 60%, #FF2055 100%)',
                boxShadow: '0 0 8px rgba(0,210,255,0.8)',
              }}
            />
          </div>

          <div className="space-y-8">
            {STAGES.map((stage, i) => (
              <div
                key={stage.number}
                ref={(el) => { stagesRef.current[i] = el; }}
                className={`reveal-up relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${
                  i % 2 === 0 ? 'md:text-right' : ''
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Left content (even) or spacer (odd) */}
                <div className={`${i % 2 !== 0 ? 'md:order-last' : ''}`}>
                  {i % 2 === 0 && (
                    <div className="pl-14 md:pl-0">
                      <span
                        className="text-[9px] font-bold tracking-[0.3em] uppercase block mb-1"
                        style={{ color: stage.color }}
                      >
                        Stage {stage.number}
                      </span>
                      <h3 className="text-xl font-extrabold text-foreground mb-2">{stage.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{stage.description}</p>
                    </div>
                  )}
                </div>

                {/* Center dot */}
                <div
                  className="absolute left-0 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-500"
                  style={{
                    background: i <= activeStage ? `${stage.color}20` : '#0D0F1A',
                    border: `2px solid ${i <= activeStage ? stage.color : 'rgba(255,255,255,0.1)'}`,
                    boxShadow: i <= activeStage ? `0 0 20px ${stage.color}40` : 'none',
                  }}
                  aria-hidden="true"
                >
                  <span
                    className="text-xs font-extrabold"
                    style={{ color: i <= activeStage ? stage.color : 'rgba(255,255,255,0.3)' }}
                  >
                    {stage.number}
                  </span>
                </div>

                {/* Right content (odd) or spacer (even) */}
                <div className={`${i % 2 === 0 ? 'md:order-last' : ''}`}>
                  {i % 2 !== 0 && (
                    <div className="pl-14 md:pl-12">
                      <span
                        className="text-[9px] font-bold tracking-[0.3em] uppercase block mb-1"
                        style={{ color: stage.color }}
                      >
                        Stage {stage.number}
                      </span>
                      <h3 className="text-xl font-extrabold text-foreground mb-2">{stage.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{stage.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}