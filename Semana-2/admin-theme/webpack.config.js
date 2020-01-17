const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), //de onde nossos arqs serão servidos
    compress: true, //aqr final será comprimido
    publicPath: "dist",
    writeToDisk: true
  },
  entry: "./src/js/app.js", //arq js inicial do nosso desenvolvimento
  output: {
    filename: "app.js", //nome do arquivo de saída
    path: path.resolve(__dirname, "dist/js"), //localização do arquivo de saída
    publicPath: "dist"
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [
                  require("autoprefixer") //utilizado pelo bootstrap sass file para compilar mais rapido
                ];
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/, //utilizado para as fonts
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "../fonts/",
              publicPath: "../fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/app.css" //nome do arq final com o css extraido
    }),
    new webpack.ProvidePlugin({
      $: "jquery", //coloca o $ como variavel global para o jQuery
      jQuery: "jquery"
    })
  ]
};
