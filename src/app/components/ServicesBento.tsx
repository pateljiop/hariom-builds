'use client';

import { motion } from 'framer-motion';
import { Bot, Braces, Database, Zap } from 'lucide-react';

const cards = [
  {
    icon: Braces,
    title: 'Full-Stack Web Applications',
    text: 'Next.js, React, Three.js and Tailwind systems with edge-first delivery and responsive product interfaces.',
    tags: ['Next.js 15', 'React 19', 'Three.js', 'Tailwind'],
    size: 'lg',
  },
  {
    icon: Bot,
    title: 'Automation & Web Scraping',
    text: 'Python harvesters, scheduled jobs and structured pipelines for repeatable data workflows.',
    tags: ['Python', 'BeautifulSoup', 'Requests', 'GitHub Actions'],
    size: 'md',
  },
  {
    icon: Database,
    title: 'Backend Architecture & REST APIs',
    text: 'FastAPI/Django services, authentication, PostgreSQL and SQLite data layers designed around clean contracts.',
    tags: ['FastAPI', 'Django', 'PostgreSQL', 'JWT'],
    size: 'md',
  },
];

export default function ServicesBento() {
  return (
    <section id="services" className="studio-section">
      <div className="studio-shell">
        <div className="section-heading">
          <div className="eyebrow">01 / CAPABILITIES</div>
          <h2>BUILD SYSTEMS, NOT DECORATIONS.</h2>
          <p>From interface to data layer, every build is shaped around a real workflow.</p>
        </div>

        <div className="bento-grid">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                className={`tech-card bento-card ${card.size === 'lg' ? 'bento-large' : ''}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="card-icon"><Icon size={20} /></div>
                <span className="card-index">0{index + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <div className="tag-row">{card.tags.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div>
              </motion.article>
            );
          })}

          <motion.article
            className="tech-card bento-wide studio-advantage"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <Zap className="text-pink-400" size={22} />
            <div>
              <span className="card-index">04</span>
              <h3>The Solo Studio Advantage</h3>
              <p>Direct engineer access, tight feedback loops, focused delivery and a selective 2–3 concurrent client model.</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
