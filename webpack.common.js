const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main:  './src/app.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: true
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkHash].css',
      chunkFilename: '[id].[chunkHash].css'
    })
  ],
  output: {
    filename: '[name].[chunkHash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { // Script loader
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { // Style loader
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      { // Assets loader
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[hash].[ext]',
            useRelativePath: true
          }
        }]
      },
      { // HTML loader
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  }
};
