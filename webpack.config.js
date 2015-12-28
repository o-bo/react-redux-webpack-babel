const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    //'webpack-dev-server/client?http://localhost:3000',
    //'webpack/hot/dev-server',
    './app/components/index.jsx'
  ],
  output: {
    path: path.join(__dirname, "app/assets/javascripts/components"),
    filename: "[name].js",
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json']
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /(\.scss|\.css)$/,
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          require.resolve('sass-loader') + '?sourceMap'
        ]
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
