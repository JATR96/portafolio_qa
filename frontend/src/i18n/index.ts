import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import esCommon from '../translations/es/common.json';
import esNavigation from '../translations/es/navigation.json';
import esHomepage from '../translations/es/homepage.json';
import esExperience from '../translations/es/experience.json';
import esProject from '../translations/es/projects.json';
import esDashboard from '../translations/es/dashboard.json';

import enCommon from '../translations/en/common.json';
import enNavigation from '../translations/en/navigation.json';
import enHomepage from '../translations/en/homepage.json';
import enExperience from '../translations/en/experience.json';
import enProject from '../translations/en/projects.json';
import enDashboard from '../translations/en/dashboard.json';

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',

    lng: 'es',

    supportedLngs: [
      'es',
      'en',
    ],

    interpolation: {
      escapeValue: false,
    },

    resources: {
      es: {
        common: 
          esCommon,
        navigation:
          esNavigation,
        homepage:
          esHomepage,
        experience:
          esExperience,
        project:
          esProject,
        dashboard:
          esDashboard,      
      },

      en: {
        common: 
          enCommon,
        navigation:
          enNavigation,
        homepage:
          enHomepage,
        experience:
          enExperience,
        project:
          enProject,
        dashboard:
          enDashboard,    
      },
    },
  });

export default i18n;