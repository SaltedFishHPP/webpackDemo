// 公用配置
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin') // 添加vue-loader
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // 路径别名
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'static': path.resolve(__dirname, 'static'),
    }
  },
  entry: {
    app: './src/main.js',
    // app: './src/webpack/index.js'
  },
  plugins: [
    new VueLoaderPlugin(), // 引入vue-loader
    new MiniCssExtractPlugin({
      filename: 'static/style/style.css'
    }),
  ],
  output: {
    filename: process.env.NODE_ENV === 'production' ? 'static/js/[name].[chunkhash].js' : 'static/js/[name].[hash].js', // chunkhash不可与热更新一起使用
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
            {
                loader: 'file-loader',
                options: {
                    limit: 10240,
                    name:"static/imgs/[name].[ext]",
                    esModule: false
                }
            }
          ],
          
      },
      {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
                loader: 'file-loader',
                options: {
                  limit: 10240,
                  name:"static/fonts/[name].[ext]",
                  esModule: false
              }
            }
          ]
      },
      // 提取css
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
          test: /\.less$/,
          use: [
            process.env.NODE_ENV !== 'production'
              ? 'vue-style-loader'
              : MiniCssExtractPlugin.loader,
            'css-loader',
            'less-loader',
          ]
      },
    ]
  },
  optimization: {

  }
};