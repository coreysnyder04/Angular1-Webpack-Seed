var path = require('path');
var webpack = require('webpack');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';

module.exports = {

  context: __dirname + '/app',

  module: {
    loaders: [
      {test: /\.css$/, loader: "style-loader!css-loader" },
      {test: /\.less/, loader: "style-loader!css-loader!less-loader" },
      {test: /\.png$/, loader: "url-loader?limit=100000" },
      {test: /\.jpg$/, loader: "file-loader" },
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },

  entry: isTest ? {} : {
    app: ['./app.js'],
    vendor: [
      'angular',
      'angular-route',
      'underscore',
      'bootstrap/dist/css/bootstrap.css'
    ]
  },

  output: isTest ? {} : {
    path: __dirname + '/app/dist',
    filename: '[name].bundle.js',
    publicPath: '/dist'
  },

  plugins: isTest ? [] : [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ],

  resolve: {
    root: [
      path.resolve('./app')
    ]
  },

  devServer: {
    contentBase: './app',
    hot: false,
    historyApiFallback: true
  }
};
