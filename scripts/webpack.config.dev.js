'use strict'

var webpack = require('webpack')
var path = require('path')

var webpackConfig = {
  entry: {
    'index': ['./frontend/index.js']
  },
  output: {
    path: path.resolve('./app/public/dist/'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', ['env'], 'flow'],
          plugins: ['add-module-exports', 'transform-runtime']
        }
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [],
  devtool: 'source-map'
};

module.exports = webpackConfig;
