module.exports = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: 'usage', corejs: { version: 3, proposals: true } }],
    '@babel/preset-react',
    [
      '@emotion/babel-preset-css-prop',
      {
        sourceMap: true,
        autoLabel: process.env.NODE_ENV !== 'production',
        labelFormat: '[local]',
        cssPropOptimization: true,
      },
    ],
  ],
}
