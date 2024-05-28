const globals = require("globals");
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'script', // Specify CommonJS source type
  },
  extends: [
    '@react-native',
    'plugin:@typescript-eslint/recommended-type-checked',
  ],
  rules: {
    'prettier/prettier': 0,
    // Note: you must disable the base rule as it can report incorrect errors
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
    '@typescript-eslint/no-unused-vars': 'error',
  },
  globals: {
    // Define your global variables here if needed
  },
  overrides: [
    {
      files: ['*.js'],
      extends: [
        'plugin:js/recommended',
        'plugin:vue/essential',
      ],
    },
    {
      files: ['*.vue'],
      extends: [
        'plugin:vue/essential',
      ],
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
    },
  ],
};