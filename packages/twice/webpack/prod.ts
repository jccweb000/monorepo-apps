const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackBar = require('webpackbar');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

import { Envs } from '../types';

import { 
  createTsRule,
  createJsxRule,
  createLessRule,
  createAssetsRule,
  entry,
  resolve
} from './common';

module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash:6].js',
    publicPath: './',
    clean: true
  },
  mode: 'production',
  module: {
    rules: [
      createLessRule(Envs.PROD),
      createTsRule(),
      createJsxRule(),
      createAssetsRule(),
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
      new TerserPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 2048, //最小chunk(bytes)
      cacheGroups: {
        commons: {
          chunks: "all",
          minChunks: 2, //表示提取公共部分最少的文件数
          minSize: 0, //表示提取公共部分最小的大小
          name: "js/commons", //提取出来的文件命名
        },
        antd: {
          test: /[\\/]node_modules[\\/](antd)[\\/]/,
          chunks: 'all',
          name: 'antd',
        }
      },
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:6].min.css'
    }),
    new WebpackBar(),
  ],
  resolve
}