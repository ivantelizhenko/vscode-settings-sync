import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import GlobalStyles from "./style/GlobalStyles.ts";
import { StoreProvider } from "./contexts/store.tsx";
import SupabaseProvider from "./contexts/SupabaseContext.tsx";
import ReactQueryProvider from "./contexts/ReactQueryContext.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <ReactQueryProvider>
        <SupabaseProvider>
          <App />
          <GlobalStyles />
          <Toaster />
        </SupabaseProvider>
      </ReactQueryProvider>
    </StoreProvider>
  </StrictMode>
);
