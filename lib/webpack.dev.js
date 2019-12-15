const merge = require('webpack-merge');
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'dev',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

  ],
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
  },
};
module.exports = merge(baseConfig, devConfig);
