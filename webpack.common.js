// 公用配置
const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [

  ],
  output: {
    filename: '[name].bundle.js',
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
    // 防止生成的bundle引入的模块重复
    splitChunks: {
      cacheGroups: { // 自定义组
          commons: {
              name: 'commons', // 公共部分输出文件的名称
              chunks: 'initial', // 模式 “initial”, “async” 和 “all” -- 优化时只选择初始的chunks，所需要的chunks 还是所有chunks 。
              minChunks: 2 // 至少有几个入口相同时判定其为重复
          }
      }
    }
  }
};