import { ReactNode } from 'react';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface QueryProviderProps {
  children: ReactNode;
}

const queryClient =
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,

        refetchOnWindowFocus: false,

        staleTime:
          1000 * 60 * 5,
      },
    },
  });

export function QueryProvider({
  children,
}: QueryProviderProps): React.JSX.Element {
  return (
    <QueryClientProvider
      client={queryClient}
    >
      {children}

      <ReactQueryDevtools
        initialIsOpen={false}
      />
    </QueryClientProvider>
  );
}