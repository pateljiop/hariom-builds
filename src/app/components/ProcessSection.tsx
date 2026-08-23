'use client';
import React, { useEffect, useRef } from 'react';

const STAGES = [
  { number: '01', title: 'DISCOVER', description: 'Understand the business, its goals, audience, and how the work happens today.' },
  { number: '02', title: 'IDENTIFY', description: 'Find the bottleneck that is actually worth solving — not just the most obvious request.' },
  { number: '03', title: 'PLAN', description: 'Define the right scope, priorities, and technical direction before production starts.' },
  { number: '04', title: 'DESIGN', description: 'Shape a clear experience and system architecture around the people using it.' },
  { number: '05', title: 'BUILD', description: 'Develop the product with clean engineering, reliable integrations, and attention to detail.' },
  { number: '06', title: 'TEST', description: 'Check usability, responsiveness, performance, and the details that matter in real use.' },
  { number: '07', title: 'LAUNCH', description: 'Move the finished work into production with a stable, measured handoff.' },
  { number: '08', title: 'IMPROVE', description: 'Use real feedback and usage to keep the product useful after launch.' },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.12 }
    );

    root.querySelectorAll('.process-step').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="process-section relative overflow-hidden" aria-labelledby="process-heading">
      <div className="process-backdrop" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="process-intro grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-24 items-end">
          <div>
            <p className="eyebrow">How I work</p>
            <h2 id="process-heading" className="process-title">
              From problem <span>to product.</span>
            </h2>
          </div>
          <p className="process-lead">
            A straightforward process built around understanding the business first — then designing and building only what creates a useful outcome.
          </p>
        </div>

        <div className="process-rule" aria-hidden="true" />

        <div className="process-grid">
          {STAGES.map((stage, index) => (
            <article
              key={stage.number}
              className="process-step reveal-up"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="process-step-top">
                <span className="process-number">{stage.number}</span>
                <span className="process-index">0{index + 1} / 08</span>
              </div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </article>
          ))}
        </div>

        <div className="process-footer">
          <span>01 — Understand</span>
          <span className="process-footer-line" aria-hidden="true" />
          <span>08 — Improve</span>
        </div>
      </div>
    </section>
  );
}
