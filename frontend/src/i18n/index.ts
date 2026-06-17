import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '@translations/en/common.json';
import esCommon from '@translations/es/common.json';

const STORAGE_KEY = 'portfolio-language';

const savedLanguage =
  localStorage.getItem(STORAGE_KEY) ?? 'es';

void i18n.use(initReactI18next).init({
  lng: savedLanguage,
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },

  resources: {
    es: {
      translation: esCommon,
    },

    en: {
      translation: enCommon,
    },
  },
});

export default i18n;