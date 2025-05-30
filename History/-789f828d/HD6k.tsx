import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.tsx';
import store from '../store/store.ts';
import SupabaseProvider from '../context/SupabaseContext.tsx';
import GlobalStyles from '../styles/GlobalStyles.ts';
import ReactQueryProvider from '../components/ReactQueryProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ReactQueryProvider>
        <SupabaseProvider>
          <GlobalStyles />
          <App />
        </SupabaseProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </ReactQueryProvider>
    </Provider>
  </StrictMode>
);
