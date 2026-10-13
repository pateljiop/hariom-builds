import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hariombuilds.eu.cc';
const productSlugs = ['hariom-ai', 'haryomix', 'expense-tracker', 'web-scraper', 'developer-portfolio'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: baseUrl + '/',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...productSlugs.map((slug) => ({
      url: baseUrl + '/products/' + slug,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
