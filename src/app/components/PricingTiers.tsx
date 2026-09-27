'use client';

import { ArrowRight, DatabaseZap, Rocket, Workflow } from 'lucide-react';

const tiers = [
  {
    icon: Rocket,
    name: 'MVP Sprint',
    timing: '1–2 Weeks',
    description: 'A focused product slice: interface, core flow, deployment and handoff.',
    points: ['Responsive UI', 'Core functionality', 'Cloud deployment'],
  },
  {
    icon: DatabaseZap,
    name: 'Full-Stack Production Platform',
    timing: '3–4 Weeks',
    description: 'A complete web system with API/data architecture and production delivery.',
    points: ['Next.js / React', 'REST API + data layer', 'Cloudflare edge delivery'],
  },
  {
    icon: Workflow,
    name: 'Automation & Data Engine',
    timing: 'Scoped',
    description: 'Repeatable Python workflows for collection, transformation and scheduled execution.',
    points: ['Python automation', 'Scraping / data pipelines', 'Scheduled execution'],
  },
];

export default function PricingTiers() {
  return (
    <section className="studio-section" id="pricing">
      <div className="studio-shell">
        <div className="section-heading">
          <div className="eyebrow">07 / ENGAGEMENT MODELS</div>
          <h2>CHOOSE THE BUILD SHAPE.</h2>
        </div>
        <div className="pricing-grid">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <article className="pricing-card" key={tier.name}>
                <Icon size={22} className="text-cyan-300" />
                <span className="pricing-timing">{tier.timing}</span>
                <h3>{tier.name}</h3>
                <p>{tier.description}</p>
                <ul>{tier.points.map((point) => <li key={point}>+ {point}</li>)}</ul>
                <a href="#contact">Discuss Scope <ArrowRight size={15} /></a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
