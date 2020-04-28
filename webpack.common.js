// 公用配置
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin') // 添加vue-loader

module.exports = {
  entry: {
    app: './src/webpack/index.js',
  },
  plugins: [
    new VueLoaderPlugin() // 引入vue-loader
  ],
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].bundle.js', // 决定非入口 chunk 的名称
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // 排除node_modules内的转译
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      {
          test: /\.css$/, // 根据正则表达式，来确定应该查找哪些文件
          use: [ // 将其提供给指定的 loader (style-loader 和 css-loader)
              'style-loader',
              
              'css-loader'
              // {
              //   loader: 'css-loader',
              //   options: {
              //     // 开启 CSS Modules
              //     modules: true,
              //     // 自定义生成的类名
              //     // localIdentName: '[local]_[hash:base64:8]'
              //   }
              // },
          ],
      },
      // {
      //     test: /\.less$/,
      //     use: [
      //       'less-loader',
      //       'vue-style-loader',
      //       {
      //         loader: 'css-loader',
      //         options: { modules: true }
      //       },
            
      //     ]
      // },
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