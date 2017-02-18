const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  entry: {
    admin: "./client/app/bundles/admin/index.js",
    portfolio: "./client/app/bundles/portfolio/index.js"
  },
  output: {
    path: './public/dist',
    filename: '[name]-[hash].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new ManifestPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
            presets: ['react', 'es2015', 'es2017', 'stage-2']
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}
