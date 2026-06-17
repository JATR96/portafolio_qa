import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export type ThemeMode = 'dark' | 'light';

interface ThemeContextValue {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(
  null,
);

interface ThemeProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = 'portfolio-theme';

export function ThemeProvider({
  children,
}: ThemeProviderProps): React.JSX.Element {
  const [theme, setTheme] =
    useState<ThemeMode>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem(
      STORAGE_KEY,
    ) as ThemeMode | null;

    if (savedTheme) {
      setTheme(savedTheme);
      return;
    }

    setTheme('dark');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme,
    );

    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme((previousTheme) =>
      previousTheme === 'dark'
        ? 'light'
        : 'dark',
    );
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useTheme must be used inside ThemeProvider',
    );
  }

  return context;
}