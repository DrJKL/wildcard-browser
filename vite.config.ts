import react from '@vitejs/plugin-react-swc';

import million from 'million/compiler';

import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@wildcard-browser': path.resolve(__dirname, '.'),
      },
    },
    plugins: [million.vite({ auto: true }), react()],
    base: '/wildcard-browser/',
  };
});
