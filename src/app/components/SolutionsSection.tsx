'use client';
import React, { useRef, useEffect, useState } from 'react';

interface Solution {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
  span: string;
  icon: React.ReactNode;
}

const SOLUTIONS: Solution[] = [
  {
    number: '01',
    category: 'WEB',
    title: 'Websites & Digital Experiences',
    description: 'Business websites and landing pages designed to communicate clearly and turn attention into action. Not templates — built around how visitors actually make decisions.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    color: '#007BFF',
    span: 'md:col-span-2',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="7" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 13h32" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="9" cy="10" r="1.5" fill="currentColor" />
        <circle cx="14" cy="10" r="1.5" fill="currentColor" />
        <path d="M12 20l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 28h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 33h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    category: 'AUTOMATE',
    title: 'Business Automation',
    description: 'Repetitive workflows turned into systems that run with less manual effort.',
    tags: ['Python', 'n8n', 'APIs', 'Workflows'],
    color: '#00D2FF',
    span: '',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="8" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="32" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="32" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 20h6l3-10h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 20h6l3 10h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: '03',
    category: 'SOFTWARE',
    title: 'Custom Digital Systems',
    description: 'Tools and interfaces built around how a business actually operates.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'APIs'],
    color: '#FF2055',
    span: '',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="5" y="8" width="30" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 15h30" stroke="currentColor" strokeWidth="1.5" />
        <rect x="9" y="19" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 19h8M23 23h8M23 27h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '04',
    category: 'AI',
    title: 'Intelligent Systems',
    description: 'Practical AI integrated where it can improve a real workflow. No exaggerated claims — just useful automation.',
    tags: ['OpenAI', 'Python', 'APIs', 'Automation'],
    color: '#00D2FF',
    span: 'md:col-span-4',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="32" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="30" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="32" cy="30" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 12l6 6M29 12l-6 6M11 28l6-6M29 28l-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function SolutionCard({ solution, index }: { solution: Solution; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;
    setTilt({ x: x * 12, y: y * 12 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
      className={`${solution.span} glass-card rounded-2xl p-8 gradient-border cursor-pointer transition-all duration-300 reveal-up`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transitionDelay: `${index * 100}ms`,
        borderColor: hovered ? `${solution.color}30` : undefined,
        boxShadow: hovered ? `0 20px 60px -20px ${solution.color}20` : undefined,
      }}
      role="article"
      aria-label={`${solution.category}: ${solution.title}`}
    >
      <div className="flex items-start justify-between mb-6">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors"
          style={{
            background: hovered ? `${solution.color}20` : `${solution.color}10`,
            color: solution.color,
          }}
        >
          {solution.icon}
        </div>
        <span
          className="text-5xl font-extrabold opacity-10 leading-none"
          style={{ color: solution.color }}
          aria-hidden="true"
        >
          {solution.number}
        </span>
      </div>

      <span
        className="text-[9px] font-bold tracking-[0.3em] uppercase mb-3 block"
        style={{ color: solution.color }}
      >
        {solution.category}
      </span>
      <h3 className="text-xl font-extrabold text-foreground mb-3 leading-tight">{solution.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{solution.description}</p>

      <div className="flex flex-wrap gap-2">
        {solution.tags.map((tag) => (
          <span key={tag} className="tech-tag" style={{ borderColor: `${solution.color}30`, color: solution.color, background: `${solution.color}08` }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SolutionsSection() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="solutions"
      className="py-24 px-6 relative"
      aria-labelledby="solutions-heading"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-blue pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 block">What We Build</span>
            <h2
              id="solutions-heading"
              className="text-section-title font-extrabold uppercase text-foreground"
            >
              TECHNOLOGY ISN&apos;T THE<br />
              <span className="text-gradient-cyan">STARTING POINT.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Four capabilities. One philosophy: understand the business first, then build.
          </p>
        </div>

        {/* BENTO GRID AUDIT:
            Array: [Web cs-2, Automate cs-1, Software cs-1, AI cs-4]
            Row 1: [col-1-2: Web cs-2] [col-3: Automate cs-1] [col-4: Software cs-1]
            Row 2: [col-1-4: AI cs-4]
            Placed 4/4 cards ✓
        */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {SOLUTIONS.map((solution, i) => (
            <SolutionCard key={solution.number} solution={solution} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}