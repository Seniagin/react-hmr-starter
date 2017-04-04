'use strict';

const webpack = require('webpack');
const config = require('./webpack.config');
const webpackDevMW = require('webpack-dev-middleware');
const webpackHotMW = require('webpack-hot-middleware');

const compiler = webpack(config);

module.exports = app => {
  app.use(webpackDevMW(compiler, {
    publicPath: config.output.publicPath
  }));

  app.use(webpackHotMW(compiler));
}
