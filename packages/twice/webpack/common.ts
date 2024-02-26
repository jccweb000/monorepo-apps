const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

import { Envs } from '../types';

export const entry = path.resolve(__dirname, '../main.tsx');

export const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.less'],
  alias: {
    '@': path.resolve(__dirname, '../src'),
  },
};

// tip：这是webpack的公共loader配置，后续如果需要根据环境变量进行配置，可以在这里create中添加入参进行配置

/**
 * 处理tsx|ts文件
 */
export const createTsRule = () => {
  return {
    test: /\.(ts|tsx)$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
};

/**
 * 处理jsx|js文件
 */
export const createJsxRule = () => {
  return {
    test: /\.(js|jsx)$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-transform-runtime'],
        sourceMaps: true,
      },
    },
    exclude: /node_modules/,
  };
};

/**
 * 处理less文件
 */
export const createLessRule = (env?: Envs) => {
  return {
    test: /\.less$/,
    use: [
      env === Envs.PROD ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
      'less-loader',
    ],
  };
};

/**
 * 处理资源类型文件
 */

export const createAssetsRule = () => {
  return {
    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/', // 输出到 images 文件夹
        },
      },
    ],
  };
};
