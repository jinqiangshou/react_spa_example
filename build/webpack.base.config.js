var webpack = require('webpack')
var path = require('path')
var projectRoot = path.resolve(__dirname, '../')
var srcRoot = path.join(projectRoot, 'src') // 开发源码目录

module.exports = {
    entry: path.join(srcRoot, 'main.js'),
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: "eslint",
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.(woff2?|eot|ttf|svg|otf)\??.*$/, 
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'font/[name]_[hash:7].[ext]'
                }
            },
            {
                test: /\.(png|jpe?g|gif)\??.*$/, 
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name]_[hash:7].[ext]'
                }
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: srcRoot,
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    babel: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['transform-runtime', 'transform-decorators-legacy']
    },
    resolve: {
        extensions: ['', '.js','.jsx'],
        root: [
            path.resolve(__dirname, "../src")
        ],
        fallback: [
            path.join(__dirname, '../node_modules')
        ]
    },
    resolveLoader: {
        fallback: [
            path.join(__dirname, '../node_modules')
        ]
    },
    eslint: {
        configFile: path.resolve(projectRoot, '.eslintrc.js'),
        ignoreFile: path.resolve(projectRoot, '.eslintignore'),
        formatter: require('eslint-friendly-formatter'),
        failOnWarning: true,
        failOnError: true
    }
}