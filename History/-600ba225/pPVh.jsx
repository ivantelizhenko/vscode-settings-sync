import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import GlobalStyles from "./components/GlobalStyles.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>
);
