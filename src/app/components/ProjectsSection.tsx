'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers3 } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'AI Personal Assistant',
    description: 'Python automation project focused on assistant-style workflows and local tooling.',
    stack: 'Python / Automation',
    live: '',
    source: 'https://github.com/pateljiop/AI-Personal-Assistant',
    architecture: 'Input → intent/workflow layer → Python execution → response',
  },
  {
    title: 'Web Scraper & Data Utility',
    description: 'Reusable Python web-scraping utilities for structured data collection.',
    stack: 'Python / Requests / Parsing',
    live: '',
    source: 'https://github.com/pateljiop/Web-Scraper-Tool',
    architecture: 'Target → request layer → parser → normalized records',
  },
  {
    title: 'Expense Tracker',
    description: 'Live browser-based expense tracking application.',
    stack: 'HTML / CSS / JavaScript',
    live: 'https://pateljiop.github.io/Expense-Tracker/',
    source: 'https://github.com/pateljiop/Expense-Tracker',
    architecture: 'UI → state → local persistence → summary views',
  },
  {
    title: 'HariomBuilds Studio',
    description: 'This production studio site: edge-hosted interface, architecture storytelling and interactive systems.',
    stack: 'Next.js / React / Cloudflare',
    live: 'https://hariombuilds.eu.cc',
    source: 'https://github.com/pateljiop/hariom-builds',
    architecture: 'Next.js → OpenNext → Cloudflare Worker → Custom Domain',
  },
];

export default function ProjectsSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="studio-section" id="projects">
      <div className="studio-shell">
        <div className="section-heading">
          <div className="eyebrow">04 / SELECTED BUILDS</div>
          <h2>SHIP LOG // PRODUCTION WORK.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="project-top">
                <span className="project-number">0{index + 1}</span>
                <Layers3 size={18} />
              </div>
              <div className="project-body">
                <span className="tech-tag">{project.stack}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="inspect-toggle" onClick={() => setOpen(open === index ? null : index)}>
                  {open === index ? 'Close Architecture' : 'Inspect Architecture'}
                </button>
                {open === index && <pre className="architecture-code">{project.architecture}</pre>}
              </div>
              <div className="project-actions">
                {project.live ? <a href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={15} /> Live System</a> : <span className="disabled-action">Live System / N/A</span>}
                <a href={project.source} target="_blank" rel="noreferrer"><Github size={15} /> Source Code</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
