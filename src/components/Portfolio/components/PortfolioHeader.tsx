'use client';

import { Languages, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export interface PortfolioHeaderProps {
  activeSection: string;
  isMenuOpen: boolean;
  isLoaded: boolean;
  onMenuToggle: () => void;
  onNavClick: (sectionId: string) => void;
  onToggleLanguage: () => void;
}

const NAV_ITEMS = ['Home', 'Projects', 'Skills', 'Trust', 'Contact'] as const;

export function PortfolioHeader({
  activeSection,
  isMenuOpen,
  isLoaded,
  onMenuToggle,
  onNavClick,
  onToggleLanguage,
}: PortfolioHeaderProps) {
  const { t, i18n } = useTranslation();

  return (
    <nav
      className={`fixed top-0 z-40 w-full transition-all duration-500 ${
        isLoaded ? 'translate-y-0' : '-translate-y-full'
      }`}
      aria-label="Main navigation"
    >
      <div className="border-b border-cyan-500/20 bg-black/50 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="#home"
            onClick={() => onNavClick('home')}
            className="flex h-10 shrink-0 cursor-pointer items-center justify-center self-center transition-opacity hover:opacity-80 -mt-2.5 z-99999"
            aria-label={t('nav.home')}
          >
            <Image
              src="/images/idan-levian-logo-white.svg"
              alt="Idan Levian"
              width={128}
              height={48}
              priority
              className="block h-10 w-auto object-contain object-center md:h-9"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.toLowerCase();
              return (
                <Link
                  key={item}
                  href={`#${sectionId}`}
                  onClick={() => onNavClick(sectionId)}
                  className={`group relative cursor-pointer px-3 py-2.5 text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === sectionId ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                  aria-label={`Navigate to ${item} section`}
                  aria-current={activeSection === sectionId ? 'page' : undefined}
                >
                  {t(`nav.${sectionId}`)}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}
            <button
              onClick={onToggleLanguage}
              className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-cyan-500/30 px-4 py-2 text-xs hover:bg-cyan-500/10"
              aria-label={`Switch language to ${i18n.language === 'en' ? 'Hebrew' : 'English'}`}
            >
              <Languages size={14} aria-hidden="true" />{' '}
              {i18n.language === 'he' ? 'English' : 'עברית'}
            </button>
          </div>

          <button
            onClick={onMenuToggle}
            className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center text-cyan-400 md:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="border-b border-cyan-500/20 bg-black/95 px-6 py-4 backdrop-blur-xl">
          <div className="flex flex-col items-center gap-4">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.toLowerCase();
              return (
                <Link
                  key={item}
                  href={`#${sectionId}`}
                  onClick={() => onNavClick(sectionId)}
                  className={`w-full cursor-pointer rounded-lg px-4 py-3 text-center text-base font-medium transition-colors ${
                    activeSection === sectionId
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400'
                  }`}
                  aria-label={`Navigate to ${item} section`}
                >
                  {t(`nav.${sectionId}`)}
                </Link>
              );
            })}
            <button
              onClick={onToggleLanguage}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-cyan-500/30 px-4 py-3 text-sm hover:bg-cyan-500/10"
              aria-label={`Switch language to ${i18n.language === 'en' ? 'Hebrew' : 'English'}`}
            >
              <Languages size={18} aria-hidden="true" />
              {i18n.language === 'he' ? 'English' : 'עברית'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
