import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hariombuild.eu.cc';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: baseUrl + '/', lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: baseUrl + '/#services', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/#projects', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/#contact', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];
}