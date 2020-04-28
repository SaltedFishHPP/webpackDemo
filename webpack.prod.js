// 生产环境
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    optimization: {
        // 防止生成的bundle引入的模块重复
        splitChunks: {
            cacheGroups: { // 自定义组
                commons: {
                    name: 'commons', // 公共部分输出文件的名称
                    chunks: 'initial', // 模式 “initial”, “async” 和 “all” -- 优化时只选择初始的chunks，所需要的chunks 还是所有chunks 。
                    minChunks: 2 // 至少有几个入口相同时判定其为重复
                },
                commons: {
                    name: 'manifest', // 公共部分输出文件的名称
                    chunks: 'initial', // 模式 “initial”, “async” 和 “all” -- 优化时只选择初始的chunks，所需要的chunks 还是所有chunks 。
                    minChunks: 2 // 至少有几个入口相同时判定其为重复
                }
            },
        },
        minimize: true,
        minimizer: [new TerserPlugin({sourceMap: true})],
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                  process.env.NODE_ENV !== 'production'
                    ? 'vue-style-loader'
                    : MiniCssExtractPlugin.loader,
                  'css-loader'
                ]
            }
        ]
    }
});