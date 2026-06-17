import { ReactNode } from 'react';

import { QueryProvider } from './QueryProvider';
import ThemeProvider from './ThemeProvider';

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({
  children,
}: AppProvidersProps): React.JSX.Element {
  return (
    <QueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryProvider>
  );
}