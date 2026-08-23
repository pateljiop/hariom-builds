'use client';
import React, { useRef, useEffect } from 'react';

interface Lab {
  id: string;
  name: string;
  stack: string[];
  description: string;
  badge: string;
  color: string;
  githubUrl: string;
}

const LABS: Lab[] = [
  {
    id: 'content-auto',
    name: 'AUTOMATED CONTENT SYSTEM',
    stack: ['Python', 'GitHub Actions', 'APIs'],
    description: 'A scheduled workflow that automatically updates digital content without manual intervention.',
    badge: 'EXPERIMENT',
    color: '#00D2FF',
    githubUrl: 'https://github.com/hariombuilds',
  },
  {
    id: 'ai-chat',
    name: 'AI CHAT INTERFACE',
    stack: ['React', 'OpenAI', 'TypeScript'],
    description: 'Experimental AI chat UI exploring practical LLM integration patterns for business workflows.',
    badge: 'EXPERIMENT',
    color: '#007BFF',
    githubUrl: 'https://github.com/hariombuilds',
  },
  {
    id: '3d-portfolio',
    name: '3D PORTFOLIO TEMPLATE',
    stack: ['Three.js', 'React Three Fiber', 'GSAP'],
    description: 'Open-source 3D portfolio template exploring WebGL for creative developer portfolios.',
    badge: 'OPEN SOURCE',
    color: '#FF2055',
    githubUrl: 'https://github.com/hariombuilds',
  },
  {
    id: 'automation-snippets',
    name: 'AUTOMATION SNIPPETS',
    stack: ['Python', 'n8n', 'Webhooks'],
    description: 'A growing collection of automation scripts for common business workflow problems.',
    badge: 'OPEN SOURCE',
    color: '#00D2FF',
    githubUrl: 'https://github.com/hariombuilds',
  },
  {
    id: 'lead-intel',
    name: 'LEAD INTELLIGENCE TOOL',
    stack: ['Python', 'APIs', 'PostgreSQL'],
    description: 'Exploring how to identify businesses with specific digital problems before outreach.',
    badge: 'EXPLORING',
    color: '#007BFF',
    githubUrl: 'https://github.com/hariombuilds',
  },
  {
    id: 'gsap-experiments',
    name: 'GSAP SCROLL EXPERIMENTS',
    stack: ['GSAP', 'ScrollTrigger', 'CSS'],
    description: 'Scroll-linked animation experiments pushing what\'s possible with timeline-based interactions.',
    badge: 'EXPERIMENT',
    color: '#00D2FF',
    githubUrl: 'https://github.com/hariombuilds',
  },
];

const BADGE_COLORS: Record<string, string> = {
  'EXPERIMENT': '#007BFF',
  'OPEN SOURCE': '#00D2FF',
  'EXPLORING': '#FF2055',
};

export default function LabsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="labs"
      ref={sectionRef}
      className="py-24 px-6 relative"
      aria-labelledby="labs-heading"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blob-cyan opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 block">Experiments</span>
          <h2
            id="labs-heading"
            className="text-section-title font-extrabold uppercase text-foreground mb-4"
          >
            HARIOM BUILDS{' '}
            <span className="text-gradient-accent">LABS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            EXPERIMENTING WITH WHAT&apos;S NEXT.
          </p>
        </div>

        {/* Lab grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {LABS.map((lab, i) => (
            <div
              key={lab.id}
              className="reveal-up glass-card rounded-2xl p-6 gradient-border group hover:scale-[1.02] transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
              role="article"
              aria-label={lab.name}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                  style={{
                    background: `${BADGE_COLORS[lab.badge] || '#00D2FF'}15`,
                    border: `1px solid ${BADGE_COLORS[lab.badge] || '#00D2FF'}30`,
                    color: BADGE_COLORS[lab.badge] || '#00D2FF',
                  }}
                >
                  {lab.badge}
                </span>
                <a
                  href={lab.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  aria-label={`View ${lab.name} on GitHub`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>

              <h3 className="text-sm font-extrabold text-foreground mb-2 tracking-tight">{lab.name}</h3>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {lab.stack.map((s) => (
                  <span key={s} className="tech-tag text-[9px]">{s}</span>
                ))}
              </div>

              <p className="text-muted-foreground text-xs leading-relaxed mb-4">{lab.description}</p>

              <a
                href={lab.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                style={{ color: lab.color }}
                aria-label={`View experiment: ${lab.name}`}
              >
                View Experiment →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}