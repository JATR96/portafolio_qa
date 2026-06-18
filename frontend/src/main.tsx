import React from 'react';
import ReactDOM from 'react-dom/client';

import './i18n';

import App from './App';

import { AppProviders } from './providers/AppProviders';

import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@styles/globals.scss';

ReactDOM.createRoot(
  document.getElementById(
    'root',
  ) as HTMLElement,
).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
);