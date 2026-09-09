import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        insurance: resolve(__dirname, 'insurance.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
