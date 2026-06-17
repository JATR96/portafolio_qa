import { useLanguage } from '@hooks/useLanguage';

import styles from './LanguageSwitcher.module.scss';

function LanguageSwitcher(): React.JSX.Element {
  const {
    language,
    changeLanguage,
  } = useLanguage();

  return (
    <div className={styles.switcher}>
      <button
        type="button"
        onClick={() => void changeLanguage('es')}
        className={
          language === 'es'
            ? styles.active
            : ''
        }
      >
        ES
      </button>

      <button
        type="button"
        onClick={() => void changeLanguage('en')}
        className={
          language === 'en'
            ? styles.active
            : ''
        }
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;