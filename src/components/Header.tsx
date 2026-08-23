'use client';
import React, { useState, useEffect, useRef } from 'react';

import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Work', href: '#work' },
  { label: 'Labs', href: '#labs' },
  { label: 'About', href: '#founder' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [easterEggMsg, setEasterEggMsg] = useState('');
  const easterTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLogoClick = () => {
    const newCount = logoClickCount + 1;
    setLogoClickCount(newCount);
    if (newCount >= 3) {
      setEasterEggMsg('SYSTEM STATUS: BUILDING...');
      setLogoClickCount(0);
      if (easterTimerRef.current) clearTimeout(easterTimerRef.current);
      easterTimerRef.current = setTimeout(() => setEasterEggMsg(''), 3000);
    }
  };

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'glass py-3 border-b border-border' : 'py-5 bg-transparent'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-label="Hariom Builds home"
          >
            <AppLogo size={32} />
            <span className="font-sans font-extrabold text-base tracking-tight text-foreground group-hover:text-primary transition-colors">
              HARIOM<span className="text-primary">.</span>BUILDS
            </span>
          </button>

          {/* Easter egg message */}
          {easterEggMsg && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-4 py-2 glass rounded-full text-primary text-xs font-bold tracking-widest uppercase easter-egg-active">
              {easterEggMsg}
            </div>
          )}

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-all glow-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Start a project with Hariom Builds"
            >
              Start a Project
              <span aria-hidden="true">→</span>
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className={`block h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
              <span className={`block h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-5'}`} />
              <span className={`block h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(13,15,26,0.97)', backdropFilter: 'blur(20px)' }}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 px-8">
          <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
            {navLinks.map((link, i) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-2xl font-extrabold uppercase tracking-[0.15em] text-foreground hover:text-primary transition-colors focus:outline-none"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-4 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-sm uppercase tracking-widest hover:bg-secondary transition-all glow-cyan"
          >
            Start a Project →
          </button>
        </div>
      </div>
    </>
  );
}