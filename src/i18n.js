// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enJson from './locales/en/translation.json';
import jpJson from './locales/jp/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enJson },
      jp: { translation: jpJson },
    },

    lng: 'en', // default language
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });
