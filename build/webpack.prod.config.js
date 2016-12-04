var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config.js')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseConfig, {
    output: {
        path: path.resolve(__dirname, "../dist/static"),
        filename: 'js/bundle_[name].js',
        publicPath: '/static/',
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[name]_[hash:base64:5]'
                )
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract('style', [
                    'css?modules&importLoaders=1&localIdentName=[name]_[hash:base64:5]',
                    'stylus?{"resolve url": true}'
                ].join('!'))
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('css/[name].[contenthash].css', {allChunks: true}),
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: false
            },
            inject: true
        })
    ]
})