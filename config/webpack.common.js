const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const webpack = require("webpack");
const AutoDllPlugin = require("autodll-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "../src/main.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLPlugin({ template: path.join(__dirname, "../src/index.html") }),
    new VueLoaderPlugin(),
    // new AutoDllPlugin({
    //   inject: true,
    //   debug: true,
    //   filename: "[name]_[hash].js",
    //   path: "./dll",
    //   entry: {
    //     vendor: ["vue", "vue-router", "vuex", "react", "react-dom"]
    //   }
    // }),
    new webpack.optimize.SplitChunksPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        // exclude: /(node_modules|bower_components)/,
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  }
};
