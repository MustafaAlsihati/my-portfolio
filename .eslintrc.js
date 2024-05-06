module.exports = {
  extends: 'next/core-web-vitals',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
    'import/no-unresolved': 'error',
    'import/named': 'off',
    'no-console': 'off',
    'react/display-name': 'off',
    'import/no-anonymous-default-export': 'off',
  },
};
