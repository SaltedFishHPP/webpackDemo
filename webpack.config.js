const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: {
    main: './src/index.js',
    vendor: [
      'lodash'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    new CleanWebpackPlugin(),
  ],
  // optimization与entry/plugins同级
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendor",
          chunks: "initial",
          minChunks: 2
        },
        manifest: {
          name: "manifest",
          chunks: "initial",
          minChunks: 2
        },
      // common: {
      //     name: "common",
      //     chunks: "initial",
      //     minChunks: 2
      // },
      }
    }
  },

  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
};