'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const footerLinks = {
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
    { label: 'GitHub', href: 'https://github.com/hariombuilds', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/hariombuilds', external: true },
    { label: 'Instagram', href: 'https://instagram.com/hariombuilds', external: true },
    { label: 'Telegram', href: 'https://t.me/hariombuilds', external: true },
    { label: 'Email', href: 'mailto:hello@hariombuilds.run.place', external: true },
  ],
  Personal: [
    { label: 'Hariom Portfolio', href: 'https://hariom-portfolio.pages.dev', external: true },
  ],
};

export default function Footer() {
  const [year, setYear] = useState('2026');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const handleSectionClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border pt-16 pb-8 px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{group}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => handleSectionClick(link.href)}
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded text-left"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <AppLogo size={28} />
            <div>
              <span className="block text-sm font-extrabold tracking-tight text-foreground">
                HARIOM<span className="text-primary">.</span>BUILDS
              </span>
              <span className="block text-[10px] text-muted-foreground tracking-widest uppercase">
                Code • Create • Automate
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[11px] text-muted-foreground">
            <span>© {year} Hariom Builds</span>
            <span className="hidden sm:block">·</span>
            <span className="hidden sm:block">Built by Hariom.</span>
            <Link href="/case-study-detail" className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
              Work
            </Link>
            <span>·</span>
            <a href="mailto:hello@hariombuilds.run.place" className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
              Privacy
            </a>
            <span>·</span>
            <a href="mailto:hello@hariombuilds.run.place" className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}