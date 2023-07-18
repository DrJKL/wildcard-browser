import autoprefixer from 'autoprefixer';
import type { Config } from 'postcss-load-config';

export const config: Config = {
  plugins: [autoprefixer()],
};
