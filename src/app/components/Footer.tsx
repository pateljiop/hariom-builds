'use client';

import { Camera, Code2, Mail, Send, Video } from 'lucide-react';

const scheduler = process.env.NEXT_PUBLIC_CAL_URL;

export default function Footer() {
  return (
    <footer id="contact" className="studio-footer">
      <div className="studio-shell">
        <div className="footer-cta">
          <div>
            <div className="eyebrow">08 / DIRECT LINE</div>
            <h2>HAVE A SYSTEM TO SHIP?</h2>
            <p>Bring the problem, the workflow or the rough idea. We can scope the build directly.</p>
          </div>
          <a className="neon-button" href={scheduler || 'mailto:ahuzahariom@gmail.com'}>
            {scheduler ? 'Book 15-Min Intro Call' : 'Email Hariom'} <Mail size={16} />
          </a>
        </div>

        <div className="footer-grid">
          <div>
            <div className="footer-brand">HARIOM<span>.</span>BUILDS</div>
            <p>Independent software engineering studio. Code • Create • Automate.</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/pateljiop" target="_blank" rel="noreferrer"><Code2 size={15} /> GitHub</a>
            <a href="https://linkedin.com/in/pateljiop" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://instagram.com/hariompatel.dev" target="_blank" rel="noreferrer"><Camera size={15} /> @hariompatel.dev</a>
            <a href="https://t.me/hariompatel.dev" target="_blank" rel="noreferrer"><Send size={15} /> @hariompatel.dev</a>
            <a href="https://youtube.com/@TechMindCentral" target="_blank" rel="noreferrer"><Video size={15} /> TechMind Central</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 HariomBuilds. All systems operational.</span>
          <a href="mailto:ahuzahariom@gmail.com">ahuzahariom@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
