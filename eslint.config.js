import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  settings: { react: { version: 'detect' } },
  extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {},
  plugins: {
    'react-hooks': reactHooks,
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
    ...reactHooks.configs.recommended.rules,
  },
});
