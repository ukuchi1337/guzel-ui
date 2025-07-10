import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
    './.storybook/**/*.{ts,tsx,js}',
  ],
  plugins: [],
};

export default config;
