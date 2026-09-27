'use client';

const groups = {
  Languages: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML5/CSS3'],
  Frameworks: ['FastAPI', 'Django', 'Flask', 'Next.js', 'React'],
  'Libraries & Tools': ['Three.js', 'Framer Motion', 'Tailwind CSS', 'Pandas', 'NumPy', 'BeautifulSoup', 'Requests', 'Docker'],
  Infrastructure: ['Cloudflare Pages', 'GitHub Actions', 'Linux / Unix'],
};

export default function TechMatrix() {
  return (
    <section className="studio-section" id="stack">
      <div className="studio-shell">
        <div className="section-heading">
          <div className="eyebrow">06 / TECH MATRIX</div>
          <h2>THE TOOLCHAIN.</h2>
        </div>
        <div className="matrix-grid">
          {Object.entries(groups).map(([name, items]) => (
            <article className="matrix-card" key={name}>
              <span className="matrix-label">{name}</span>
              <div className="matrix-items">
                {items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
