
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')
var config = require('./config.js')
module.exports = {
  entry: config.base.entry,
  output: {
    filename: config.base.outputFileName,
    path: config.base.outputPath,
    publicPath: config.base.outputPublicPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract('css-loader')
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          // resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        // 编译es6
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 100000
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: config.base.template,
      minify: {
        minifyCSS: true,
        removeComments: true,
        collapseWhitespace: true
      },
      inlineSource: '.(js|css)$' // embed all javascript and css inline
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new ExtractTextPlugin({
      filename: 'asset/main.css'
    })
  ]
}
