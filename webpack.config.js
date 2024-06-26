const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },

  plugins: [
    new HtmlWebpackPlugin({
        title: 'Restaurant Page',
        template: './src/index.html',
        inject: 'head',
    })
  ]
};