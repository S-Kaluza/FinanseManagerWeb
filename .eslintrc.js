module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'airbnb', 'airbnb-typescript'],
  rules: {
    'object-curly-newline': 'off',
    'max-len':'off',
    'line-break-style': 'off',
    'react/jsx-props-no-spreading': 'warn',
    "jsx-a11y/control-has-associated-label": 0,
    "jsx-a11y/label-has-associated-control": 0,
  }
};