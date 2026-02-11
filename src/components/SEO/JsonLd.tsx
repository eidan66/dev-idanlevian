import { SITE_CONFIG } from '@/config/site';

/** JSON-LD structured data for SEO. Schema built from site config — no user input. */
export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.author,
    url: SITE_CONFIG.url,
    jobTitle: 'Senior Frontend & Infrastructure Developer',
    description: SITE_CONFIG.description,
    knowsAbout: [
      'React',
      'React Native',
      'Web Development',
      'Mobile Development',
      'Infrastructure',
      'Technology Consulting',
    ],
    sameAs: [
      SITE_CONFIG.social.github,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.facebook,
    ],
    image: `${SITE_CONFIG.url}/images/idan-levian-logo-white.svg`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
