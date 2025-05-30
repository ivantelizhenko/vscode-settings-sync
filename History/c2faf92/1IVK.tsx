import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/default.css';
import { AppProvider } from './contexts/userContext/AppContext.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
