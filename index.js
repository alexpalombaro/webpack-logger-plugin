var fs = require('fs');
var path = require('path');
var assign = require('object-assign');

function WebpackLoggerPlugin(options) {
  if (typeof options !== 'object') {
    options = {};
  }

  this.options = assign({
    'filename': 'webpack.log',
    'append': true
  }, options);
}

WebpackLoggerPlugin.prototype.apply = function (compiler) {
  var self = this;
  compiler.plugin('done', function (stats) {
    var filePath = path.resolve(__dirname, self.options.filename);
    var data = fs.existsSync(filePath) && self.options.append ? fs.readFileSync(filePath, 'utf8') : '';
    if (data.length) {
      data = data.concat('\n\n');
    }

    function lineBreak(n) {
      if (typeof n !== 'number') {
        n = 62;
      }
      var s = '\n';
      while (n--) {
        s += '-';
      }
      return s + '\n';
    }

    data = data.concat(new Date(stats.endTime).toString(), lineBreak(), stats.toString());
    fs.writeFileSync(filePath, data, 'utf8');
  });
};

module.exports = WebpackLoggerPlugin;
