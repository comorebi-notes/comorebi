const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    admin: "./client/app/bundles/admin/index.js",
    portfolio: "./client/app/bundles/portfolio/index.js"
  },
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: '[name].js',
    publicPath: 'http://localhost:4000/',
    hot: true
  },
  module: {
    loaders: [
      {
        loaders: [
          'react-hot-loader/webpack',
          'babel?cacheDirectory=true,presets[]=es2015,presets[]=es2017,presets[]=stage-2,presets[]=react'
        ],
        exclude: /node_modules/,
        test: /\.js[x]?$/
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.json']
  },
  devServer: {
    contentBase: '../public/dist',
    port: 4000
  },
  devtool: 'inline-source-map'
}
