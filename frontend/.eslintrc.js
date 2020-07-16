module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y', 'emotion'],
  rules: {
    'emotion/jsx-import': 'error',
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 0,
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
}
