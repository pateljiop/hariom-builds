import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hariombuilds.run.place';
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/case-study-detail`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}