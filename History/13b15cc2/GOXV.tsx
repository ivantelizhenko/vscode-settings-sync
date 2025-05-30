import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from './styles/GlobalStyles.ts';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </StrictMode>
);
