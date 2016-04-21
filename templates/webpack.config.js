/**
 * React Native Webpack Starter Kit
 * https://github.com/jhabdas/react-native-webpack-starter-kit
 */
(function() {
  'use strict'

  var path = require('path');
  var webpack = require('webpack');
  var WebpackNotifierPlugin = require('webpack-notifier');

  module.exports = {
    debug: true,
    devtool: 'source-map',
    plugins: [
        new WebpackNotifierPlugin()
    ],
    entry: {
      'index.ios': ['./index.ios.js'],
      'index.android': ['./index.android.js'],
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
    },
    module: {
      preLoaders: [
        {
          test: /\.(js|jsx|es6)$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'eslint-loader',
        }
      ],
      loaders: [
        {
          test: /\.js$/,
          include: /node_modules\/react-native/,
          loader: 'babel',
          query: {
            cacheDirectory: true,
            presets: ['es2015', 'stage-1', 'react']
          }
        },
        {
          test: /\.(js|jsx|es6)$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            cacheDirectory: true,
            presets: ['es2015', 'stage-1', 'react']
          }
        }
      ]
    }
  }
}())
