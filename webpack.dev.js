// 开发环境
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // 查看要修补(patch)的依赖-查看更改的文件
    new webpack.HotModuleReplacementPlugin()
 ],
});