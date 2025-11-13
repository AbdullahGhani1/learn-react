import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import parser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';

// Recreate __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat
const compat = new FlatCompat({
   baseDirectory: __dirname,
   resolvePluginsRelativeTo: __dirname,
});

export default [
   {
      ignores: [
         '**/node_modules/',
         '**/dist/',
         '**/*.config.js',
         '**/components/ui/**/*',
      ],
   },
   // Use FlatCompat to extend from 'standard'
   ...compat.extends(
      'standard',
      // 'plugin:tailwindcss/recommended',
      'prettier'
   ),
   // JavaScript and JSX files
   {
      files: ['**/*.js', '**/*.jsx'],
      plugins: {
         react,
      },
      languageOptions: {
         parserOptions: {
            ecmaFeatures: {
               jsx: true,
            },
         },
      },
      settings: {
         react: {
            version: 'detect',
         },
      },
      rules: {
         ...react.configs.recommended.rules,
         'react/react-in-jsx-scope': 'off', // Not needed in React 17+
         'react/prop-types': 'off', // Using TypeScript for prop validation
         'react/no-unescaped-entities': 'off', // Allow apostrophes and quotes in JSX
      },
   },
   // TypeScript and TSX files - syntax parsing only (NO type-checking)
   {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: {
         react,
      },
      languageOptions: {
         parser: parser, // Use TypeScript parser for syntax only
         parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            ecmaFeatures: {
               jsx: true,
            },
            // NO project or tsconfigRootDir - this avoids type-checking
         },
      },
      settings: {
         react: {
            version: 'detect',
         },
      },
      rules: {
         ...react.configs.recommended.rules,
         'react/react-in-jsx-scope': 'off',
         'react/prop-types': 'off',
         'react/no-unescaped-entities': 'off', // Allow apostrophes and quotes in JSX
         'no-unused-vars': 'off', // TypeScript compiler handles this
         'no-undef': 'off', // TypeScript compiler handles this
      },
   },
   {
      rules: {
         'import/order': [
            'error',
            {
               groups: [
                  'builtin',
                  'external',
                  'internal',
                  ['parent', 'sibling'],
                  'index',
                  'object',
               ],

               'newlines-between': 'always',

               pathGroups: [
                  {
                     pattern: '@src/**',
                     group: 'external',
                     position: 'after',
                  },
               ],

               pathGroupsExcludedImportTypes: ['builtin'],

               alphabetize: {
                  order: 'asc',
                  caseInsensitive: true,
               },
            },
         ],
         'comma-dangle': 'off',
      },
   },
   {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: {
         'react-hooks': reactHooks,
         'react-refresh': reactRefresh,
      },
      rules: {
         ...reactHooks.configs.recommended.rules,
         'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
         ],
      },
   },
   {
      files: ['**/*.test.js', '**/*.test.jsx', '**/*.test.ts', '**/*.test.tsx'],
      languageOptions: {
         globals: {
            test: 'readonly',
            expect: 'readonly',
            describe: 'readonly',
            it: 'readonly',
            beforeEach: 'readonly',
            afterEach: 'readonly',
            beforeAll: 'readonly',
            afterAll: 'readonly',
            jest: 'readonly',
         },
      },
   },
];
