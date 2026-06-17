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
      ) =>
        set({
          theme,
        }),

      toggleTheme: () => {
        const nextTheme =
          get().theme === 'dark'
            ? 'light'
            : 'dark';

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