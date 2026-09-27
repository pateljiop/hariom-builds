'use client';

import Image from 'next/image';
import { Github, Instagram, Send, Terminal } from 'lucide-react';

export default function MeetBuilder() {
  return (
    <section className="studio-section" id="builder">
      <div className="studio-shell">
        <div className="section-heading">
          <div className="eyebrow">02 / THE BUILDER</div>
          <h2>MEET THE ENGINE ROOM.</h2>
        </div>

        <div className="builder-grid">
          <div className="rig-card">
            <div className="hud-corner hud-tl" /><div className="hud-corner hud-tr" />
            <div className="hud-corner hud-bl" /><div className="hud-corner hud-br" />
            <div className="telemetry-live">● RIG ACTIVE: 5 MONITORS | HARDWARE SYNCHRONIZED</div>
            <div className="rig-image-wrap">
              <Image
                src="/assets/images/1790443981255.png"
                alt="Real five-monitor HariomBuilds engineering workstation"
                fill
                sizes="(max-width: 900px) 100vw, 58vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="builder-copy">
            <div className="terminal-label"><Terminal size={15} /> BUILDER_ID / HARIOM</div>
            <h3>Independent product engineer. Student. Builder.</h3>
            <p>
              Hariom Patel builds software systems from the interface down to the data layer.
              He is a BCA student at Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj,
              and the creator of TechMind Central.
            </p>
            <div className="credential-list">
              <span>Python Development — CodSoft</span>
              <span>Python Development — InternPe</span>
              <span>Generative AI for Data Analytics — Udemy</span>
            </div>
            <p className="builder-quote">
              “I don't build generic clones. I design robust data engines, clean database architectures,
              and interactive digital interfaces that actually run businesses.”
            </p>
            <div className="social-row">
              <a href="https://github.com/pateljiop" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
              <a href="https://instagram.com/hariompatel.dev" target="_blank" rel="noreferrer"><Instagram size={16} /> @hariompatel.dev</a>
              <a href="https://t.me/hariompatel.dev" target="_blank" rel="noreferrer"><Send size={16} /> @hariompatel.dev</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
