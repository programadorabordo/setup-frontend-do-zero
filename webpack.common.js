const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader' 
      },
      {
        test: /\.(svg|png|jpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images',
          publicPath: 'images'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: false,
      hash: true,
      inject: false,
      template: './index-template.html'
    })
  ]
};