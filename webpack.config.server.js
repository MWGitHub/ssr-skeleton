const webpack = require('webpack'); // eslint-disable-line
const path = require('path');

const server = {
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ],
  },
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'src', 'server.jsx')
  ],
  target: 'node',
  node: {
    __dirname: true
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.bundle.js'
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false
    })
  ],
  devtool: 'source-map'
};

module.exports = server;
