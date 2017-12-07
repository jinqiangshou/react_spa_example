var webpack = require('webpack')
var path = require('path')
var projectRoot = path.resolve(__dirname, '../')
var srcRoot = path.join(projectRoot, 'src') // 开发源码目录

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  entry: path.join(srcRoot, 'main.js'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'eslint-loader',
          options: {
            failOnWarning: true,
            failOnError: true,
            configFile: resolve('.eslintrc.js'),
            ignoreFile: resolve('.eslintignore'),
            formatter: require('eslint-friendly-formatter')
          }
        }],
        enforce: 'pre',
        exclude: /node_modules/
      }, {
        test: /\.(woff2?|eot|ttf|svg|otf)\??.*$/, 
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'font/[name]_[hash:7].[ext]'
          }
        }]
      }, {
        test: /\.(png|jpe?g|gif)\??.*$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name]_[hash:7].[ext]'
          }
        }]
      }, {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-0'],
            plugins: ['transform-runtime', 'transform-decorators-legacy']
          }
        }],
        include: resolve('src'),
        exclude: /node_modules/
      }, {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js','.jsx'],
    modules: [resolve('src'), 'node_modules'],
    alias: {
      '@': resolve('src')
    }
  }
}
