import type { Config } from 'tailwindcss';
import tailwindTypography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindTypography()],
} satisfies Config;
