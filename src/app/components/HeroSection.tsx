'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Cpu, Gauge, Radio, ShieldCheck } from 'lucide-react';

const CyberCore3D = dynamic(() => import('./CyberCore3D'), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden border-b border-white/10 pt-28" id="hero">
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-cyan" />
      <div className="hero-glow hero-glow-pink" />

      <div className="studio-shell relative z-10">
        <div className="telemetry-bar">
          <span><Radio size={13} /> WORKSTATION: 5 MONITORS ACTIVE</span>
          <span><Cpu size={13} /> KERNEL: PYTHON • NEXT.JS • FASTAPI</span>
          <span className="text-emerald-300"><ShieldCheck size={13} /> STATUS: ACCEPTING Q2 CLIENTS</span>
        </div>

        <div className="grid min-h-[72svh] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="eyebrow"><span className="status-dot" /> INDEPENDENT SOFTWARE STUDIO / PRAYAGRAJ</div>
            <h1 className="display-title mt-6">
              WE SHIP <span className="text-cyan">INSANE CODE</span>, SCALABLE APIS & AUTOMATED DATA ENGINES.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              HariomBuilds is an independent solo software engineering studio operated by Hariom Patel.
              Building end-to-end web platforms, Python automation pipelines, and high-performance backends.
              Zero corporate fluff. 100% execution.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a className="neon-button" href="#contact">Book 15-Min Intro Call <ArrowUpRight size={16} /></a>
              <a className="glass-button" href="#systems">Inspect Architecture <ArrowDown size={16} /></a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ['EDGE', 'Cloudflare'],
                ['API', 'FastAPI'],
                ['DATA', 'Python'],
                ['UI', 'Next.js'],
              ].map(([label, value]) => (
                <div className="metric-chip" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="core-frame">
              <div className="core-frame-label">CORE // LIVE TELEMETRY</div>
              <CyberCore3D />
              <div className="core-readout">
                <span><Gauge size={14} /> 120+ DATA NODES</span>
                <span>ORBIT / LOCKED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
