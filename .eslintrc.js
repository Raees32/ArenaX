module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:@typescript-eslint/recommended-type-checked'],
  rules: {
    'prettier/prettier': 0,
    // Note: you must disable the base rule as it can report incorrect errors
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
    '@typescript-eslint/no-unused-vars': 'error',
  },
};

