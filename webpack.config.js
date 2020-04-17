const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        app: './src/index.js'
    },
    // 开发环境中输出报错
    devtool: 'inline-source-map',
    // 自动化编译
    devServer: {
        hot: true, // 模块热替换(只更新改变的地方，不更新整个页面)
        contentBase: './dist'
    },
    plugins: [
        // 清理dist文件
        new CleanWebpackPlugin(),
        // 自动生成index.html文件
        new HtmlWebpackPlugin({
           title: 'Output Management'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/, // 根据正则表达式，来确定应该查找哪些文件
                use: [ // 将其提供给指定的 loader (style-loader 和 css-loader)
                    'style-loader',
                    'css-loader'
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
    }
};