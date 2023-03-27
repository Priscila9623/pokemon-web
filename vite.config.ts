import path from 'path';
import { fileURLToPath } from 'url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

const dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      '@assets': `${path.resolve(dirname, './src/assets/')}`,
      '@components': `${path.resolve(dirname, './src/components/')}`,
      '@constants': `${path.resolve(dirname, './src/constants/')}`,
      '@custom-types': `${path.resolve(dirname, './src/custom-types/')}`,
      '@enums': `${path.resolve(dirname, './src/enums/')}`,
      '@hooks': `${path.resolve(dirname, './src/hooks/')}`,
      '@utils': `${path.resolve(dirname, './src/utils/')}`,
      '@pages': `${path.resolve(dirname, './src/pages/')}`,
      '@theme': `${path.resolve(dirname, './src/theme/')}`,
      '@layout': `${path.resolve(dirname, './src/layout/')}`,
      '@api': `${path.resolve(dirname, './src/api/')}`,
      '@services': `${path.resolve(dirname, './src/services/')}`,
    },
  },
});
