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
    publicPath: 'http://localhost:4000/'
  },
  module: {
    rules: [
      {
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015', 'es2017', 'stage-2']
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.json']
  },
  devServer: {
    contentBase: '../public/dist',
    port: 4000
  },
  devtool: 'inline-source-map'
}
