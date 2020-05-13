// 生产环境
const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin') // 压缩js
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production', // 压缩输出
  plugins: [
    new CleanWebpackPlugin(),
    // 提供生成的index.html模板
    new HtmlWebpackPlugin({
      title: 'productionPage',
      template: 'index.html'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i
      })
    ],
    // 分离压缩代码
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'static/js/vendors',
          chunks: 'initial'
        }
      }
    }
  }
})
