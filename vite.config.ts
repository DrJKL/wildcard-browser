import react from '@vitejs/plugin-react-swc';

import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react()],
    base: '/wildcard-browser/',
  };
});
