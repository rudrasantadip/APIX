// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Resolving `@` to the `src` directory
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    // This is optional, you can add custom settings for your dev server
    port: 3000, // Or any port of your choice
    open: true, // Automatically open the app in the browser
  },
  build: {
    // You can add custom build configurations here if needed
    outDir: 'dist', // Output directory for production build
  },
});
