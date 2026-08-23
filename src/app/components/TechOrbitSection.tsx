'use client';
import React, { useRef, useEffect } from 'react';

const TECHNOLOGIES = [
  { name: 'React', color: '#61DAFB', ring: 1, angle: 0 },
  { name: 'Next.js', color: '#FFFFFF', ring: 1, angle: 72 },
  { name: 'TypeScript', color: '#3178C6', ring: 1, angle: 144 },
  { name: 'Tailwind', color: '#38BDF8', ring: 1, angle: 216 },
  { name: 'GSAP', color: '#88CE02', ring: 1, angle: 288 },
  { name: 'Three.js', color: '#049EF4', ring: 2, angle: 30 },
  { name: 'Python', color: '#3776AB', ring: 2, angle: 90 },
  { name: 'Node.js', color: '#339933', ring: 2, angle: 150 },
  { name: 'PostgreSQL', color: '#336791', ring: 2, angle: 210 },
  { name: 'GitHub', color: '#FFFFFF', ring: 2, angle: 270 },
  { name: 'Vercel', color: '#FFFFFF', ring: 2, angle: 330 },
  { name: 'n8n', color: '#EA4B71', ring: 3, angle: 20 },
  { name: 'OpenAI', color: '#10A37F', ring: 3, angle: 80 },
  { name: 'APIs', color: '#00D2FF', ring: 3, angle: 140 },
  { name: 'Docker', color: '#2496ED', ring: 3, angle: 200 },
  { name: 'Redis', color: '#DC382D', ring: 3, angle: 260 },
  { name: 'Cloudflare', color: '#F48120', ring: 3, angle: 320 },
];

const RING_RADII = { 1: 100, 2: 155, 3: 205 };
const RING_SPEEDS = { 1: 0.3, 2: 0.2, 3: 0.12 };

export default function TechOrbitSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-fade').forEach((el, i) => {
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

  useEffect(() => {
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

    let t = 0;

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;

      // Orbit rings
      ([1, 2, 3] as const).forEach((ring) => {
        const r = RING_RADII[ring];
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,210,255,${0.06 - ring * 0.01})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 10]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Center core
      const coreGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40);
      coreGrd.addColorStop(0, 'rgba(0,210,255,0.3)');
      coreGrd.addColorStop(0.5, 'rgba(0,123,255,0.15)');
      coreGrd.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(cx, cy, 40, 0, Math.PI * 2);
      ctx.fillStyle = coreGrd;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, 22, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,210,255,0.15)';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx, cy, 22, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0,210,255,0.5)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.font = 'bold 7px Plus Jakarta Sans, sans-serif';
      ctx.fillStyle = '#00D2FF';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('HARIOM', cx, cy - 5);
      ctx.fillText('BUILDS', cx, cy + 5);

      // Tech nodes
      TECHNOLOGIES.forEach((tech) => {
        const ring = tech.ring as 1 | 2 | 3;
        const r = RING_RADII[ring];
        const speed = RING_SPEEDS[ring];
        const dir = ring === 2 ? -1 : 1;
        const angle = ((tech.angle + t * speed * dir) * Math.PI) / 180;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;

        // Glow
        const grd = ctx.createRadialGradient(x, y, 0, x, y, 20);
        grd.addColorStop(0, tech.color + '25');
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Dot
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = tech.color + '40';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.strokeStyle = tech.color;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Label
        ctx.font = 'bold 8px Plus Jakarta Sans, sans-serif';
        ctx.fillStyle = tech.color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(tech.name, x, y + 8);
      });

      t += 0.5;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="py-24 px-6 relative"
      aria-labelledby="tech-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 block">The Stack</span>
          <h2
            id="tech-heading"
            className="text-section-title font-extrabold uppercase text-foreground mb-4"
          >
            THE TECHNOLOGY{' '}
            <span className="text-gradient-cyan">BEHIND THE BUILDS</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Not a skill wall with star ratings. Each technology is used for its specific job.
          </p>
        </div>

        {/* Canvas orbit */}
        <div className="relative flex justify-center reveal-fade">
          <canvas
            ref={canvasRef}
            className="w-full max-w-[480px] h-[480px]"
            style={{ width: '100%', maxWidth: '480px', height: '480px' }}
            aria-label="Technology orbit visualization showing React, Next.js, TypeScript, Python, GSAP, Three.js and more"
          />
        </div>
      </div>
    </section>
  );
}