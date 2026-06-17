import { useEffect } from 'react';

import useThemeStore from '../store/themeStore';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({
  children,
}: ThemeProviderProps) => {
  const theme = useThemeStore(
    (state) => state.theme,
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme,
    );
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;