var merge = require('webpack-merge')
var webpack = require('webpack')
var baseWebpackConfig = require('./webpack.base.conf')
var config = require('./config.js')
module.exports = merge(baseWebpackConfig, {
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 启用 HMR
  ],
  devServer: {
    contentBase: config.dev.contentBase,
    publicPath: config.dev.publicPath,
    port: config.dev.port
  }
})
