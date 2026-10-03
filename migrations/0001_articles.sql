CREATE TABLE IF NOT EXISTS articles (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  content TEXT NOT NULL,
  keywords TEXT NOT NULL DEFAULT '[]',
  author TEXT NOT NULL DEFAULT 'Hariom Patel',
  published_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  read_time INTEGER NOT NULL DEFAULT 5,
  sources TEXT NOT NULL DEFAULT '[]',
  status TEXT NOT NULL DEFAULT 'published',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);
CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status);
