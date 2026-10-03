import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hariombuilds.eu.cc';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: baseUrl + '/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...posts.map((post) => ({
      url: baseUrl + '/blog/' + post.slug,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
