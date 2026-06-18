import { useEffect, useRef, useState } from 'react';

import { Languages, ChevronDown } from 'lucide-react';

import useLanguageStore from '@store/languageStore';

import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = (): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef =
    useRef<HTMLDivElement>(null);

  const language =
    useLanguageStore(
      (state) => state.language,
    );

  const setLanguage =
    useLanguageStore(
      (state) =>
        state.setLanguage,
    );

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent,
    ) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(
          event.target as Node,
        )
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      'mousedown',
      handleClickOutside,
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside,
      );
    };
  }, []);

  const handleLanguageChange = (
    languageCode:
      | 'es'
      | 'en',
  ) => {
    setLanguage(
      languageCode,
    );

    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className={
        styles.container
      }
    >
      <button
        type="button"
        className={
          styles.trigger
        }
        onClick={() =>
          setIsOpen(
            (
              previousState,
            ) =>
              !previousState,
          )
        }
      >
        <Languages
          size={16}
        />

        <span>
          {language === 'es'
            ? 'Español'
            : 'English'}
        </span>

        <ChevronDown
          size={14}
        />
      </button>

      {isOpen && (
        <div
          className={
            styles.dropdown
          }
        >
          <button
            type="button"
            className={
              styles.option
            }
            onClick={() =>
              handleLanguageChange(
                'es',
              )
            }
          >
            Español
          </button>

          <button
            type="button"
            className={
              styles.option
            }
            onClick={() =>
              handleLanguageChange(
                'en',
              )
            }
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;