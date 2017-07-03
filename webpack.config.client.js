const webpack = require('webpack'); // eslint-disable-line
const path = require('path');

const client = {
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
    path.join(__dirname, 'src', 'ClientRoot.jsx')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.bundle.js'
  },
  devtool: 'source-map'
};


module.exports = client;
