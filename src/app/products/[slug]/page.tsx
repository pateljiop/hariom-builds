import type { Metadata } from 'next';
import '../../../styles/universe.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2, GitBranch, Orbit } from 'lucide-react';

type Product = {
  slug: string;
  name: string;
  category: string;
  status: string;
  summary: string;
  problem: string;
  direction: string;
  current: string[];
  source?: string;
  live?: string;
  accent: string;
};

const products: Product[] = [
  {
    slug: 'hariom-ai',
    name: 'Hariom AI',
    category: 'PERSONAL AI WORKSTATION',
    status: 'In development',
    summary: 'A Windows-first personal AI workstation designed to plan tasks, use tools under controlled permissions, and verify what it does.',
    problem: 'Desktop assistants can feel powerful while making it difficult to understand what they are about to change. Hariom AI is being built around explicit tool boundaries, reviewable actions, and verification.',
    direction: 'A local-first assistant experience with structured plans, approval gates for sensitive actions, bounded execution, and a clear record of outcomes.',
    current: ['Structured tool registry and task plans', 'Approval-gated sensitive operations', 'Browser and screen-control experiments', 'Test and verification workflows'],
    source: 'https://github.com/pateljiop/hariom-ai',
    accent: 'cyan',
  },
  {
    slug: 'haryomix',
    name: 'Haryomix',
    category: 'STUDENT PRODUCTIVITY',
    status: 'Building',
    summary: 'A student-first productivity workspace bringing practical study and document workflows into one coherent experience.',
    problem: 'Students often jump between separate tools for study tasks, file conversion, and everyday academic work. Haryomix aims to make those workflows easier to find and use.',
    direction: 'A modular workspace with focused tools, dedicated feature pages, and an interface designed to remain useful on mobile as well as desktop.',
    current: ['Workspace and feature navigation redesign', 'Document utility discovery and organisation', 'Student-oriented product experience'],
    source: 'https://github.com/pateljiop/Haryomix',
    accent: 'violet',
  },
  {
    slug: 'expense-tracker',
    name: 'Expense Tracker',
    category: 'PERSONAL FINANCE TOOL',
    status: 'Project repository',
    summary: 'A practical software project focused on recording expenses and making everyday spending easier to review.',
    problem: 'Small, frequent purchases are easy to lose track of when there is no simple habit or tool for recording them.',
    direction: 'Keep the core experience focused on capturing expenses and reviewing spending without adding unnecessary complexity.',
    current: ['Source code available in GitHub', 'Further feature and deployment status should be confirmed from the repository'],
    source: 'https://github.com/pateljiop/Expense-Tracker',
    accent: 'green',
  },
  {
    slug: 'web-scraper',
    name: 'Web Scraper Tool',
    category: 'AUTOMATION EXPERIMENT',
    status: 'Project repository',
    summary: 'A code-led exploration of collecting web information and turning it into a more structured workflow.',
    problem: 'Repeated manual collection of public information can be slow and inconsistent.',
    direction: 'Make data collection more repeatable while respecting the target site, access rules, and responsible request limits.',
    current: ['Source repository link available', 'Capabilities and operating limits need repository-level verification before being presented as production-ready'],
    source: 'https://github.com/pateljiop/Web-Scraper-Tool',
    accent: 'amber',
  },
  {
    slug: 'developer-portfolio',
    name: 'Developer Portfolio',
    category: 'PERSONAL WEB EXPERIENCE',
    status: 'Live website',
    summary: 'A public portfolio for selected work, experiments, and the story behind the person building them.',
    problem: 'A project list is more useful when visitors can understand the intent behind the work and find its source or live experience.',
    direction: 'Present real projects with clear context, working links, and a direct path for potential clients to start a conversation.',
    current: ['Portfolio website available', 'Source repository available'],
    source: 'https://github.com/pateljiop/Hariom-Professional-Portfolio',
    live: 'https://hariom-portfolio.pages.dev',
    accent: 'blue',
  },
];

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return { title: 'Product not found' };
  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: '/products/' + product.slug },
    openGraph: { title: product.name + ' | Hariom Builds', description: product.summary, type: 'website' },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <main className="hb-detail">
      <header className="hb-detail-nav">
        <Link href="/" className="hb-brand"><span className="hb-brand-mark"><Orbit size={19} /></span><span>HARIOM<span className="hb-brand-accent">BUILDS</span><small>INDEPENDENT SOFTWARE STUDIO</small></span></Link>
        <Link href="/#products" className="hb-detail-back"><ArrowLeft size={14} /> ALL PROJECTS</Link>
      </header>
      <div className="hb-detail-shell">
        <div className="hb-detail-kicker"><span>PRODUCT FILE / {product.slug.toUpperCase()}</span><span className={'hb-status hb-status-' + (product.status === 'Live website' ? 'live' : 'active')}><i />{product.status}</span></div>
        <section className={'hb-detail-hero hb-detail-' + product.accent}>
          <div className="hb-detail-orbit hb-detail-orbit-one" /><div className="hb-detail-orbit hb-detail-orbit-two" />
          <div className="hb-detail-emblem"><Orbit size={34} /><span>{product.name.split(/\s+/).map((part) => part[0]).join('').slice(0, 3)}</span></div>
          <div className="hb-detail-copy"><span className="hb-section-index">{product.category}</span><h1>{product.name}</h1><p>{product.summary}</p><div className="hb-detail-actions">{product.source && <a className="hb-button hb-button-primary" href={product.source} target="_blank" rel="noreferrer">View source <GitBranch size={15} /></a>}{product.live && <a className="hb-button hb-button-quiet" href={product.live} target="_blank" rel="noreferrer">Open live site <ArrowUpRight size={15} /></a>}</div></div>
        </section>
        <section className="hb-detail-content">
          <article><span className="hb-section-index">01 / THE PROBLEM</span><h2>Why this exists</h2><p>{product.problem}</p></article>
          <article><span className="hb-section-index">02 / PRODUCT DIRECTION</span><h2>Where it is going</h2><p>{product.direction}</p></article>
          <article className="hb-detail-checklist"><span className="hb-section-index">03 / CURRENT SCOPE</span><h2>What we can say today</h2><ul>{product.current.map((item) => <li key={item}><CheckCircle2 size={16} />{item}</li>)}</ul><p className="hb-detail-note">This page describes the current project intent. It does not imply that every planned capability is released or production-ready.</p></article>
        </section>
        <section className="hb-detail-contact"><span className="hb-section-index">BUILD SOMETHING TOGETHER</span><h2>Have a related problem?</h2><p>Let’s discuss the goal, constraints, and a sensible first version.</p><a className="hb-button hb-button-primary" href={'mailto:hariompatel.dev@gmail.com?subject=' + encodeURIComponent('Project enquiry: ' + product.name)}>Discuss a project <ArrowUpRight size={15} /></a></section>
      </div>
      <footer className="hb-detail-footer"><span>© {new Date().getFullYear()} HARIOM BUILDS</span><Link href="/#products">BACK TO THE UNIVERSE ↑</Link></footer>
    </main>
  );
}
