'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const SECTIONS = [
{
  label: 'THE BUSINESS',
  title: 'Local Roofing Contractor',
  content: 'A local roofing business offering residential and commercial roofing services. Operating for several years through word-of-mouth, they had no digital presence to capture online demand or build credibility before the first call.',
  color: '#007BFF'
},
{
  label: 'THE PROBLEM',
  title: 'No Online Presence, No Credibility',
  content: 'When potential customers searched for roofing services in the area, this business was invisible. Competitors with even basic websites were capturing leads that should have been theirs. Visitors who did find them through referrals had no way to understand the range of services or build confidence before picking up the phone.',
  color: '#FF2055'
},
{
  label: 'THE APPROACH',
  title: 'Lead With Clarity, Not Features',
  content: 'The site needed to answer three questions in under 10 seconds: What do they do? Where do they work? How do I get a quote? Everything else was secondary. Services were structured around customer decisions (roof repair vs replacement), not internal categories. Trust signals — years of experience, service areas, process explanation — were placed exactly where hesitation would occur.',
  color: '#00D2FF'
},
{
  label: 'THE BUILD',
  title: 'Next.js + Tailwind + Framer Motion',
  content: 'Built as a static Next.js site for maximum performance and SEO. Tailwind CSS for responsive layout. Framer Motion for subtle entrance animations that add polish without distraction. Contact form with basic validation. Google Maps embed for service area. Mobile-first — over 70% of roofing searches happen on mobile.',
  color: '#007BFF'
},
{
  label: 'BUSINESS VALUE',
  title: 'From Invisible to Credible',
  content: 'A visitor landing on this site now immediately understands what the business does, where it operates, and what to do next. The quote form removes the friction of a phone call for initial enquiries. Local SEO structure means the business can now appear in relevant searches — turning digital visibility into real leads.',
  color: '#00D2FF'
}];


const TECH_STACK = [
{ name: 'Next.js', description: 'Application framework — performance + SEO', color: '#FFFFFF' },
{ name: 'TypeScript', description: 'Type-safe development', color: '#3178C6' },
{ name: 'Tailwind CSS', description: 'Responsive styling system', color: '#38BDF8' },
{ name: 'Framer Motion', description: 'UI-level animations', color: '#FF0080' },
{ name: 'Vercel', description: 'Deployment infrastructure', color: '#FFFFFF' }];


export default function CaseStudyContent() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-left, .reveal-fade').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    contentRef?.current?.querySelectorAll('section[data-observe]')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <div ref={contentRef} className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      {/* Project overview image */}
      <section data-observe className="reveal-fade">
        <div className="rounded-3xl overflow-hidden h-80 md:h-[480px] relative">
          <AppImage
            src="https://images.unsplash.com/photo-1620481496982-e76609d4aef4"
            alt="Dark stone and concrete masonry wall in deep shadow, dramatic side lighting highlighting texture, dim construction atmosphere"
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
            className="object-cover" />

          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(13,15,26,0.7) 0%, transparent 60%)' }}
            aria-hidden="true" />

          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-foreground font-bold text-sm tracking-widest uppercase opacity-60">
              PROJECT — ROOFING WEBSITE CONCEPT
            </p>
          </div>
        </div>
      </section>
      {/* Case study sections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main content */}
        <div className="lg:col-span-8 space-y-12">
          {SECTIONS?.map((sec, i) =>
          <section
            key={sec?.label}
            data-observe
            className="reveal-up"
            style={{ transitionDelay: `${i * 80}ms` }}
            aria-labelledby={`section-${i}`}>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px" style={{ background: sec?.color }} aria-hidden="true" />
                <span
                className="text-[10px] font-bold uppercase tracking-[0.3em]"
                style={{ color: sec?.color }}>

                  {sec?.label}
                </span>
              </div>
              <h2 id={`section-${i}`} className="text-2xl font-extrabold text-foreground mb-4">{sec?.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{sec?.content}</p>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Tech stack */}
          <section data-observe className="glass-card rounded-2xl p-6 gradient-border reveal-left" aria-labelledby="tech-stack-heading">
            <h2 id="tech-stack-heading" className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-5">Technology Stack</h2>
            <div className="space-y-4">
              {TECH_STACK?.map((tech) =>
              <div key={tech?.name} className="flex items-start gap-3">
                  <div
                  className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                  style={{ background: tech?.color }}
                  aria-hidden="true" />

                  <div>
                    <p className="text-sm font-bold text-foreground">{tech?.name}</p>
                    <p className="text-xs text-muted-foreground">{tech?.description}</p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Project meta */}
          <section data-observe className="glass-card rounded-2xl p-6 gradient-border reveal-left" aria-labelledby="project-meta-heading">
            <h2 id="project-meta-heading" className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-5">Project Details</h2>
            <div className="space-y-4">
              {[
              { label: 'Type', value: 'Website Concept' },
              { label: 'Industry', value: 'Local Services / Roofing' },
              { label: 'Status', value: 'Demo Available' },
              { label: 'Year', value: '2026' }]?.
              map((item) =>
              <div key={item?.label} className="flex justify-between items-center border-b border-border pb-3 last:border-0 last:pb-0">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{item?.label}</span>
                  <span className="text-xs text-foreground font-bold">{item?.value}</span>
                </div>
              )}
            </div>
          </section>

          {/* CTAs */}
          <section data-observe className="space-y-3 reveal-left" aria-label="Project actions">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-primary-foreground rounded-full font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-all glow-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="View live demo of roofing website concept">

              Live Demo ↗
            </a>
            <a
              href="https://github.com/hariombuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 border border-border text-foreground rounded-full font-bold text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="View source code on GitHub">

              View Source →
            </a>
          </section>
        </aside>
      </div>
      {/* Related projects */}
      <section data-observe className="pt-8 border-t border-border reveal-up" aria-labelledby="related-heading">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <h2 id="related-heading" className="text-xl font-extrabold text-foreground uppercase">More Builds</h2>
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">

            View All Work →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
          {
            name: 'LAUNDRY SERVICE CONCEPT',
            category: 'Web + Automation',
            image: "https://images.unsplash.com/photo-1506584189510-7730e438e4ed",
            alt: 'Dimly lit laundry facility with rows of machines in shadow, industrial blue-grey lighting, moody atmospheric environment',
            color: '#00D2FF'
          },
          {
            name: 'MASONRY PORTFOLIO CONCEPT',
            category: 'Web',
            image: "https://images.unsplash.com/photo-1620481496982-e76609d4aef4",
            alt: 'Dark stone and concrete masonry wall in deep shadow, dramatic side lighting highlighting texture, dim construction atmosphere',
            color: '#FF2055'
          },
          {
            name: 'CONTENT AUTOMATION SYSTEM',
            category: 'Automation',
            image: "https://images.unsplash.com/photo-1680992046626-418f7e910589",
            alt: 'Dark server room with dim blue LED lighting, deep shadows between racks, low-key atmospheric data center environment',
            color: '#00D2FF'
          }]?.
          map((project) =>
          <Link
            key={project?.name}
            href="/case-study-detail"
            className="glass-card rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`View case study: ${project?.name}`}>

              <div className="relative h-40 overflow-hidden">
                <AppImage
                src={project?.image}
                alt={project?.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105" />

                <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(13,15,26,0.8) 0%, transparent 60%)' }}
                aria-hidden="true" />

              </div>
              <div className="p-4">
                <span className="tech-tag mb-2 inline-block" style={{ color: project?.color, borderColor: `${project?.color}30`, background: `${project?.color}08` }}>
                  {project?.category}
                </span>
                <h3 className="text-sm font-extrabold text-foreground leading-tight">{project?.name}</h3>
              </div>
            </Link>
          )}
        </div>
      </section>
      {/* Back to site CTA */}
      <section data-observe className="text-center pt-8 reveal-up" aria-label="Return to homepage">
        <p className="text-muted-foreground text-sm mb-6">Building a project? Let&apos;s talk.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-sm uppercase tracking-widest hover:bg-secondary transition-all glow-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">

          ← Back to Hariom Builds
        </Link>
      </section>
    </div>);

}