var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config.js')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var projectRoot = path.resolve(__dirname, '../')
var srcRoot = path.join(projectRoot, 'src') // 开发源码目录

module.exports = merge(baseConfig, {
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: 'bundle.js',
        publicPath: '/',
        chunkFilename: 'js/[id].[chunkhash:5].js'
    },
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
            path.join(srcRoot, 'main.js')
        ]
    },
    devtool: '#eval-source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[path]__[name]__[local]__[hash:base64:5]'
                ]
            },
            {
                test: /\.styl$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[path]__[name]__[local]__[hash:base64:5]',
                    'stylus'
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, '../src/index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: false
            }
        })
    ]
})