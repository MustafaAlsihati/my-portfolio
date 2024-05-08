import type { MetadataRoute } from 'next';

const app_url = 'https://mustafaalsihati.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: app_url,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
  ];
}
