module.exports = {
  extends: ['airbnb', 'prettier'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/require-default-props': 'off',
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
}
