// 开发环境
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
// const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        hot: true,
        contentBase: './',
    },
    plugins: [
        new webpack.NamedModulesPlugin(), // 查看要修补(patch)的依赖-查看更改的文件
        new webpack.HotModuleReplacementPlugin(),
        // new StyleLintPlugin({
        //     files: ['src/**/*.{vue,htm,html,css,sss,less,scss,sass}'],
        // })
    ],
    module:{
        rules:[
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(js|vue)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/, // 根据正则表达式，来确定应该查找哪些文件
                use: [ // 将其提供给指定的 loader (style-loader 和 css-loader)
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // 开启 CSS Modules
                            modules: true,
                            // 自定义生成的类名
                            // localIdentName: '[local]_[hash:base64:8]'
                        }
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'less-loader',
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    },
                ]
            },
        ]
    }
});