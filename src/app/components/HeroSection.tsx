'use client';
import React, { useEffect, useRef, useState } from 'react';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
  orbitAngle: number;
}

const NODES: Node[] = [
  { id: 'core', label: 'DIGITAL SYSTEM', x: 50, y: 50, color: '#00D2FF', size: 48, orbitRadius: 0, orbitSpeed: 0, orbitAngle: 0 },
  { id: 'web', label: 'WEB', x: 0, y: 0, color: '#007BFF', size: 32, orbitRadius: 110, orbitSpeed: 0.4, orbitAngle: 0 },
  { id: 'auto', label: 'AUTO', x: 0, y: 0, color: '#00D2FF', size: 28, orbitRadius: 110, orbitSpeed: 0.4, orbitAngle: 120 },
  { id: 'ai', label: 'AI', x: 0, y: 0, color: '#FF2055', size: 28, orbitRadius: 110, orbitSpeed: 0.4, orbitAngle: 240 },
  { id: 'react', label: 'React', x: 0, y: 0, color: '#61DAFB', size: 20, orbitRadius: 170, orbitSpeed: 0.25, orbitAngle: 30 },
  { id: 'nextjs', label: 'Next.js', x: 0, y: 0, color: '#FFFFFF', size: 20, orbitRadius: 170, orbitSpeed: 0.25, orbitAngle: 150 },
  { id: 'ts', label: 'TS', x: 0, y: 0, color: '#3178C6', size: 18, orbitRadius: 170, orbitSpeed: 0.25, orbitAngle: 270 },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    let t = 0;

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2 + (mouseRef.current.x - 0.5) * 20;
      const cy = h / 2 + (mouseRef.current.y - 0.5) * 20;

      // Orbit rings
      [110, 170].forEach((r, i) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = i === 0 ? 'rgba(0,210,255,0.08)' : 'rgba(0,123,255,0.05)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Compute node positions
      const nodePositions: Record<string, { x: number; y: number }> = {};
      NODES.forEach((node) => {
        if (node.orbitRadius === 0) {
          nodePositions[node.id] = { x: cx, y: cy };
          return;
        }
        const angle = ((node.orbitAngle + t * node.orbitSpeed) * Math.PI) / 180;
        nodePositions[node.id] = {
          x: cx + Math.cos(angle) * node.orbitRadius,
          y: cy + Math.sin(angle) * node.orbitRadius,
        };
      });

      // Connection lines from inner to core
      ['web', 'auto', 'ai'].forEach((id) => {
        const pos = nodePositions[id];
        const corePos = nodePositions['core'];
        ctx.beginPath();
        ctx.moveTo(corePos.x, corePos.y);
        ctx.lineTo(pos.x, pos.y);
        const grad = ctx.createLinearGradient(corePos.x, corePos.y, pos.x, pos.y);
        grad.addColorStop(0, 'rgba(0,210,255,0.3)');
        grad.addColorStop(1, 'rgba(0,210,255,0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw nodes
      NODES.forEach((node) => {
        const pos = nodePositions[node.id];
        if (!pos) return;

        // Glow
        const grd = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, node.size * 1.5);
        grd.addColorStop(0, node.color + '30');
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, node.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, node.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = node.id === 'core' ? node.color : node.color + '20';
        ctx.fill();

        if (node.id !== 'core') {
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, node.size / 2, 0, Math.PI * 2);
          ctx.strokeStyle = node.color + '80';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Label
        ctx.font = `bold ${node.id === 'core' ? 11 : 9}px Plus Jakarta Sans, sans-serif`;
        ctx.fillStyle = node.id === 'core' ? '#0D0F1A' : node.color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        if (node.id === 'core') {
          ctx.fillText(node.label, pos.x, pos.y);
        } else {
          ctx.fillStyle = node.color;
          ctx.fillText(node.label, pos.x, pos.y + node.size / 2 + 12);
        }
      });

      // Particles along connections
      if (t % 3 < 1) {
        ['web', 'auto', 'ai'].forEach((id, idx) => {
          const pos = nodePositions[id];
          const corePos = nodePositions['core'];
          const progress = ((t * 0.8 + idx * 40) % 100) / 100;
          const px = corePos.x + (pos.x - corePos.x) * progress;
          const py = corePos.y + (pos.y - corePos.y) * progress;
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = '#00D2FF';
          ctx.fill();
        });
      }

      t += 0.5;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mounted]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
      aria-label="Hero section — Hariom Builds"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] blob-cyan pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] blob-blue pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-28 pb-20">
        {/* Left content */}
        <div className="lg:col-span-7 space-y-8 reveal-up revealed">
          {/* Label */}
          <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-primary">
              HARIOM BUILDS / DIGITAL TECHNOLOGY STUDIO
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-hero-xl text-foreground font-extrabold uppercase">
            BUILDING WHAT{' '}
            <span className="text-gradient-cyan text-glow-cyan">BUSINESSES</span>
            <br />
            NEED TO GROW.
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
            Websites, automation and digital systems designed around real business problems.
            Not templates. Not guesswork. Solutions that make sense.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-5">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="magnetic-btn group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-sm uppercase tracking-widest hover:bg-secondary transition-all glow-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Start a project with Hariom Builds"
            >
              Start a Project
              <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </button>

            <button
              onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              className="magnetic-btn group flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-full font-bold text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Explore what Hariom Builds creates"
            >
              Explore What We Build
              <span className="inline-block transition-transform group-hover:translate-y-0.5" aria-hidden="true">↓</span>
            </button>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 pt-2" aria-label="Technologies used">
            {[
              { name: 'Next.js', delay: '0.1s' },
              { name: 'React', delay: '0.4s' },
              { name: 'TypeScript', delay: '0.7s' },
              { name: 'GSAP', delay: '1.0s' },
              { name: 'Three.js', delay: '1.3s' },
              { name: 'Python', delay: '1.6s' },
            ].map((tech) => (
              <span key={tech.name} className="tech-tag float-medium" style={{ animationDelay: tech.delay }}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Canvas orbital system */}
        <div className="lg:col-span-5 relative h-[380px] lg:h-[500px]" aria-label="Interactive digital system visualization">
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ width: '100%', height: '100%' }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3" aria-hidden="true">
        <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-primary scroll-line" />
        </div>
      </div>
    </section>
  );
}