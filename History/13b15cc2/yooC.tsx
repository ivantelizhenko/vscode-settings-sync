import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from './styles/GlobalStyles.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>
);
