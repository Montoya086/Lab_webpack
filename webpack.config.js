const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'bundle.css'
  }), new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    chunks: ['index']
  }), new HtmlWebpackPlugin({
    template: './src/nuevos.html',
    filename: 'nuevos.html',
    chunks: ['index']
  }), new HtmlWebpackPlugin({
    template: './src/populares.html',
    filename: 'populares.html',
    chunks: ['index']
  }), new HtmlWebpackPlugin({
    template: './src/historia/p1.html',
    filename: 'historia/p1.html',
    chunks: ['index']
  }), new HtmlWebpackPlugin({
    template: './src/historia/p2.html',
    filename: 'historia/p2.html',
    chunks: ['index']
  }), new HtmlWebpackPlugin({
    template: './src/historia/p3.html',
    filename: 'historia/p3.html',
    chunks: ['index']
  })],
  module: {
    rules: [
      {
        test: /.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
