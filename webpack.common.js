// 公用配置
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin') // 添加vue-loader

module.exports = {
  entry: {
    app: './src/main.js',
  },
  plugins: [
    new VueLoaderPlugin() // 引入vue-loader
  ],
  output: {
    filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].js' : '[name].[hash].js', // chunkhash不可与热更新一起使用
    chunkFilename: '[name].bundle.js', // 决定非入口 chunk 的名称
    path: process.env.NODE_ENV === 'production' ? path.resolve(__dirname, 'dist') : path.resolve(__dirname,'../')
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
        test: /\.(js|vue)$/,
        use: [
          'babel-loader'
        ],
        // 排除node_modules内的转译
        exclude: /node_modules/
        // exclude: file => (
        //   /node_modules/.test(file) &&
        //   !/\.vue\.js/.test(file)
        // )
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