'use client';

import { useTranslation } from 'react-i18next';

import { SKILL_ICONS } from '../constants';

export function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="relative px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 bg-gradient-to-r from-white to-pink-400 bg-clip-text text-center text-4xl font-black text-transparent md:text-5xl">
          {t('skills.title')}
        </h2>
        <p className="mb-12 text-center text-xl text-gray-400">{t('skills.subtitle')}</p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2, 3, 4, 5, 6].map((idx) => {
            const Icon = SKILL_ICONS[idx];
            const isRecommended = idx === 6;
            return (
              <div
                key={idx}
                className={`group relative transform rounded-2xl border bg-gradient-to-br from-gray-900 to-gray-800 p-8 transition-all hover:scale-105 ${
                  isRecommended
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/30 lg:col-start-2'
                    : 'border-gray-700 hover:border-cyan-500/50'
                }`}
              >
                {isRecommended && (
                  <span className="absolute right-4 top-4 rounded border border-cyan-500/30 bg-cyan-500/10 px-2 py-1 text-xs font-medium uppercase text-cyan-400">
                    {t('skills.badgeRecommended')}
                  </span>
                )}
                <div className="mb-4 transition-transform group-hover:scale-110">
                  <Icon className="text-cyan-400" size={40} aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-cyan-400">
                  {t(`skills.items.${idx}.title`)}
                </h3>
                <p className="leading-relaxed text-gray-400">
                  {t(`skills.items.${idx}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
