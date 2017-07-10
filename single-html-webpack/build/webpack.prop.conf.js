var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var ImageminPlugin = require('imagemin-webpack-plugin').default
module.exports = merge(baseWebpackConfig, {
  plugins: [
    new HtmlWebpackInlineSourcePlugin(),
    new UglifyJSPlugin(),
    new ImageminPlugin({
      pngquant: {
        quality: '95-100'
      }
    })
  ]
})
