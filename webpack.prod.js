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
    // 防止生成的bundle引入的模块重复
    // splitChunks: {
    //     cacheGroups: { // 自定义组
    //         // commons: {
    //             name: 'commons', // 公共部分输出文件的名称
    //             chunks: 'initial', // 模式 “initial”, “async” 和 “all” -- 优化时只选择初始的chunks，所需要的chunks 还是所有chunks 。
    //             minChunks: 2 // 至少有几个入口相同时判定其为重复
    //         },
    //     },
    // },
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
