'use client';

import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import '@/lib/i18n-client';

import {
  ContactSection,
  HeroSection,
  PortfolioFooter,
  PortfolioHeader,
  ProjectsSection,
  SkillsSection,
  TrustSection,
} from '@/components/Portfolio/components';
import {
  useCursorPosition,
  useLoadedState,
  useScrollSection,
} from '@/components/Portfolio/hooks';

export function Portfolio() {
  const { i18n } = useTranslation();
  const [activeSection, setActiveSection] = useScrollSection();
  const cursorPosition = useCursorPosition();
  const isLoaded = useLoadedState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isRTL = i18n.language === 'he';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = i18n.language;
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    }
  }, [i18n.language, isRTL]);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'he' : 'en');
  };

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden text-white ${
        isRTL ? 'font-hebrew' : ''
      }`}
    >
      {/* Unified page background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-black via-cyan-950/10 to-pink-950/10" />
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
      </div>

      {/* Custom cursor effect - z-0 to stay behind interactive content (nav z-40) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 h-full w-full"
        style={{
          background: `radial-gradient(600px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(0, 217, 255, 0.08), transparent 40%)`,
        }}
        aria-hidden="true"
      />

      <PortfolioHeader
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        isLoaded={isLoaded}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        onNavClick={handleNavClick}
        onToggleLanguage={toggleLanguage}
      />

      <HeroSection onScrollToSection={scrollToSection} />
      <ProjectsSection onScrollToSection={scrollToSection} />
      <SkillsSection />
      <TrustSection />
      <ContactSection isRTL={isRTL} />
      <PortfolioFooter />
    </div>
  );
}
