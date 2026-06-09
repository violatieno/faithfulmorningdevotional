import { MetadataRoute } from 'next';

// This is where you would import your database query function
// import { getAllDevotionals } from '@/lib/db'; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://faithfulmorningdevotional.netlify.app';

  // 1. Fetch your dynamic content (devotionals/blog posts)
  // const devotionals = await getAllDevotionals();

  // 2. Map dynamic content to the sitemap format
  const dynamicRoutes = [].map((item: any) => ({
    url: `${baseUrl}/devotional/${item.slug}`,
    lastModified: new Date(item.updated_at),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  // 3. Combine with static pages
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/devotional`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...dynamicRoutes,
  ];
}