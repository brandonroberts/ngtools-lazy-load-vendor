var ngToolsWebpack = require('@ngtools/webpack');
var DllReferencePlugin = require('webpack').DllReferencePlugin;
var path = require('path');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './app/main.jit.ts',
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: 'app.main.js'
  },
  plugins: [
    new ngToolsWebpack.AotPlugin({
      tsConfigPath: './tsconfig.json',
      typeChecking: false,
      skipCodeGeneration: true
    }),
    new DllReferencePlugin({
      context: path.resolve('app'),
      manifest: require(path.resolve('./dll/vendor-manifest.json'))
    })
  ],
  module: {
    loaders: [
      { test: /\.scss$/, loaders: ['raw-loader', 'sass-loader'] },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.ts$/, loaders: ['@ngtools/webpack'] }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};
