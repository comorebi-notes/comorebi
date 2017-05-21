const path = require('path')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')

const devServerPort = 4000

function getEntry () {
  return {
    admin: "./client/app/bundles/admin/index.js",
    portfolio: "./client/app/bundles/portfolio/index.js"
  }
}

function getOutput (env) {
  return env === "development" ? ({
    path: path.join(__dirname, 'public/js'),
    filename: '[name].js',
    publicPath: `http://localhost:${devServerPort}/`
  }) : ({
    path: path.join(__dirname, '../../public/dist'),
    filename: '[name]-[hash].js'
  })
}

function getModule (env) {
  const module = {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-2']
          }
        },
        exclude: /node_modules/
      },
      { test: /\.css$/,  loader: "style-loader!css-loader" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      { test: /\.gif$/,  loader: "url-loader?mimetype=image/png" },
      { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: "file-loader?name=[name].[ext]" }
    ]
  }
  if (env !== "development") module.rules[0].use.query.cacheDirectory = true
  return module
}

function getPlugins (env) {
  const plugins = []
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    })
  )
  if (env === "development") {
    plugins.push(new webpack.NoEmitOnErrorsPlugin())
  } else {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        minimize: true,
        comments: false,
        compress: {
          unused: true,
          dead_code: true, // big one--strip code that will never execute
          warnings: false, // good for prod apps so users can't peek behind curtain
          drop_debugger: true,
          conditionals: true,
          evaluate: true,
          drop_console: true, // strips console statements
          sequences: true,
          booleans: true
        },
      })
    )
    plugins.push(new ManifestPlugin())
  }
  return plugins
}

function getConfig (env) {
  const config = {
    entry:   getEntry(),
    output:  getOutput(env),
    module:  getModule(env),
    plugins: getPlugins(env),
  }
  if (env === "development") {
    config.resolve = {
      extensions: ['*', '.js', '.json']
    }
    config.devServer = {
      contentBase: '../public/dist',
      port: devServerPort
    }
    config.devtool = "inline-source-map"
  }
  return config
}

module.exports = function (env) {
  return [getConfig(env)]
}
