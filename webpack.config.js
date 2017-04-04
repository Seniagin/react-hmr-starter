const path              = require('path');
const webpack           = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'webpack-hot-middleware/client',
    './react/index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'public/dependencies/js'),
    publicPath: '/static/',
    filename: 'app.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  historyApiFallback: true,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  resolveLoader: {root: path.join(__dirname, "node_modules")},
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /\.js?x$/,
        loaders: ['react-hot', 'jsx', 'babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader:'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader:'style-loader!css-loader!sass-loader'
      }
    ]
  },
};