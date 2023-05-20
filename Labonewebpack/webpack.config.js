const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");




module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'production'),
    filename: 'pro',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],

      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
},
plugins: [new HtmlWebpackPlugin(
  {
    template: './index.html',
    inject:"body",
    filename: './index.html',
  }
)
,new MiniCssExtractPlugin()
], optimization: {
  minimize: true,
  minimizer: [new TerserPlugin()],
},
devServer:{
  compress:true,
  port:4000,
  static:{
    directory: path.join(__dirname, 'dist')
  }
}


}