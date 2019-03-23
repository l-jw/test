const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const cleanwebpackplugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const etwp = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    app: './src/index2.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'],
        // loader: ['style-loader', 'css-loader'],
        // use: [
        //   {loader: 'style-loader'},
        //   {loader: 'css-loader'},
        //   {loader: 'postcss-loader'}
        // ]
        use: etwp.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: etwp.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 1000,
              outputPath: 'images'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    port: 8090,
    open: true,
    hot: true
  },
  devtool: 'source-map',
  plugins: [
    new cleanwebpackplugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new htmlwebpackplugin({
      chunks: ['main'],
      filename: 'index.html',
      hash: true,
      template: './src/index.html'
    }),
    new htmlwebpackplugin({
      chunks: ['app', 'main'],
      filename: 'index2.html',
      hash: true,
      template: './src/index2.html'
    }),
    new etwp('./css/[name].css')
  ]
}