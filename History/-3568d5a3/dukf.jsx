import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Application from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Application />
  </StrictMode>
);
