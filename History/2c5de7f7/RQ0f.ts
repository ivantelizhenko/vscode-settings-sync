import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    // Вказуємо, що хочемо налаштувати Babel
    babel: {
      plugins: [
        // Налаштовуємо babel-plugin-styled-components з потрібними опціями
        ['babel-plugin-styled-components', { displayName: true, fileName: true }]
      ],
      // Фіксуємо конфігурацію Babel, щоб не брати зовнішні налаштування
      babelrc: false,
      configFile: false,
    })],
});
