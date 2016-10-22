const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/Index',
  output: {
    path: './build',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
  },
};