'use client';

import { Facebook, Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { SITE_CONFIG } from '@/config/site';

export function PortfolioFooter() {
  const { t } = useTranslation();

  const socialLinks = [
    { href: SITE_CONFIG.social.github, label: t('footer.links.github'), Icon: Github },
    {
      href: SITE_CONFIG.social.linkedin,
      label: t('footer.links.linkedin'),
      Icon: Linkedin,
    },
    {
      href: SITE_CONFIG.social.facebook,
      label: t('footer.links.facebook'),
      Icon: Facebook,
    },
  ];

  return (
    <footer className="border-t border-gray-800 py-12" role="contentinfo">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6">
        <nav className="flex items-center justify-center gap-6" aria-label="Social links">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 text-gray-400 transition-colors hover:text-cyan-400"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </nav>
        <p className="text-center text-sm text-gray-500">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}
