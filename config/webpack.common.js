const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: path.join(__dirname, "../src/main.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLPlugin({ template: path.join(__dirname, "../src/index.html") }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  }
};
