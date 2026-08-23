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
  demoUrl: string;
}

const PROJECTS: Project[] = [
{
  id: 'roofing',
  name: 'ROOFING WEBSITE CONCEPT',
  category: 'Web',
  problem: 'No clear online presence',
  build: 'Service-focused landing page',
  improvement: 'Visitors understand services immediately',
  description: 'A high-converting website concept for a local roofing business — designed to turn visitors into quote requests.',
  tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
  image: "https://images.unsplash.com/photo-1680964509418-dc4530c0e066",
  imageAlt: 'Dark industrial roofing construction site with dramatic low-light atmosphere, deep shadows, steel and concrete textures',
  color: '#007BFF',
  demoUrl: '#'
},
{
  id: 'laundry',
  name: 'LAUNDRY SERVICE CONCEPT',
  category: 'Web + Automation',
  problem: 'Manual booking process',
  build: 'Online booking + scheduling system',
  improvement: 'Bookings without phone calls',
  description: 'A complete digital presence for a laundry service — booking form, service listing, and automated confirmation workflow.',
  tags: ['Next.js', 'React', 'Python', 'Automation'],
  image: "https://images.unsplash.com/photo-1506584189510-7730e438e4ed",
  imageAlt: 'Dimly lit laundry facility with rows of machines in shadow, industrial blue-grey lighting, moody atmospheric environment',
  color: '#00D2FF',
  demoUrl: '#'
},
{
  id: 'masonry',
  name: 'MASONRY PORTFOLIO CONCEPT',
  category: 'Web',
  problem: 'Work not visible to clients',
  build: 'Visual portfolio with project gallery',
  improvement: 'Projects visible before first call',
  description: 'A portfolio-style site for a masonry contractor — showcasing work, building trust before the first conversation.',
  tags: ['Next.js', 'TypeScript', 'CSS Grid', 'GSAP'],
  image: "https://images.unsplash.com/photo-1620481496982-e76609d4aef4",
  imageAlt: 'Dark stone and concrete masonry wall in deep shadow, dramatic side lighting highlighting texture, dim construction atmosphere',
  color: '#FF2055',
  demoUrl: '#'
},
{
  id: 'automation',
  name: 'CONTENT AUTOMATION SYSTEM',
  category: 'Automation',
  problem: 'Manual content updates taking hours',
  build: 'Scheduled automation workflow',
  improvement: 'Content updates run automatically',
  description: 'A Python + GitHub Actions workflow that automates routine content updates — from hours to zero manual effort.',
  tags: ['Python', 'GitHub Actions', 'APIs', 'n8n'],
  image: "https://images.unsplash.com/photo-1680992046626-418f7e910589",
  imageAlt: 'Dark server room with dim blue LED lighting, deep shadows between racks, low-key atmospheric data center environment',
  color: '#00D2FF',
  demoUrl: '#'
}];


function ProjectCard({ project, index }: {project: Project;index: number;}) {
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
      onMouseLeave={() => {setTilt({ x: 0, y: 0 });setHovered(false);}}
      onMouseEnter={() => setHovered(true)}
      className="glass-card rounded-2xl overflow-hidden gradient-border reveal-up group"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transitionDelay: `${index * 120}ms`,
        transition: 'transform 0.1s ease, box-shadow 0.3s ease',
        boxShadow: hovered ? `0 30px 80px -20px ${project.color}25` : undefined
      }}
      role="article"
      aria-label={project.name}>

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <AppImage
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105" />

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, rgba(13,15,26,0.9) 0%, rgba(13,15,26,0.3) 60%, transparent 100%)`
          }}
          aria-hidden="true" />

        <div className="absolute top-4 left-4">
          <span className="tech-tag" style={{ borderColor: `${project.color}40`, color: project.color, background: `${project.color}10` }}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-base font-extrabold text-foreground tracking-tight">{project.name}</h3>

        {/* Narrative */}
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] flex-wrap">
          <span className="text-muted-foreground">{project.problem}</span>
          <span style={{ color: project.color }} aria-hidden="true">→</span>
          <span className="text-foreground">{project.build}</span>
          <span style={{ color: project.color }} aria-hidden="true">→</span>
          <span style={{ color: project.color }}>{project.improvement}</span>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

        {/* Tags */}
        <div className={`flex flex-wrap gap-2 transition-all duration-300 ${hovered ? 'opacity-100' : 'opacity-60'}`}>
          {project.tags.map((tag) =>
          <span key={tag} className="tech-tag">{tag}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 pt-2">
          <Link
            href="/case-study-detail"
            className="flex-1 text-center py-2.5 border border-border text-foreground rounded-full text-xs font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">

            View Project
          </Link>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            style={{
              background: `${project.color}15`,
              border: `1px solid ${project.color}40`,
              color: project.color
            }}
            aria-label={`Live demo for ${project.name}`}>

            Live Demo ↗
          </a>
        </div>
      </div>
    </div>);

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
    <section
      id="work"
      ref={sectionRef}
      className="py-24 px-6 relative"
      aria-labelledby="work-heading">

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-red pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 block">Selected Builds</span>
            <h2
              id="work-heading"
              className="text-section-title font-extrabold uppercase text-foreground">

              BUILT AT{' '}
              <span className="text-gradient-cyan">HARIOM BUILDS</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Selected builds, experiments and digital experiences. Concepts, not fake client work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) =>
          <ProjectCard key={project.id} project={project} index={i} />
          )}
        </div>
      </div>
    </section>);

}