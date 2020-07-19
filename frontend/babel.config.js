module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
        targets: { browsers: ['last 2 versions', '>= 5% in US'] },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['babel-plugin-styled-components'],
}
