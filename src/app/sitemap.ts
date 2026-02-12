import type { MetadataRoute } from 'next';

import { SITE_CONFIG } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_CONFIG.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: SITE_CONFIG.url,
          he: SITE_CONFIG.url,
        },
      },
    },
  ];
}
