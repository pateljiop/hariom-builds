'use client';

import { useMemo, useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Blocks, BookOpen,
  BriefcaseBusiness, Check, Code2, Compass, Github, GraduationCap,
  Menu, Radio, Sparkles, Wallet, X, Zap,
} from 'lucide-react';
import './studio-landing.css';

const projects = [
  { id: 'campus', number: '01', name: 'Campus Radar', type: 'Community', status: 'Concept', color: 'lime', icon: Radio, description: 'The unofficial layer of college life: events, club drops, polls and the stuff notice boards miss.', tags: ['Campus', 'Community'], signal: 'IRL → online' },
  { id: 'lastminute', number: '02', name: 'LastMinute', type: 'Study', status: 'Concept', color: 'violet', icon: BookOpen, description: 'Turn a syllabus into a realistic revision sprint, with progress you can actually see.', tags: ['Exams', 'Focus'], signal: 'Less panic' },
  { id: 'splitkaro', number: '03', name: 'SplitKaro', type: 'Life admin', status: 'Concept', color: 'orange', icon: Wallet, description: 'Roommate bills and trip expenses, settled without the awkward “bhai, paise?” follow-up.', tags: ['Money', 'Friends'], signal: 'No awkward math' },
  { id: 'proof', number: '04', name: 'Proof of Skill', type: 'Career', status: 'Concept', color: 'blue', icon: BriefcaseBusiness, description: 'A portfolio built around working demos, shipped projects and proof—not another certificate wall.', tags: ['Portfolio', 'Career'], signal: 'Show, don’t tell' },
  { id: 'reality', number: '05', name: 'Reality Check', type: 'Wellbeing', status: 'Concept', color: 'pink', icon: Compass, description: 'A private, no-guilt look at where your time goes, using data you choose to log.', tags: ['Habits', 'Privacy'], signal: 'Your data, yours' },
];

const filters = ['Everything', 'Community', 'Study', 'Life admin', 'Career', 'Wellbeing'];

export default function StudioLanding() {
  const [filter, setFilter] = useState('Everything');
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const visibleProjects = useMemo(() => filter === 'Everything' ? projects : projects.filter((p) => p.type === filter), [filter]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="studio-shell">
      <div className="studio-grain" aria-hidden="true" />
      <header className="studio-nav">
        <a href="#top" className="studio-wordmark" aria-label="Hariom Builds home">
          <span className="studio-mark">hb<span>.</span></span>
          <span>HARIOM BUILDS<small>INDEPENDENT DIGITAL STUDIO</small></span>
        </a>
        <button className="studio-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <nav className={menuOpen ? 'studio-links is-open' : 'studio-links'}>
          <a href="#work" onClick={closeMenu}>The lab</a>
          <a href="#principles" onClick={closeMenu}>What we believe</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="studio-nav-cta" href="https://github.com/pateljiop" target="_blank" rel="noreferrer" onClick={closeMenu}>Follow the build <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="studio-hero" id="top">
        <div className="studio-hero-copy">
          <div className="studio-eyebrow"><span className="studio-live-dot" /> SMALL STUDIO. BIG INTERNET ENERGY.</div>
          <h1>Make the internet<br />work <em>for your life.</em></h1>
          <p className="studio-hero-sub">We build little digital unfair advantages for students, builders and people figuring it out as they go.</p>
          <div className="studio-hero-actions">
            <a className="studio-button studio-button-dark" href="#work">Explore the lab <ArrowDownRight size={17} /></a>
            <a className="studio-text-link" href="https://github.com/pateljiop" target="_blank" rel="noreferrer"><Github size={17} /> Open source on GitHub</a>
          </div>
          <div className="studio-hero-note"><span className="studio-note-line" /> Built in public by Hariom Patel <span className="studio-note-sep">/</span> India, internet-first</div>
        </div>
        <div className="studio-hero-art" aria-label="A map of connected ideas: campus, study, money, career and wellbeing">
          <div className="studio-art-top"><span>FIELD NOTES / 001</span><span>IDEAS IN MOTION ↗</span></div>
          <div className="studio-orbit orbit-one" /><div className="studio-orbit orbit-two" /><div className="studio-orbit orbit-three" />
          <div className="studio-core"><span>hb</span><small>BUILD<br />WHAT<br />MATTERS.</small></div>
          <div className="studio-float-card card-campus"><Radio size={15} /><span>CAMPUS</span><b>Find your people.</b></div>
          <div className="studio-float-card card-study"><BookOpen size={15} /><span>STUDY</span><b>Make it click.</b></div>
          <div className="studio-float-card card-money"><Wallet size={15} /><span>LIFE ADMIN</span><b>Less life friction.</b></div>
          <div className="studio-float-card card-career"><Code2 size={15} /><span>CAREER</span><b>Show the proof.</b></div>
          <div className="studio-art-caption">01—05 <span>Different problems. One point of view.</span></div>
        </div>
      </section>

      <section className="studio-manifesto" id="principles">
        <div className="studio-section-kicker"><span>01 / THE POINT</span><span>NO MORE TAB CHAOS</span></div>
        <div className="studio-manifesto-grid">
          <h2>Life is already<br />a lot. Your tools<br /><em>shouldn’t be.</em></h2>
          <div className="studio-manifesto-copy"><p>Most software asks you to change your life to fit the app. We’d rather make software that fits the way people actually live: messy schedules, shared bills, last-minute exams, side projects and all.</p><p>Useful first. Nice to use. Easy to share. No fake AI magic, no feature graveyard.</p><a href="#work" className="studio-inline-link">Meet the ideas <ArrowRight size={16} /></a></div>
        </div>
        <div className="studio-value-strip"><div><span>01</span><b>Useful over hype</b><small>Real problems, clear wins.</small></div><div><span>02</span><b>Human by default</b><small>Fast, friendly, low-friction.</small></div><div><span>03</span><b>Open where possible</b><small>Build in public. Learn in public.</small></div></div>
      </section>

      <section className="studio-work" id="work">
        <div className="studio-section-kicker"><span>02 / THE LAB</span><span>EARLY IDEAS, HONEST STATUS</span></div>
        <div className="studio-work-heading"><div><h2>Five ideas.<br /><em>Real-world energy.</em></h2><p>A growing collection of experiments for student life and the next generation of builders.</p></div><span className="studio-count">05 <small>PROJECT DIRECTIONS</small></span></div>
        <div className="studio-filters" role="group" aria-label="Filter project ideas">{filters.map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div>
        <div className="studio-project-grid">{visibleProjects.map((project) => { const Icon = project.icon; return <article className={'studio-project-card tone-' + project.color} key={project.id}><div className="studio-card-top"><span>{project.number} / {project.type.toUpperCase()}</span><span className="studio-status">{project.status}</span></div><div className="studio-project-icon"><Icon size={22} strokeWidth={1.7} /></div><h3>{project.name}</h3><p>{project.description}</p><div className="studio-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="studio-card-bottom"><span>{project.signal}</span><ArrowUpRight size={17} /></div></article>; })}</div>
        <div className="studio-lab-foot"><Sparkles size={17} /><span>These are concepts in discovery—not launched products. The next step is validating them with real students.</span></div>
      </section>

      <section className="studio-build-loop" id="about">
        <div className="studio-build-loop-copy"><div className="studio-section-kicker"><span>03 / HOW IT GETS MADE</span><span>BUILD IN PUBLIC</span></div><h2>From “what if?”<br />to <em>“try it.”</em></h2><p>No 40-slide pitch deck. We pick a real annoyance, ship the smallest useful version, put it in people’s hands and listen hard.</p><a className="studio-button studio-button-light" href="https://github.com/pateljiop" target="_blank" rel="noreferrer">See the code <Github size={16} /></a></div>
        <div className="studio-steps"><div><span>01</span><div><b>Spot the friction</b><p>Find the small problem that wastes everyone’s time.</p></div><Check size={16} /></div><div><span>02</span><div><b>Build the useful bit</b><p>Keep the core fast, accessible and genuinely usable.</p></div><Zap size={16} /></div><div><span>03</span><div><b>Let people shape it</b><p>Share early, take feedback and improve in the open.</p></div><Blocks size={16} /></div></div>
      </section>

      <section className="studio-final-cta">
        <div className="studio-cta-stamp">OPEN<br />TAB<br /><span>∞</span></div>
        <div><div className="studio-eyebrow"><span className="studio-live-dot" /> GOT A PROBLEM WORTH SOLVING?</div><h2>Let’s make<br /><em>something useful.</em></h2><p>Got a campus pain point, a messy workflow or an idea that deserves to exist? Send it over.</p></div>
        <div className="studio-cta-actions"><a className="studio-button studio-button-dark" href="https://github.com/pateljiop" target="_blank" rel="noreferrer">Find me on GitHub <ArrowUpRight size={17} /></a><button className="studio-copy-email" onClick={async () => { try { await navigator.clipboard.writeText('hariompatel73@gmail.com'); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { window.location.href = 'mailto:hariompatel73@gmail.com'; } }}>{copied ? <Check size={16} /> : <ArrowRight size={16} />}{copied ? 'Email copied' : 'Copy email address'}</button></div>
      </section>

      <footer className="studio-footer"><a href="#top" className="studio-wordmark"><span className="studio-mark">hb<span>.</span></span><span>HARIOM BUILDS<small>INDEPENDENT DIGITAL STUDIO</small></span></a><span>Made for real life, on the internet.</span><div><a href="https://github.com/pateljiop" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://linkedin.com/in/pateljiop" target="_blank" rel="noreferrer">LINKEDIN ↗</a><span>© {new Date().getFullYear()} HARIOM BUILDS</span></div></footer>
    </main>
  );
}
