import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
   root: resolve(__dirname, 'src'),
   build: {
      outDir: resolve(__dirname, 'dist'),
      emptyOutDir: true,
   },
   server: {
      port: 8080,
   },
   plugins: [react()],
   resolve: {
      alias: {
         '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
      },
   },
   css: {
      preprocessorOptions: {
         scss: {
            silenceDeprecations: [
               'import',
               'mixed-decls',
               'color-functions',
               'global-builtin',
            ],
         },
      },
   },
});
