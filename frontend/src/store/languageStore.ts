import { create } from 'zustand';

import { persist } from 'zustand/middleware';

import i18n from '../i18n';

export type Language =
  | 'es'
  | 'en';

interface LanguageState {
  language: Language;

  setLanguage: (
    language: Language,
  ) => void;
}

const useLanguageStore =
  create<LanguageState>()(
    persist(
      (set) => ({
        language: 'es',

        setLanguage: (
          language,
        ) => {
          void i18n.changeLanguage(
            language,
          );

          set({
            language,
          });
        },
      }),
      {
        name:
          'portfolio-language',

        onRehydrateStorage:
          () => (state) => {
            if (
              state?.language
            ) {
              void i18n.changeLanguage(
                state.language,
              );
            }
          },
      },
    ),
  );

export default useLanguageStore;