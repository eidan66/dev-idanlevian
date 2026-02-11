'use client';

import { Upload } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { useContactForm } from '../hooks/useContactForm';

export interface ContactSectionProps {
  isRTL: boolean;
}

export function ContactSection({ isRTL }: ContactSectionProps) {
  const { t } = useTranslation();
  const { formData, formStatus, handleFileChange, handleInputChange, handleFormSubmit } =
    useContactForm();

  return (
    <section id="contact" className="relative px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 bg-gradient-to-r from-white via-cyan-400 to-pink-400 bg-clip-text text-center text-4xl font-black text-transparent md:text-5xl">
          {t('contact.title')}
        </h2>
        <form
          className="space-y-6 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8 transition-all hover:border-cyan-500/50 md:p-10"
          onSubmit={handleFormSubmit}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="contact-name" className="px-1 text-sm text-gray-400">
                {t('contact.name')}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg border border-gray-700 bg-gray-800 p-4 text-white transition-colors focus-visible:border-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                placeholder={t('contact.placeholderName')}
                aria-required="true"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-email" className="px-1 text-sm text-gray-400">
                {t('contact.email')}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-700 bg-gray-800 p-4 text-white transition-colors focus-visible:border-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                placeholder="email@example.com"
                required
                aria-required="true"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="contact-budget" className="px-1 text-sm text-gray-400">
                {t('contact.budget')}
              </label>
              <div className="relative">
                <select
                  id="contact-budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full cursor-pointer appearance-none rounded-lg border border-gray-700 bg-gray-800 p-4 text-white transition-colors focus-visible:border-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  <option value="" className="bg-gray-900">
                    {t('contact.budgetHint')}
                  </option>
                  <option value="1k-5k" className="bg-gray-900">
                    ₪1,000 - ₪5,000
                  </option>
                  <option value="5k-10k" className="bg-gray-900">
                    ₪5,000 - ₪10,000
                  </option>
                  <option value="10k-30k" className="bg-gray-900">
                    ₪10,000 - ₪30,000
                  </option>
                  <option value="30k+" className="bg-gray-900">
                    ₪30,000+
                  </option>
                </select>
                <div
                  className={`pointer-events-none absolute inset-y-0 flex items-center ${
                    isRTL ? 'left-4' : 'right-4'
                  }`}
                  aria-hidden="true"
                >
                  <div className="-rotate-45 h-2 w-2 border-b-2 border-l-2 border-gray-400"></div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-file" className="px-1 text-sm text-gray-400">
                {t('contact.fileLabel')}
              </label>
              <div className="group relative">
                <input
                  id="contact-file"
                  type="file"
                  onChange={handleFileChange}
                  className="absolute inset-0 z-10 cursor-pointer opacity-0"
                  accept="image/*,application/pdf"
                  aria-label={t('contact.fileLabel')}
                />
                <div className="flex w-full items-center justify-between rounded-lg border border-gray-700 bg-gray-800 p-4 text-white transition-colors group-hover:border-cyan-500">
                  <span className="mr-2 truncate text-sm">
                    {formData.file ? formData.file.name : t('contact.fileHint')}
                  </span>
                  <Upload
                    size={18}
                    className="shrink-0 text-cyan-400"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="contact-message" className="px-1 text-sm text-gray-400">
              {t('contact.message')}
            </label>
            <textarea
              id="contact-message"
              className="h-40 w-full resize-none rounded-lg border border-gray-700 bg-gray-800 p-4 text-white transition-colors focus-visible:border-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              placeholder={t('contact.placeholderMessage')}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            disabled={formStatus === 'sending'}
            className="w-full cursor-pointer transform rounded-lg bg-gradient-to-r from-cyan-500 to-pink-500 p-4 text-lg font-bold transition-all hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {formStatus === 'sending' ? t('contact.sending') : t('contact.send')}
          </button>

          {formStatus === 'success' && (
            <div
              className="animate-pulse rounded-lg border border-green-500/50 bg-green-500/10 p-4 text-center font-bold text-green-400"
              role="alert"
              aria-live="polite"
            >
              {t('contact.success')}
            </div>
          )}
          {formStatus === 'error' && (
            <div
              className="rounded-lg border border-red-500/50 bg-red-500/10 p-4 text-center font-bold text-red-400"
              role="alert"
              aria-live="assertive"
            >
              {t('contact.error')}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
