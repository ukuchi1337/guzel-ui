// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import js from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import betterTailwindcss from 'eslint-plugin-better-tailwindcss';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  [
    globalIgnores(['dist', '.vite']),

    {
      files: ['**/*.{ts,tsx,js,jsx}'],
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module',
          ecmaFeatures: { jsx: true },
        },
        globals: {
          ...globals.browser,
          React: 'readonly',
          vi: 'readonly',
          describe: 'readonly',
          it: 'readonly',
          test: 'readonly',
          expect: 'readonly',
          beforeEach: 'readonly',
          afterEach: 'readonly',
        },
      },
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        'better-tailwindcss': betterTailwindcss,
        import: importPlugin,
      },
      settings: {
        'import/resolver': {
          typescript: {
            project: './tsconfig.json',
          },
        },
      },
      rules: {
        ...js.configs.recommended.rules,
        ...reactHooks.configs['recommended-latest'].rules,
        ...reactRefresh.configs.vite.rules,
        ...betterTailwindcss.configs.recommended.rules,
        // 🔥 Правила порядка импортов:
        'import/order': [
          'error',
          {
            groups: [
              'builtin', // встроенные модули Node.js
              'external', // npm пакеты
              'internal', // абсолютные импорты из алиасов
              ['parent', 'sibling', 'index'], // относительные
              'type',
              'object', // JSON и т.п.
            ],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
    {
      rules: {
        ...prettier.rules,
      },
    },
  ],
  storybook.configs['flat/recommended']
);
