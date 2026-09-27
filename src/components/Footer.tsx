'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

type FooterLink = { label: string; href: string; external?: boolean };

const footerLinks: Record<string, FooterLink[]> = {
  Solutions: [
    { label: 'Web', href: '#solutions' },
    { label: 'Automation', href: '#solutions' },
    { label: 'Software', href: '#solutions' },
    { label: 'AI', href: '#solutions' },
  ],
  Company: [
    { label: 'About', href: '#founder' },
    { label: 'Work', href: '#work' },
    { label: 'Labs', href: '#labs' },
    { label: 'Vision', href: '#vision' },
    { label: 'Contact', href: '#contact' },
  ],
  Connect: [
    { label: 'GitHub', href: 'https://github.com/pateljiop', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/pateljiop', external: true },
    { label: 'Instagram', href: 'https://instagram.com/hariompatel.dev', external: true },
    { label: 'Telegram', href: 'https://t.me/hariompatel.dev', external: true },
    { label: 'Email', href: 'mailto:ahuzahariom@gmail.com', external: true },
  ],
  Personal: [
    { label: 'Hariom Portfolio', href: 'https://hariom-portfolio.pages.dev', external: true },
  ],
};

export default function LegacyFooter() {
  const [year, setYear] = useState('2026');

  useEffect(() => setYear(new Date().getFullYear().toString()), []);

  const handleSectionClick = (href: string) => {
    if (href.startsWith('#')) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 pt-16 pb-8 px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{group}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-cyan-300">{link.label}</a>
                    ) : (
                      <button onClick={() => handleSectionClick(link.href)} className="text-sm text-slate-400 hover:text-cyan-300">{link.label}</button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-3"><AppLogo size={28} /><span>HARIOM.BUILDS</span></div>
          <div className="flex items-center gap-4">
            <span>© {year} Hariom Builds</span>
            <Link href="/case-study-detail">Work</Link>
            <a href="mailto:ahuzahariom@gmail.com">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
