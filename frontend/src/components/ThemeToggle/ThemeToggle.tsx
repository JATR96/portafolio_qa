import {
  Moon,
  Sun,
} from 'lucide-react';

import useThemeStore from '../../store/themeStore';

import styles from './ThemeToggle.module.scss';

const ThemeToggle = () => {
  const {
    theme,
    toggleTheme,
  } = useThemeStore();

  return (
    <button
      type="button"
      className={styles.button}
      onClick={toggleTheme}
      aria-label="Theme Toggle"
    >
      {theme === 'dark' ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
};

export default ThemeToggle;