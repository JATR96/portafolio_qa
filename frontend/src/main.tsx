import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

import ThemeProvider from './providers/ThemeProvider';

import '@styles/globals.scss';

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

ReactDOM.createRoot(
  document.getElementById(
    'root',
  ) as HTMLElement,
).render(
  <React.StrictMode>
    <QueryClientProvider
      client={queryClient}
    >
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>

      <ReactQueryDevtools
        initialIsOpen={false}
      />
    </QueryClientProvider>
  </React.StrictMode>,
);