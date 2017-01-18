var optimize = require('webpack').optimize;
var path = require('path');
var DllPlugin = require('webpack').DllPlugin;

module.exports = (function() {
  var config = {
    entry: {
      vendor: ['./app/vendor.ts']
    },
    module: {
      loaders: [
        {
          test: /\.ts?$/,
          include: [path.resolve('app')],
          loaders: ['awesome-typescript-loader']
        }
      ]
    },
    output: {
      path: 'dll',
      filename: 'dll.[name].js',
      library: '[name]'
    },
    plugins: [
      new DllPlugin({
          path: path.resolve('dll', '[name]-manifest.json'),
          name: '[name]',
          context: path.resolve('app')
      })
    ]
  };

  return config;
})();
