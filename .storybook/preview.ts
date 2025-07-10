// .storybook/preview.ts
import '../src/index.css'; // Подключаем tailwind-стили
import { withThemeByClassName } from '@storybook/addon-themes';

import type { Preview } from '@storybook/react';

// 👇 Добавляем декоратор, который будет менять класс на html
const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light', // html.className = 'light'
      dark: 'dark', // html.className = 'dark'
    },
    defaultTheme: 'light',
  }),
];

const preview: Preview = {
  decorators,
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    a11y: {
      // accessibility настройки (если используешь addon-a11y)
      test: 'todo',
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
        showName: true,
      },
    },
  },
};

export default preview;
