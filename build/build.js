var shell = require('shelljs');

var webpack = require('webpack');
var path = require('path');

var webpackConfig = require('./webpack.prod.config');

shell.rm('-rf', path.resolve(__dirname, '../dist/index.html'));
shell.rm('-rf', path.resolve(__dirname, '../dist/static'));

webpack(webpackConfig, function (err, stats) {
  if (err) {
    throw err;
  }
  process.stdout.write(stats.toString({
    colors: true,
    chunks: false
  }) + '\n');
});