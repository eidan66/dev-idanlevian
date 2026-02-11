'use client';

import { Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

export function HeroSection({ onScrollToSection }: HeroSectionProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <div className="mb-6 inline-block animate-pulse rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-400">
          {t('hero.badge')}
        </div>
        <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
          <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            {t('hero.title1')}
          </span>
          <br />
          <span className="gradient-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            {t('hero.title2')}
          </span>
        </h1>
        <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
          {t('hero.desc')}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => onScrollToSection('contact')}
            className="flex min-h-[48px] cursor-pointer items-center justify-center gap-2 transform rounded-lg bg-gradient-to-r from-cyan-500 to-pink-500 px-8 py-4 font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,217,255,0.5)]"
          >
            {isRTL && <Zap size={20} aria-hidden="true" />}
            {t('hero.btn1')}
            {!isRTL && <Zap size={20} aria-hidden="true" />}
          </button>
          <button
            onClick={() => onScrollToSection('skills')}
            className="flex min-h-[48px] cursor-pointer items-center justify-center rounded-lg border-2 border-cyan-500/50 px-8 py-4 font-bold transition-all hover:bg-cyan-500/10"
          >
            {t('hero.btn2')}
          </button>
        </div>
      </div>
    </section>
  );
}
