const path = require('path');
const HmtlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // setting wp to development mode
  mode: 'development',
  entry: {
    app: './src/App.jsx',
  },
  // source map to track down errors that comes from files
  devtool: 'inline-source-map',
  // config for wp-dev-server
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist'),
    hot: true,

    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /(node_modules|bower_components)/,
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    // to clean dist folder after run build
    new CleanWebpackPlugin(),
    // to create new index.html in case entry points change.
    new HmtlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: 'public/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
