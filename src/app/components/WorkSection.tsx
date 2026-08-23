'use client';
import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface Project {
  id: string;
  name: string;
  category: string;
  problem: string;
  build: string;
  improvement: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  color: string;
  audience: string;
}

const PROJECTS: Project[] = [
  {
    id: 'roofing',
    name: 'ROOFING LEAD-GEN WEBSITE',
    category: 'Web · Lead Generation',
    problem: 'Visitors need a faster path to a quote',
    build: 'Service-first homepage + estimate CTA',
    improvement: 'Clearer path from visit → enquiry',
    description: 'A conversion-focused concept for a local roofing company, built around services, trust signals, project proof and a prominent estimate journey.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1680964509418-dc4530c0e066',
    imageAlt: 'Roofing construction site with dramatic industrial lighting',
    color: '#007BFF',
    audience: 'Roofing · Construction · Home services',
  },
  {
    id: 'laundry',
    name: 'LAUNDRY BOOKING SYSTEM',
    category: 'Web · Automation',
    problem: 'Bookings depend on manual conversations',
    build: 'Service selection + booking workflow',
    improvement: 'A simpler path to scheduled service',
    description: 'A digital-service concept combining a clear service catalogue, booking flow and automation-ready structure for a local laundry business.',
    tags: ['Next.js', 'React', 'Python', 'Automation'],
    image: 'https://images.unsplash.com/photo-1506584189510-7730e438e4ed',
    imageAlt: 'Modern laundry facility with rows of machines',
    color: '#00D2FF',
    audience: 'Laundry · Cleaning · Local services',
  },
  {
    id: 'masonry',
    name: 'MASONRY PROJECT SHOWCASE',
    category: 'Web · Portfolio',
    problem: 'Great work is difficult to evaluate before contact',
    build: 'Project gallery + service storytelling',
    improvement: 'Proof is visible before the first call',
    description: 'A visual portfolio concept for a masonry contractor, designed to let prospects quickly understand craftsmanship, services and completed work.',
    tags: ['Next.js', 'TypeScript', 'CSS Grid', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1620481496982-e76609d4aef4',
    imageAlt: 'Detailed masonry wall and stone construction texture',
    color: '#FF2055',
    audience: 'Masonry · Contractors · Skilled trades',
  },
  {
    id: 'automation',
    name: 'CONTENT AUTOMATION SYSTEM',
    category: 'Automation · DevOps',
    problem: 'Routine content updates consume developer time',
    build: 'Python + scheduled GitHub workflow',
    improvement: 'Repeatable updates with less manual work',
    description: 'A real automation build using Python and GitHub Actions to handle recurring portfolio content updates on a schedule.',
    tags: ['Python', 'GitHub Actions', 'APIs', 'Automation'],
    image: 'https://images.unsplash.com/photo-1680992046626-418f7e910589',
    imageAlt: 'Server room representing automated infrastructure and workflows',
    color: '#00D2FF',
    audience: 'Content ops · Internal tools · Developer workflows',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;
    setTilt({ x: x * 8, y: y * 8 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
      className="glass-card rounded-2xl overflow-hidden gradient-border reveal-up group"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transitionDelay: `${index * 120}ms`,
        transition: 'transform 0.1s ease, box-shadow 0.3s ease',
        boxShadow: hovered ? `0 30px 80px -20px ${project.color}25` : undefined,
      }}
      role="article"
      aria-label={project.name}
    >
      <div className="relative h-52 overflow-hidden">
        <AppImage
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(13,15,26,0.92) 0%, rgba(13,15,26,0.3) 60%, transparent 100%)' }}
          aria-hidden="true"
        />
        <div className="absolute top-4 left-4">
          <span className="tech-tag" style={{ borderColor: `${project.color}40`, color: project.color, background: `${project.color}10` }}>
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-base font-extrabold text-foreground tracking-tight">{project.name}</h3>
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.12em] mt-2">Built for: {project.audience}</p>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.08em] flex-wrap">
          <span className="text-muted-foreground">{project.problem}</span>
          <span style={{ color: project.color }} aria-hidden="true">→</span>
          <span className="text-foreground">{project.build}</span>
          <span style={{ color: project.color }} aria-hidden="true">→</span>
          <span style={{ color: project.color }}>{project.improvement}</span>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

        <div className={`flex flex-wrap gap-2 transition-all duration-300 ${hovered ? 'opacity-100' : 'opacity-70'}`}>
          {project.tags.map((tag) => <span key={tag} className="tech-tag">{tag}</span>)}
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Link
            href={`/case-study-detail?project=${project.id}`}
            className="w-full text-center py-2.5 border border-border text-foreground rounded-full text-xs font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Explore Build →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function WorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 130);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-24 px-6 relative" aria-labelledby="work-heading">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-red pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 block">Selected Builds</span>
            <h2 id="work-heading" className="text-section-title font-extrabold uppercase text-foreground">
              BUILT AT <span className="text-gradient-cyan">HARIOM BUILDS</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Four focused builds showing how I approach websites, lead generation, visual proof and automation. Concepts are clearly labelled; no invented client results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
        </div>
      </div>
    </section>
  );
}
