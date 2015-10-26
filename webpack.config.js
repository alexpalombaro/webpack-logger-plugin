var path = require('path');
var WebpackLoggerPlugin = require('./index');

var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'tests/entry.js'),
  output: {
    filename: 'entry-bundled.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new WebpackLoggerPlugin({
      compress: {
        'unused': true,
        'dead_code': true,
        'drop_debugger':true
      }
    })
  ]
};
