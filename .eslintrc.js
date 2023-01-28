module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['react-hooks', 'prettier'],
  rules: {
    'import/no-named-as-default': 0,
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    curly: 0,
    'react-hooks/exhaustive-deps': 1,
    '@next/next/no-img-element': 0,
    'jsx-a11y/alt-text': 0,
    'react/display-name': 0,
    'import/no-anonymous-default-export': 0,
  },
};
