const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src', 'server'),
  entry: './index.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-dist'),
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
};
