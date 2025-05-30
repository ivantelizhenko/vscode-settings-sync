import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.tsx';
import store from '../store/store.ts';
import SupabaseProvider from '../context/SupabaseContext.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from '../styles/GlobalStyles.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider>
      <SupabaseProvider>
        <Provider store={store}>
          <App />
        </Provider>
        <GlobalStyles />
      </SupabaseProvider>
    </QueryClientProvider>
  </StrictMode>
);

D v