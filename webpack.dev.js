// 开发环境
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(), // 查看要修补(patch)的依赖-查看更改的文件
        new webpack.HotModuleReplacementPlugin(),
        new StyleLintPlugin({
            files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
        })
    ],
    module:{
        rules:[
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    }
});