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
}

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
      },
    },
    exclude: /node_modules/,
  }
}

/**
 * 处理less文件
 * TODO: 生产环境需要提取css，压缩css
 */
export const createLessRule = () => {
  return {
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      'less-loader',
    ],
  }
}