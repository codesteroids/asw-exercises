const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/index.js',
  },
  output: {
    filename: './js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: devMode ? 'css/styles.css' : 'css/styles.[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new CopyPlugin([
      { 
        from: '*', 
        to: 'img',
        context: 'src/img/'
      },
    ]),
    new HtmlWebpackPlugin({
      templateParameters: {
        'warning': '!!!!THIS IS A GENERATED HTML, IF YOU WANT TO MAKE PERMANENT CHANGES USE THE index.html FILE LOCATED IN src/html',
        'title': 'Exercise #3 ASW',
      },
      template: 'src/html/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sourceMapContents: false
            }
          },
          
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader'
      },
      /* {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: 'js',
        }
      }, */
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: true,
    compress: true,
    port: 5555
  },
};