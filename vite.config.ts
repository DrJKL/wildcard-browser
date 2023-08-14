import react from '@vitejs/plugin-react-swc';

import million from 'million/compiler';

import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [million.vite({ auto: true }), react()],
    base: '/wildcard-browser/',
  };
});
