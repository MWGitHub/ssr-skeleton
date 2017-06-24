const webpack = require('webpack'); // eslint-disable-line
const path = require('path');

const common = {
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
};

const client = {

};

const server = {
  entry: path.join(__dirname, 'src', 'server.jsx'),
  target: 'node',
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

module.exports = [
  // Object.assign({}, common, client),
  Object.assign({}, common, server)
];
