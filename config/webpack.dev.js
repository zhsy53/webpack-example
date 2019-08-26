const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "../src/main.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLPlugin({ template: path.join(__dirname, "../src/index.html") })
  ],
  devServer: {
    host: "0.0.0.0",
    port: 8899,
    hot: true,
    open: true,
    overlay: { errors: true }
  }
};
