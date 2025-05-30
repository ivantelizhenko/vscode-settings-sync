import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import GlobalStyles from "./style/GlobalStyles.ts";
import { StoreProvider } from "./contexts/store.tsx";
import SupabaseProvider from "./contexts/SupabaseContext.tsx";
import ReactQueryProvider from "./contexts/ReactQueryContext.tsx";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <ReactQueryProvider>
        <SupabaseProvider>
          <App />
          <GlobalStyles />
          <Toaster toastOptions={{
    style: {
      zIndex: 9999, // або більше
    },
/>
        </SupabaseProvider>
      </ReactQueryProvider>
    </StoreProvider>
  </StrictMode>
);
