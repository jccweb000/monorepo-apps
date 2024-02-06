const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../main.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    })
  ],
  devServer: {
    port: 8088,
    hot: true,
    open: true,
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.less'],
    alias: {
      '@': '../src'
    },
  }
}