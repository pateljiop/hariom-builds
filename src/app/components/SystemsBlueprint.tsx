'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Activity, Database, Globe2, Server } from 'lucide-react';

const nodes = [
  { id: 1, label: 'API Gateway', detail: 'FastAPI request routing and service boundaries.', icon: Globe2, x: '24%', y: '35%' },
  { id: 2, label: 'CI/CD Cron Workers', detail: 'GitHub Actions schedules repeatable scraper jobs.', icon: Activity, x: '72%', y: '27%' },
  { id: 3, label: 'Storage & DB Tier', detail: 'PostgreSQL / SQLite with indexed relational queries.', icon: Database, x: '66%', y: '72%' },
  { id: 4, label: 'Edge Delivery', detail: 'Cloudflare edge caching and secure delivery.', icon: Server, x: '22%', y: '72%' },
];

export default function SystemsBlueprint() {
  const [active, setActive] = useState(1);

  return (
    <section className="studio-section" id="systems">
      <div className="studio-shell">
        <div className="section-heading">
          <div className="eyebrow">03 / SYSTEMS MAP</div>
          <h2>ARCHITECTURE WITH A PULSE.</h2>
        </div>

        <div className="blueprint">
          <Image
            src="/assets/images/1790442471929.jpg"
            alt="Cyber-blue HariomBuilds technical architecture schematic"
            fill
            sizes="100vw"
            className="blueprint-image"
          />
          <div className="blueprint-overlay" />
          <div className="blueprint-title">HARIOMBUILDS // SYSTEM SCHEMATIC</div>

          {nodes.map((node) => {
            const Icon = node.icon;
            return (
              <button
                key={node.id}
                className="radar-node"
                style={{ left: node.x, top: node.y }}
                onMouseEnter={() => setActive(node.id)}
                onFocus={() => setActive(node.id)}
                aria-label={node.label}
              >
                <span className="radar-ring" />
                <Icon size={15} />
                {active === node.id && (
                  <span className="radar-popover">
                    <strong>{node.label}</strong>
                    <small>{node.detail}</small>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
