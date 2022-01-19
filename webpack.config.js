const path = require('path');

const config = {};

config.optimization = {
  minimize: false,
};

config.resolve = {};
config.resolve.extensions = ['.ts', '...'];

config.module = {};
config.module.rules = [];
config.module.rules.push({
  test: /\.ts$/i,
  use: [
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true
      }
    }
  ]
});
config.mode = 'development';
config.devtool = false;
config.entry = require.resolve('./index.ts');
config.output = {
  filename: 'index.js',
  iife: true,
  path: path.resolve(__dirname)
};

module.exports = [
  config
];
