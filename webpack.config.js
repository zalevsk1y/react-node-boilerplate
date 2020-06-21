const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');


const outputDirectory = 'client-dist/';

module.exports = (env, args) => {
  const isDev = args.mode === 'development';
  return {
    mode: isDev ? 'development' : 'production',
    context: path.resolve(__dirname, 'src', 'client'),
    entry: ['./App.js', './app.css'],
    output: {
      path: path.join(__dirname, outputDirectory),
      filename: './js/main[hash].js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000',
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    devServer: {
      port: 3000,
      open: true,
      historyApiFallback: true,
      proxy: {
        '/api': 'http://localhost:8080',
      },
    },
    optimization: {
      minimize: !isDev,
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
      new CleanWebpackPlugin([outputDirectory]),
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: path.resolve(__dirname, 'client-dist', 'index.html'),
      }),
      new ManifestPlugin({
        fileName: path.resolve(__dirname, 'bundle-names-manifest.json'),
      }),
      new MiniCssExtractPlugin({
        filename: './css/[name][hash].css',
        publicPath: path.resolve(__dirname, outputDirectory, 'css'),
      })
    ],
  };
};
