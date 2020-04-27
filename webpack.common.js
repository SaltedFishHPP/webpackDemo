// 公用配置
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin') // 添加vue-loader

module.exports = {
  entry: {
    app: './src/vue.js',
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
              'css-loader',
              'vue-style-loader'
          ]
      },
      {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                // 你也可以从一个文件读取，例如 `variables.scss`
                // 如果 sass-loader 版本 < 8，这里使用 `data` 字段
                prependData: `$color: red;`
              }
            }
          ]
      },
      {
          test: /\.less$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'less-loader'
          ]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              // sass-loader version >= 8
              sassOptions: {
                indentedSyntax: true
              }
            }
          }
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