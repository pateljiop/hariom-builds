use client
import React, { useRef, useEffect } from 'react';

const SOCIALS = [
  {
    platform: 'GitHub',
    handle: 'github.com/pateljiop',
    description: 'Builds / code / experiments',
    url: 'https://github.com/pateljiop',
    color: '#FFFFFF',
  },
  {
    platform: 'LinkedIn',
    handle: 'linkedin.com/in/pateljiop',
    description: 'Professional profile / business',
    url: 'https://linkedin.com/in/pateljiop',
    color: '#0A66C2',
  },
  {
    platform: 'Instagram',
    handle: '@patelji_op',
    description: 'Builds / visuals / updates',
    url: 'https://instagram.com/patelji_op',
    color: '#E4405F',
  },
  {
    platform: 'Telegram',
    handle: '@patelji_op',
    description: 'Direct updates / community',
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
    platform: 'Freelance Portfolio',
    handle: 'hariom-portfolio.pages.dev/freelance',
    description: 'Freelance work / services / demos',
    url: 'https://hariom-portfolio.pages.dev/freelance',
    color: '#FF2055',
  },
];

function SocialIcon({ platform }: { platform: string }) {
  const common = { width: 21, height: 21, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true as const };
  if (platform === 'GitHub') return <svg {...common} fill="currentColor"><path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.5-3.76-1.5-.51-1.32-1.24-1.67-1.24-1.67-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1 1.96-.72 2.2-1.1.1-.72.4-1.2.72-1.48-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.14a10.7 10.7 0 0 1 5.6 0c2.14-1.44 3.08-1.14 3.08-1.14.61 1.54.23 2.68.11 2.96.71.78 1.15 1.78 1.15 3 0 4.27-2.6 5.22-5.08 5.5.4.34.76 1 .76 2.02v2.97c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z"/></svg>;
  if (platform === 'LinkedIn') return <svg {...common}><path d="M5.1 8.3H1.8V22h3.3V8.3ZM3.45 2A1.95 1.95 0 1 0 3.45 5.9 1.95 1.95 0 0 0 3.45 2ZM22.2 14.15c0-4.13-2.2-6.05-5.13-6.05-2.36 0-3.42 1.3-4.01 2.2V8.3H9.76V22h3.3v-6.79c0-1.79.34-3.52 2.55-3.52 2.18 0 2.2 2.04 2.2 3.64V22h3.31l1.08-7.85Z" fill="currentColor"/></svg>;
  if (platform === 'Instagram') return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>;
  if (platform === 'Telegram') return <svg {...common}><path d="m21.4 3.7-3.18 15.02c-.24 1.06-.87 1.32-1.77.82l-4.87-3.59-2.35 2.26c-.26.26-.48.48-.99.48l.35-4.96 9.03-8.16c.39-.35-.09-.55-.61-.2L5.85 11.8.99 10.28c-1.06-.33-1.08-1.06.22-1.57L20.2 1.4c.88-.32 1.65.2 1.2 2.3Z" fill="currentColor"/></svg>;
  if (platform === 'Email') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><path d="M3 12h18M12 3c2.1 2.5 3.2 5.5 3.2 9S14.1 18.5 12 21c-2.1-2.5-3.2-5.5-3.2-9S9.9 5.5 12 3Z" stroke="currentColor" strokeWidth="1.5"/></svg>;
}

export default function SocialSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
            setTimeout(() => el.classList.add('revealed'), i * 80);
          });
        }
      }),
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
                  <SocialIcon platform={social.platform} />
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
