function WebpackLoggerPlugin(options) {
  if (typeof options !== 'object') {
    options = {};
  }

  this.config = options || {};
}

WebpackLoggerPlugin.prototype.apply = function (compiler) {
  compiler.plugin('compilation', function (compilation) {
    compilation.plugin()
  })
};

module.exports = WebpackLoggerPlugin;
