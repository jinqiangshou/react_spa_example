var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config.js')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseConfig, {
    output: {
        path: path.resolve(__dirname, "../dist/staticDev"),
        filename: 'bundle.js',
        publicPath: '/staticDev/',
        chunkFilename: 'js/[id].[chunkhash:5].js'
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
    devServer: {
        port: 8080,
        stats: {color: true},
        inline: true,
        hot: true,
        quiet: true,
        contentBase: "./dist",
        historyApiFallback: {
            index: 'dev.html'
        },
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000',
                secure: false,
                changeOrigin: true
            }
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: '../dev.html',
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: false
            }
        })
    ]
})