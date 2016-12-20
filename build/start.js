var path = require('path');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var opn = require('opn');

var config = require('./webpack.dev.config.js');

var defaultPort = 8080;

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
    stats: {color: true},
    inline: true,
    hot: true,
    quiet: true,
    contentBase: "./dist",
    historyApiFallback: true,
    proxy: {
        '/api/*': {
            target: 'http://localhost:3000',
            secure: false,
            changeOrigin: true
        }
    },
    publicPath: '/',
    watchOptions: {
      ignored: /node_modules/
    }
});

server.listen(defaultPort, (err, result) => {
    if (err) {
      return console.log(err);
    }

    console.log('listening on port 8080');
    opn('http://localhost:' + defaultPort);
});
