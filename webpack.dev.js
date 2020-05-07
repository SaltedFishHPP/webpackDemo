// 开发环境
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
// const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: './src/main.js',
        host: 'localhost'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'development',
            filename: 'index.html',
            template: 'index.html',
        }),
        new webpack.NamedModulesPlugin(), // 查看要修补(patch)的依赖-查看更改的文件
        new webpack.HotModuleReplacementPlugin(),
        // new StyleLintPlugin({
        //     files: ['src/**/*.{vue,htm,html,css,sss,less,scss,sass}'],
        // })
    ],
    module:{
        rules:[
            {
                // 预处理
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                // 指定检查的目录
                include: [path.resolve(__dirname, 'src')]
            },
        ]
    }
});