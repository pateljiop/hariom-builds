use client
import React, { useRef, useEffect } from 'react';

const SOCIALS = [
  {
    platform: 'GitHub',
    handle: 'github.com/pateljiop',
    description: 'Builds / Code / Experiments',
    url: 'https://github.com/pateljiop',
    color: '#FFFFFF',
  },
  {
    platform: 'LinkedIn',
    handle: 'linkedin.com/in/pateljiop',
    description: 'Business / Professional updates',
    url: 'https://linkedin.com/in/pateljiop',
    color: '#0A66C2',
  },
  {
    platform: 'Instagram',
    handle: '@patelji_op',
    description: 'Visuals / Builds / Updates',
    url: 'https://instagram.com/patelji_op',
    color: '#E4405F',
  },
  {
    platform: 'Telegram',
    handle: '@patelji_op',
    description: 'Updates / Community',
    url: 'https://t.me/patelji_op',
    color: '#26A5E4',
  },
  {
    platform: 'Email',
    handle: 'hariompatel.dev@gmail.com',
    description: 'Direct business enquiries',
    url: 'mailto:hariompatel.dev@gmail.com',
    color: '#FFB020',
  },
  {
    platform: 'Personal Portfolio',
    handle: 'hariom-portfolio.pages.dev',
    description: 'About Hariom / Experience / Personal Work',
    url: 'https://hariom-portfolio.pages.dev',
    color: '#FF2055',
  },
];

export default function SocialSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 80);
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
    <section id="social" ref={sectionRef} className="py-24 px-6 relative" aria-labelledby="social-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 block">Digital Presence</span>
          <h2 id="social-heading" className="text-section-title font-extrabold uppercase text-foreground mb-4">
            FIND HARIOM BUILDS <span className="text-gradient-cyan">ONLINE</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOCIALS.map((social, i) => (
            <a
              key={social.platform}
              href={social.url}
              target={social.url.startsWith('mailto:') ? undefined : '_blank'}
              rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="reveal-up glass-card rounded-2xl p-6 gradient-border group hover:scale-[1.03] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{ transitionDelay: `${i * 80}ms` }}
              aria-label={`${social.platform}: ${social.handle}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: `${social.color}15`, color: social.color }}>
                  <span className="text-xs font-black">{social.platform === 'Email' ? '@' : social.platform.slice(0, 2).toUpperCase()}</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted-foreground group-hover:text-primary transition-colors mt-1" aria-hidden="true">
                  <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-sm font-extrabold text-foreground mb-1">{social.platform}</h3>
              <p className="text-xs font-medium mb-2" style={{ color: social.color }}>{social.handle}</p>
              <p className="text-muted-foreground text-xs leading-relaxed">{social.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
