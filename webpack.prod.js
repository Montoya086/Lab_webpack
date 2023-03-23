const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    performance: {
        hints: false,
    },
    entry: {
        index: './src/index.js',
        nuevos: './src/nuevos.js',
        populares: './src/populares.js',
        p1: './src/js/p1.js',
        p2: './src/js/p2.js',
        p3: './src/js/p3.js',
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
        chunks: ['nuevos']
      }), new HtmlWebpackPlugin({
        template: './src/populares.html',
        filename: 'populares.html',
        chunks: ['populares']
      }), new HtmlWebpackPlugin({
        template: './src/historia/p1.html',
        filename: 'historia/p1.html',
        chunks: ['p1']
      }), new HtmlWebpackPlugin({
        template: './src/historia/p2.html',
        filename: 'historia/p2.html',
        chunks: ['p2']
      }), new HtmlWebpackPlugin({
        template: './src/historia/p3.html',
        filename: 'historia/p3.html',
        chunks: ['p3']
      })],
      module: {
        rules: [
          {
            test: /.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ],
      },
})