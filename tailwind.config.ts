import type { Config } from 'tailwindcss';
import tailwindTypography from '@tailwindcss/typography';

export default {
  content: ['./index.html', './src/**/*.{html,js,tsx,ts,css}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindTypography()],
} satisfies Config;
