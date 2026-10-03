import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata = { title: 'Developer Guides & Automation Articles', description: 'Practical guides about Python automation, web development, APIs, debugging, developer tooling and software projects.', alternates: { canonical: '/blog' } };

export default function BlogIndexPage() {
  const posts = getAllPosts();
  return <main className="studio-shell" style={{ padding: '120px 24px 80px' }}>
    <header style={{ maxWidth: 860, marginBottom: 56 }}><p className="eyebrow">KNOWLEDGE BASE / HARIOM BUILDS</p><h1>Developer Guides, Automation & Practical Software</h1><p>Research-backed tutorials and problem-solving guides covering Python, automation, APIs, web development, Git, AI tooling and real software projects.</p></header>
    <section aria-label="Articles" style={{ display: 'grid', gap: 24 }}>
      {posts.length === 0 ? <p>No published articles yet. The automated research pipeline will publish the first one.</p> : posts.map((post) => <article key={post.slug} style={{ padding: 28, border: '1px solid rgba(255,255,255,.12)' }}><p>{post.category}</p><h2><Link href={'/blog/' + post.slug}>{post.title}</Link></h2><p>{post.description}</p><small>{post.publishedAt} · {post.readTime} min read</small></article>)}
    </section>
  </main>;
}
