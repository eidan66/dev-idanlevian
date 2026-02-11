'use client';

import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function TrustSection() {
  const { t } = useTranslation();

  return (
    <section id="trust" className="relative px-6 py-12" aria-labelledby="trust-title">
      <div className="mx-auto max-w-4xl text-center">
        {/* Title */}
        <h2
          id="trust-title"
          className="mb-4 bg-linear-to-r from-cyan-400 to-pink-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
        >
          {t('trust.title')}
        </h2>

        {/* Subtitle */}
        <p className="mb-12 text-lg text-gray-400 md:text-xl">{t('trust.subtitle')}</p>

        {/* Story with quotation mark */}
        <div className="relative mx-auto max-w-3xl">
          <Quote
            className="absolute -left-4 -top-4 h-12 w-12 text-cyan-400/30 md:-left-8 md:-top-8 md:h-16 md:w-16"
            aria-hidden="true"
          />
          <blockquote className="text-start rtl:text-right relative rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 p-8 text-lg leading-relaxed text-gray-300 md:p-12 md:text-xl">
            {t('trust.story')}
          </blockquote>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-pink-500/5 blur-3xl" />
      </div>
    </section>
  );
}
