import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hariombuild.eu.cc';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl + '/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
