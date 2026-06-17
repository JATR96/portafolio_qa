import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ThemeMode =
  | 'dark'
  | 'light';

interface ThemeState {
  theme: ThemeMode;

  setTheme: (
    theme: ThemeMode,
  ) => void;

  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'dark',

      setTheme: (
        theme: ThemeMode,
      ): void => {
        document.documentElement.setAttribute(
          'data-theme',
          theme,
        );

        set({
          theme,
        });
      },

      toggleTheme: (): void => {
        const nextTheme =
          get().theme === 'dark'
            ? 'light'
            : 'dark';

        document.documentElement.setAttribute(
          'data-theme',
          nextTheme,
        );

        set({
          theme: nextTheme,
        });
      },
    }),
    {
      name: 'portfolio-theme',
    },
  ),
);

export default useThemeStore;