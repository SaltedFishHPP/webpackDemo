// 公用配置
const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    app: './src/vue.js',
  },
  plugins: [

  ],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].bundle.js', // 决定非入口 chunk 的名称
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
          test: /\.css$/, // 根据正则表达式，来确定应该查找哪些文件
          use: [ // 将其提供给指定的 loader (style-loader 和 css-loader)
              'style-loader',
              'css-loader'
          ]
      },
      {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
              'file-loader'
          ]
      },
      {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
              'file-loader'
          ]
      }
    ]
  },
  optimization: {

  }
};