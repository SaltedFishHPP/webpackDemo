// 公用配置
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin') // 添加vue-loader
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  resolve: { alias: { 'vue': 'vue/dist/vue.js' } },
  entry: {
    app: './src/main.js',
    // app: './src/webpack/index.js'
  },
  plugins: [
    new VueLoaderPlugin(), // 引入vue-loader
    new MiniCssExtractPlugin({
      filename: 'style.css'
  })
  ],
  output: {
    // js/[name].[chunkhash].js
    filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].js' : '[name].[hash].js', // chunkhash不可与热更新一起使用
    chunkFilename: '[name].bundle.js', // 决定非入口 chunk 的名称
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/' // package定义NODE_ENV时不能有空格：set NODE_ENV=development&&
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
        use: [
          'babel-loader'
        ],
        // 排除node_modules内的转译
        exclude: file => (
          /node_modules/.test(file) && !/\.vue\.js/.test(file)
        )
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
      },
      // 提取css
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
          // process.env.NODE_ENV !== 'production'
          //   ? 'vue-style-loader'
          //   : MiniCssExtractPlugin.loader,
          // 'css-loader',
        ],
      },
      {
          test: /\.less$/,
          use: [
            // process.env.NODE_ENV !== 'production'
            //   ? 'vue-style-loader'
            //   : MiniCssExtractPlugin.loader,
            'vue-style-loader',
            'css-loader',
            'less-loader',
          ]
      },
    ]
  },
  optimization: {

  }
};