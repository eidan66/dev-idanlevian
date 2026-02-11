import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { resources } from '@/config/i18n';

i18n.use(initReactI18next).init({
  resources,
  lng: 'he',
  fallbackLng: 'en',
  interpolation: { escapeValue: true },
});
