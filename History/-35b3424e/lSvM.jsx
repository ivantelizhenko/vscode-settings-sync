import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
