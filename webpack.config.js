const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

// eslint-disable-next-line
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  devServer: {
    port: 7890,
    historyApiFallback: true
  },
  plugins: [
    new HtmlPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: './src/favicon.ico' },
    ]),
    new FaviconsWebpackPlugin('/src/favicon.ico')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('postcss-import')(),
                require('autoprefixer')(),
                require('postcss-nested')(),
                require('postcss-simple-vars')()
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpeg|jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 1000 },
        },
      }
    ]
  }
};
