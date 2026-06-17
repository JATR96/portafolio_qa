import { useState } from 'react';
import { GitCompareArrows, Contact, Menu } from 'lucide-react';

import { NAVIGATION_ITEMS } from '../../config/navigation';

import MobileMenu from '../MobileMenu/MobileMenu';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

import styles from './Navbar.module.scss';

const Navbar = () => {
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

          <nav className={styles.navigation}>
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={styles.link}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <ThemeToggle />
            <a
              href="https://github.com/JATR96"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={styles.iconButton}
            >
              <GitCompareArrows size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/jesus-abel-t-a5b67b16a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={styles.iconButton}
            >
              <Contact size={18} />
            </a>

            <button
              type="button"
              aria-label="Open menu"
              className={styles.mobileButton}
              onClick={handleToggleMenu}
            >
              <Menu size={22} />
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