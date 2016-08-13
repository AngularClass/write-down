var path = require('path');
var webpack = require('webpack');

var config = {
  cache: true,
  devtool: 'source-map',

  entry: './src/app/index.ts',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin({})
  ],

  module: {
    loaders: [
      { test: /\.ts$/,   loader: 'awesome-typescript-loader' }
    ]
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },

  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    port: 3000,
    hot: true,
    inline: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },

  node: {
    global: true,
    process: true,
    Buffer: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false,
    clearTimeout: true,
    setTimeout: true
  }
};
module.exports = config;
