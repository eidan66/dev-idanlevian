import { SITE_CONFIG } from '@/config/site';

/** JSON-LD structured data for SEO. Schema built from site config — no user input. */
export function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.author,
    url: SITE_CONFIG.url,
    jobTitle: 'Freelance Frontend Developer',
    description: SITE_CONFIG.description,
    knowsAbout: [
      'React',
      'React Native',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Web Development',
      'Mobile App Development',
      'Frontend Architecture',
    ],
    sameAs: [
      SITE_CONFIG.social.github,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.facebook,
    ],
    image: `${SITE_CONFIG.url}/images/og-image.png`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IL',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_CONFIG.author,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    areaServed: ['Israel', 'Remote'],
    serviceType: [
      'Web Development',
      'Mobile App Development',
      'Frontend Development',
      'Technology Consulting',
    ],
    provider: {
      '@type': 'Person',
      name: SITE_CONFIG.author,
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.author,
    },
    inLanguage: ['en', 'he'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
