import { useState } from 'react';
import { GitCompareArrows, Contact, Menu } from 'lucide-react';

import { NAVIGATION_ITEMS } from '../../config/navigation';

import MobileMenu from '../MobileMenu/MobileMenu';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

import styles from './Navbar.module.scss';

const Navbar = () => {
  
  const { t } =
  useTranslation(
    'navigation',
  );

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = (): void => {
    setIsOpen((previousState) => !previousState);
  };

  const handleCloseMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.container}>
          <a
            href="#home"
            className={styles.logo}
          >
            JATR QA
          </a>

          <nav 
            aria-label="Primary navigation"
            className={styles.navigation}>
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={styles.link}
              >
                {t(
                  item.translationKey,
                )}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <ThemeToggle />
            <LanguageSwitcher />
            <a
              href="https://github.com/JATR96"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={styles.iconButton}
            >
              <GitCompareArrows 
                size={18} 
                aria-hidden="true"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/jesus-abel-t-a5b67b16a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={styles.iconButton}
            >
              <Contact 
                size={18}
                aria-hidden="true" 
              />
            </a>

            <button
              type="button"
              aria-label="Open menu"
              className={styles.mobileButton}
              onClick={handleToggleMenu}
            >
              <Menu 
                size={22} 
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isOpen}
        onClose={handleCloseMenu}
      />
    </>
  );
};

export default Navbar;