const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');

import * as Common from './common';

module.exports = {
  entry: path.resolve(__dirname, '../main.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      Common.createLessRule(),
      Common.createTsRule(),
      Common.createJsxRule(),
      Common.createAssetsRule(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
    }),
    new WebpackBar(),
  ],
  devServer: {
    port: 8088,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.less'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
};
