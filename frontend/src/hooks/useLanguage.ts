import { useTranslation } from 'react-i18next';

const STORAGE_KEY = 'portfolio-language';

export function useLanguage() {
  const { i18n } = useTranslation();

  const changeLanguage = async (
    language: 'es' | 'en',
  ): Promise<void> => {
    await i18n.changeLanguage(language);

    localStorage.setItem(
      STORAGE_KEY,
      language,
    );
  };

  return {
    language: i18n.language,
    changeLanguage,
  };
}