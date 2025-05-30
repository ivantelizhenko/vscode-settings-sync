import { defineConfig } from 'vitest/config';

import react from '@vitejs/plugin-react';

import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true, // включає глобальні змінні типу `describe`, `it` тощо
    environment: 'jsdom', // вибір середовища для тестів (для React це jsdom)
    setupFiles: './src/setupTests.ts', // файл для налаштувань перед тестами
  },
});
