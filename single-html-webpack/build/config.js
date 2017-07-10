var path = require('path')
module.exports = {
  base: {
    entry: './src/js/main.js',
    outputFileName: 'asset/main.js',
    outputPath: path.resolve(__dirname, '../dist'),
    outputPublicPath: '/',
    template: './src/index.html'
  },
  build: {},
  dev: {
    port: 8084,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}
